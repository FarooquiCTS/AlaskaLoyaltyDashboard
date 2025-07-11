# 🚀 Quick Azure Deployment Guide

## Option 1: Azure Static Web Apps (Recommended)

### Prerequisites
- Azure account ([Free tier available](https://azure.microsoft.com/free/))
- Azure CLI installed
- GitHub repository with your code

### Quick Deployment Steps

1. **Login to Azure**
   ```bash
   az login
   ```

2. **Run the deployment script**
   ```bash
   # For Linux/Mac
   chmod +x deploy-azure.sh
   ./deploy-azure.sh

   # For Windows PowerShell
   .\deploy-azure.ps1
   ```

3. **Or deploy manually via Azure Portal**
   - Go to [Azure Portal](https://portal.azure.com)
   - Search for "Static Web Apps"
   - Click "Create"
   - Connect to your GitHub repository
   - Set build details:
     - App location: `/`
     - Output location: `dist`
   - Deploy!

## Option 2: One-Click Azure Button

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.StaticApp)

## Environment Variables for Azure

Add these to your Azure Static Web App configuration:

```
VITE_ENVIRONMENT=production
VITE_API_BASE_URL=https://api.alaskaairlines.com
VITE_AZURE_REGION=eastus
```

## Build Settings

- **Build preset**: React
- **App location**: `/`
- **Output location**: `dist`
- **Build command**: `npm run build`

## Custom Domain Setup

1. Go to your Static Web App in Azure Portal
2. Click "Custom domains"
3. Add your domain
4. Update DNS records as instructed
5. SSL is automatically provisioned

## Monitoring

Your deployment includes Application Insights for monitoring:
- Performance metrics
- Error tracking
- User analytics
- Custom events

## Cost Estimate

- **Static Web Apps (Free tier)**: $0/month
  - 100GB bandwidth
  - Custom domains included
  - SSL certificates included

- **Static Web Apps (Standard)**: ~$9/month
  - Unlimited bandwidth
  - Advanced features

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify `npm run build` works locally
- Check environment variables

### Deployment Fails
- Ensure repository is public or Azure has access
- Check GitHub Actions logs
- Verify file paths in workflow

### App Not Loading
- Check browser console for errors
- Verify routing configuration
- Check if API endpoints are accessible

## Support

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Azure Support](https://azure.microsoft.com/support/)
- [GitHub Issues](https://github.com/your-username/alaska-airlines-dashboard/issues)
