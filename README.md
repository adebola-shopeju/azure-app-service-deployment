# Azure App Service Web App Deployment

## Live Application URL
https://webapp-lab-pelumi-gsc5fqdtb3g5hwfb.westeurope-01.azurewebsites.net

## Project Overview
This project demonstrates deploying a Node.js web application to Microsoft Azure App Service using the Azure Portal. The application is hosted on a fully managed PaaS environment and is accessible over HTTPS.

## Screenshots
| Screenshot | Description |
|---|---|
| environment-variables.png | Azure Portal showing environment variables configured in App Settings (NODE_ENV, APP_VERSION, WELCOME_MESSAGE) |
| log-stream.png | Live log stream showing real-time application and runtime logs |
| app-service-overview.png | App Service Overview page showing running status, default domain, and runtime stack |
| live-app-browser.png | Live application running in browser over HTTPS — "Hello from Azure App Service!" |
| metrics.png | Azure Metrics showing CPU Time chart for the deployed application |
| scaleup.png | Scale up page showing available pricing tiers (currently on Free F1) |
| scaleout.png | Scale out page showing horizontal scaling options (disabled on Free tier) |
| deployment-slots.png | Deployment slots page — requires Standard tier or above to enable |

## Repository Structure
```
├── app.js
├── package.json
├── README.md
├── summary.txt
├── environment-variables.png
├── log-stream.png
├── app-service-overview.png
├── live-app-browser.png
├── metrics.png
├── scaleup.png
├── scaleout.png
└── deployment-slots.png
```
