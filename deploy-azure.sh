#!/bin/bash

# Azure Deployment Script for Alaska Airlines Dashboard
# Prerequisites: Azure CLI installed and logged in (az login)

set -e

# Configuration
RESOURCE_GROUP="alaska-airlines-rg"
LOCATION="eastus"
APP_NAME="alaska-airlines-dashboard"
STORAGE_ACCOUNT="${APP_NAME}storage"
STATIC_APP_NAME="${APP_NAME}-static"

echo "🚀 Starting Azure deployment for Alaska Airlines Dashboard..."

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo "❌ Azure CLI is not installed. Please install it first:"
    echo "https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Check if logged in to Azure
if ! az account show &> /dev/null; then
    echo "❌ Not logged in to Azure. Please run 'az login' first."
    exit 1
fi

echo "✅ Azure CLI found and authenticated"

# Create resource group
echo "📦 Creating resource group: $RESOURCE_GROUP"
az group create \
    --name "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --output table

# Option 1: Deploy to Azure Static Web Apps (Recommended)
echo "🌐 Creating Azure Static Web App: $STATIC_APP_NAME"
az staticwebapp create \
    --name "$STATIC_APP_NAME" \
    --resource-group "$RESOURCE_GROUP" \
    --source "https://github.com/YOUR_USERNAME/alaska-airlines-dashboard" \
    --location "$LOCATION" \
    --branch "main" \
    --app-location "/" \
    --output-location "dist" \
    --login-with-github

echo "✅ Static Web App created successfully!"

# Get the URL
STATIC_URL=$(az staticwebapp show --name "$STATIC_APP_NAME" --resource-group "$RESOURCE_GROUP" --query "defaultHostname" -o tsv)
echo "🌍 Your app will be available at: https://$STATIC_URL"

# Option 2: Alternative - Azure App Service
read -p "Do you also want to create an Azure App Service? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🏗️ Creating Azure App Service..."
    
    # Create App Service Plan
    az appservice plan create \
        --name "${APP_NAME}-plan" \
        --resource-group "$RESOURCE_GROUP" \
        --sku F1 \
        --is-linux \
        --output table
    
    # Create Web App
    az webapp create \
        --resource-group "$RESOURCE_GROUP" \
        --plan "${APP_NAME}-plan" \
        --name "$APP_NAME" \
        --runtime "NODE:18-lts" \
        --output table
    
    # Configure deployment
    az webapp deployment source config \
        --name "$APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --repo-url "https://github.com/YOUR_USERNAME/alaska-airlines-dashboard" \
        --branch "main" \
        --manual-integration
    
    # Set build configuration
    az webapp config appsettings set \
        --resource-group "$RESOURCE_GROUP" \
        --name "$APP_NAME" \
        --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true \
        --output table
    
    APP_SERVICE_URL=$(az webapp show --name "$APP_NAME" --resource-group "$RESOURCE_GROUP" --query "defaultHostName" -o tsv)
    echo "🌍 App Service URL: https://$APP_SERVICE_URL"
fi

# Create Application Insights for monitoring
echo "📊 Creating Application Insights..."
az monitor app-insights component create \
    --app "${APP_NAME}-insights" \
    --location "$LOCATION" \
    --resource-group "$RESOURCE_GROUP" \
    --application-type web \
    --output table

# Get instrumentation key
INSIGHTS_KEY=$(az monitor app-insights component show \
    --app "${APP_NAME}-insights" \
    --resource-group "$RESOURCE_GROUP" \
    --query "instrumentationKey" -o tsv)

echo "📈 Application Insights created with key: $INSIGHTS_KEY"
echo "Add this to your .env.production file: VITE_APPINSIGHTS_INSTRUMENTATIONKEY=$INSIGHTS_KEY"

# Create Storage Account for assets (optional)
echo "💾 Creating Storage Account for assets..."
az storage account create \
    --name "$STORAGE_ACCOUNT" \
    --resource-group "$RESOURCE_GROUP" \
    --location "$LOCATION" \
    --sku Standard_LRS \
    --kind StorageV2 \
    --output table

# Enable static website hosting
az storage blob service-properties update \
    --account-name "$STORAGE_ACCOUNT" \
    --static-website \
    --index-document index.html \
    --404-document 404.html \
    --output table

echo "🎉 Deployment completed successfully!"
echo ""
echo "📋 Summary:"
echo "  Resource Group: $RESOURCE_GROUP"
echo "  Static Web App: $STATIC_APP_NAME"
echo "  Static Web App URL: https://$STATIC_URL"
if [[ -n "$APP_SERVICE_URL" ]]; then
    echo "  App Service URL: https://$APP_SERVICE_URL"
fi
echo "  Application Insights Key: $INSIGHTS_KEY"
echo "  Storage Account: $STORAGE_ACCOUNT"
echo ""
echo "🔧 Next Steps:"
echo "1. Update your GitHub repository URL in the script"
echo "2. Push your code to GitHub to trigger automatic deployment"
echo "3. Add the Application Insights key to your .env.production file"
echo "4. Configure custom domain if needed"
echo ""
echo "📚 Documentation: https://docs.microsoft.com/en-us/azure/static-web-apps/"
