# Azure Deployment Script for Alaska Airlines Dashboard (PowerShell)
# Prerequisites: Azure CLI installed and logged in (az login)

param(
    [string]$ResourceGroup = "alaska-airlines-rg",
    [string]$Location = "eastus",
    [string]$AppName = "alaska-airlines-dashboard",
    [string]$GitHubRepo = "YOUR_USERNAME/alaska-airlines-dashboard"
)

Write-Host "🚀 Starting Azure deployment for Alaska Airlines Dashboard..." -ForegroundColor Green

# Check if Azure CLI is installed
try {
    az --version | Out-Null
    Write-Host "✅ Azure CLI found" -ForegroundColor Green
} catch {
    Write-Host "❌ Azure CLI is not installed. Please install it first:" -ForegroundColor Red
    Write-Host "https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
}

# Check if logged in to Azure
try {
    az account show | Out-Null
    Write-Host "✅ Azure CLI authenticated" -ForegroundColor Green
} catch {
    Write-Host "❌ Not logged in to Azure. Please run 'az login' first." -ForegroundColor Red
    exit 1
}

# Create resource group
Write-Host "📦 Creating resource group: $ResourceGroup" -ForegroundColor Yellow
az group create --name $ResourceGroup --location $Location --output table

# Create Azure Static Web App
Write-Host "🌐 Creating Azure Static Web App..." -ForegroundColor Yellow
$staticAppName = "$AppName-static"

az staticwebapp create `
    --name $staticAppName `
    --resource-group $ResourceGroup `
    --source "https://github.com/$GitHubRepo" `
    --location $Location `
    --branch "main" `
    --app-location "/" `
    --output-location "dist" `
    --login-with-github

Write-Host "✅ Static Web App created successfully!" -ForegroundColor Green

# Get the URL
$staticUrl = az staticwebapp show --name $staticAppName --resource-group $ResourceGroup --query "defaultHostname" -o tsv
Write-Host "🌍 Your app will be available at: https://$staticUrl" -ForegroundColor Cyan

# Ask about App Service
$createAppService = Read-Host "Do you also want to create an Azure App Service? (y/n)"
if ($createAppService -eq "y" -or $createAppService -eq "Y") {
    Write-Host "🏗️ Creating Azure App Service..." -ForegroundColor Yellow
    
    # Create App Service Plan
    az appservice plan create `
        --name "$AppName-plan" `
        --resource-group $ResourceGroup `
        --sku F1 `
        --is-linux `
        --output table
    
    # Create Web App
    az webapp create `
        --resource-group $ResourceGroup `
        --plan "$AppName-plan" `
        --name $AppName `
        --runtime "NODE:18-lts" `
        --output table
    
    # Configure deployment
    az webapp deployment source config `
        --name $AppName `
        --resource-group $ResourceGroup `
        --repo-url "https://github.com/$GitHubRepo" `
        --branch "main" `
        --manual-integration
    
    # Set build configuration
    az webapp config appsettings set `
        --resource-group $ResourceGroup `
        --name $AppName `
        --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true `
        --output table
    
    $appServiceUrl = az webapp show --name $AppName --resource-group $ResourceGroup --query "defaultHostName" -o tsv
    Write-Host "🌍 App Service URL: https://$appServiceUrl" -ForegroundColor Cyan
}

# Create Application Insights
Write-Host "📊 Creating Application Insights..." -ForegroundColor Yellow
az monitor app-insights component create `
    --app "$AppName-insights" `
    --location $Location `
    --resource-group $ResourceGroup `
    --application-type web `
    --output table

# Get instrumentation key
$insightsKey = az monitor app-insights component show `
    --app "$AppName-insights" `
    --resource-group $ResourceGroup `
    --query "instrumentationKey" -o tsv

Write-Host "📈 Application Insights created with key: $insightsKey" -ForegroundColor Green
Write-Host "Add this to your .env.production file: VITE_APPINSIGHTS_INSTRUMENTATIONKEY=$insightsKey" -ForegroundColor Yellow

# Create Storage Account
Write-Host "💾 Creating Storage Account for assets..." -ForegroundColor Yellow
$storageAccount = "$($AppName.Replace('-', ''))storage"

az storage account create `
    --name $storageAccount `
    --resource-group $ResourceGroup `
    --location $Location `
    --sku Standard_LRS `
    --kind StorageV2 `
    --output table

# Enable static website hosting
az storage blob service-properties update `
    --account-name $storageAccount `
    --static-website `
    --index-document index.html `
    --404-document 404.html `
    --output table

Write-Host ""
Write-Host "🎉 Deployment completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Summary:" -ForegroundColor Cyan
Write-Host "  Resource Group: $ResourceGroup"
Write-Host "  Static Web App: $staticAppName"
Write-Host "  Static Web App URL: https://$staticUrl"
if ($appServiceUrl) {
    Write-Host "  App Service URL: https://$appServiceUrl"
}
Write-Host "  Application Insights Key: $insightsKey"
Write-Host "  Storage Account: $storageAccount"
Write-Host ""
Write-Host "🔧 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Update the GitHub repository URL in the script parameters"
Write-Host "2. Push your code to GitHub to trigger automatic deployment"
Write-Host "3. Add the Application Insights key to your .env.production file"
Write-Host "4. Configure custom domain if needed"
Write-Host ""
Write-Host "📚 Documentation: https://docs.microsoft.com/en-us/azure/static-web-apps/"
