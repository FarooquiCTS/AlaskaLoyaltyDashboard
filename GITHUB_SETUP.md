# 🚀 GitHub Setup & Deployment Guide

## 📋 GitHub Repository Setup

### Step 1: Initialize Git Repository
```bash
# Navigate to your project directory
cd d:\AlaskaUserNewDashboard

# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "🎉 Initial commit: Alaska Airlines Loyalty Dashboard

✨ Features:
- Modern React TypeScript dashboard
- Professional Alaska Airlines branding
- Interactive component library
- Custom React hooks for state management
- Responsive design with smooth animations
- Elite status tracking and achievements system"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in repository details:
   - **Repository name**: `alaska-airlines-dashboard`
   - **Description**: `Modern React TypeScript loyalty dashboard for Alaska Airlines with beautiful UI components and smooth animations`
   - **Visibility**: Choose Public or Private
   - **Don't initialize** with README, .gitignore, or license (we already have these)

### Step 3: Connect Local Repository to GitHub
```bash
# Add remote repository (replace [your-username] with your GitHub username)
git remote add origin https://github.com/[your-username]/alaska-airlines-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "New site from Git"
4. Connect to GitHub and select your repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
6. Click "Deploy site"

### Option 3: GitHub Pages
1. In your GitHub repository, go to Settings
2. Scroll to "Pages" section
3. Select source: "GitHub Actions"
4. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Option 4: Azure Static Web Apps (Recommended for Azure)
1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource" → Search for "Static Web Apps"
3. Click "Create" and fill in the details:
   - **Subscription**: Select your Azure subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `alaska-airlines-dashboard`
   - **Plan type**: Free (for development) or Standard (for production)
   - **Region**: Choose closest to your users
4. In the "Deployment details" section:
   - **Source**: GitHub
   - **Organization**: Your GitHub username
   - **Repository**: `alaska-airlines-dashboard`
   - **Branch**: `main`
5. In the "Build Details" section:
   - **Build Presets**: React
   - **App location**: `/` (root)
   - **Api location**: (leave empty)
   - **Output location**: `dist`
6. Click "Review + create" then "Create"

Azure will automatically:
- Create a GitHub Action workflow
- Build and deploy your app
- Provide a custom domain (you can add your own later)
- Set up automatic deployments on every push to main

### Option 5: Azure App Service
1. Go to [Azure Portal](https://portal.azure.com)
2. Click "Create a resource" → "Web App"
3. Configure the web app:
   - **Resource Group**: Create new or use existing
   - **Name**: `alaska-airlines-dashboard` (must be globally unique)
   - **Publish**: Code
   - **Runtime stack**: Node 18 LTS
   - **Operating System**: Linux
   - **Region**: Choose your preferred region
   - **Pricing plan**: F1 (Free) or higher
4. Click "Review + create" then "Create"
5. Once created, go to your App Service
6. In the left menu, click "Deployment Center"
7. Choose GitHub as source and authorize
8. Select your repository and branch
9. Azure will detect it's a Node.js app and configure build settings:
   - **Build provider**: GitHub Actions
   - **Runtime stack**: Node.js
   - **Version**: 18.x
   - **Build command**: `npm run build`
   - **Start command**: `npm start` (we'll need to add this)

### Option 6: Azure Container Instances (Advanced)
For containerized deployment using Docker:

1. Create a `Dockerfile` in your project root:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. Create `nginx.conf`:
```nginx
events {
    worker_connections 1024;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    server {
        listen 80;
        server_name localhost;
        root /usr/share/nginx/html;
        index index.html;

        # Handle client-side routing
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Enable gzip compression
        gzip on;
        gzip_types text/css application/javascript application/json;
    }
}
```

3. Build and push to Azure Container Registry:
```bash
# Build Docker image
docker build -t alaska-airlines-dashboard .

# Tag for Azure Container Registry
docker tag alaska-airlines-dashboard your-registry.azurecr.io/alaska-airlines-dashboard:latest

# Push to registry
docker push your-registry.azurecr.io/alaska-airlines-dashboard:latest
```

4. Deploy to Azure Container Instances via Azure Portal

## 🚀 Azure Deployment Commands

### Quick Azure Static Web Apps Deployment (CLI)
```bash
# Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Login to Azure
az login

# Create resource group
az group create --name alaska-airlines-rg --location "East US"

# Deploy (run from project root)
swa deploy --app-location ./ --output-location dist --app-name alaska-airlines-dashboard
```

### Azure App Service Deployment (CLI)
```bash
# Install Azure CLI if not already installed
# https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login

# Create resource group
az group create --name alaska-airlines-rg --location "East US"

# Create App Service plan
az appservice plan create --name alaska-airlines-plan --resource-group alaska-airlines-rg --sku F1 --is-linux

# Create web app
az webapp create --resource-group alaska-airlines-rg --plan alaska-airlines-plan --name alaska-airlines-dashboard --runtime "NODE:18-lts"

# Configure deployment from GitHub
az webapp deployment source config --name alaska-airlines-dashboard --resource-group alaska-airlines-rg --repo-url https://github.com/[your-username]/alaska-airlines-dashboard --branch main --manual-integration

# Set build commands
az webapp config appsettings set --resource-group alaska-airlines-rg --name alaska-airlines-dashboard --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true
```

## 🔧 Azure-Specific Configuration

### Add build script for Azure App Service
Update your `package.json` with Azure-compatible scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "start": "serve dist -s -n -L -p $PORT",
    "azure:build": "npm ci && npm run build"
  },
  "devDependencies": {
    // ...existing dependencies
    "serve": "^14.2.1"
  }
}
```

### Create Azure-specific environment file
Create `.env.production` for Azure production settings:
```bash
# Azure Production Settings
VITE_API_BASE_URL=https://your-api.azurewebsites.net
VITE_ENVIRONMENT=production
VITE_AZURE_REGION=eastus
```

### GitHub Actions for Azure (auto-generated)
Azure Static Web Apps will create this workflow in `.github/workflows/`:

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          api_location: ""
          output_location: "dist"

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: "close"
```

## 🌍 Azure Custom Domain Setup

### Add Custom Domain (after deployment)
1. Go to your Azure Static Web App or App Service
2. Click "Custom domains" in the left menu
3. Click "Add custom domain"
4. Enter your domain (e.g., `dashboard.alaskaairlines.com`)
5. Follow the DNS verification steps
6. Enable HTTPS (automatic with Azure)

## 💰 Azure Cost Optimization

### Free Tier Resources
- **Azure Static Web Apps**: 100 GB bandwidth/month, custom domains, SSL
- **Azure App Service**: F1 plan (1 GB RAM, 1 GB storage, 60 minutes/day)
- **Azure Storage**: 5 GB free storage with 20,000 requests

### Production Recommendations
- **Static Web Apps Standard**: $9/month for unlimited bandwidth
- **App Service Basic B1**: ~$54/month for production workloads
- **Azure CDN**: Global content delivery for better performance

## 📊 Azure Monitoring & Analytics

### Enable Application Insights
```bash
# Create Application Insights resource
az monitor app-insights component create --app alaska-airlines-insights --location eastus --resource-group alaska-airlines-rg --application-type web

# Get instrumentation key
az monitor app-insights component show --app alaska-airlines-insights --resource-group alaska-airlines-rg --query instrumentationKey
```

Add to your `.env.production`:
```bash
VITE_APPINSIGHTS_INSTRUMENTATIONKEY=your-instrumentation-key
```
