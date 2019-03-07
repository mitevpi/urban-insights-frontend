![Logo](/src/assets/logo.png)

# Urban Insights

[![Generic badge](https://img.shields.io/badge/Deployment-AWS-green.svg)](https://urban-insights.mitevpi.now.sh/)

[![Generic badge](https://img.shields.io/badge/Testing-Glitch-green.svg)](https://github.com/mitevpi/urban-insights-frontend/wiki/Glitch)

[![Generic badge](https://img.shields.io/badge/Backend-Heroku-green.svg)](https://urban-insights-api.herokuapp.com)

**AEC Hackathon 2019 Silicon Valley** project.
An application for visualizing proposed buildings, their code-constraints, and environmental analyses in situ using AR & VR.

## Current Deployed Build

Current build can be accessed from the "Deployment" Badge above.

## Developer Set Up

Clone the repository and run the commands below to start the development server. Navigate to localhost:8080 on your local machine to visualize.

``` cmd
npm install
npm run serve
```

In order to deploy this project as intended, use [Now](https://zeit.co/dashboard)'s documentation to deploy a static, serverless build of the application. Once an account has been created with Now, you should be able to run the commands below in the root of the repository to deploy.

``` cmd
npm run build
now
```

## Native Mobile Builds

This project is configured to build to native Android and iOS devices using [Capacitator](https://capacitor.ionicframework.com/docs/getting-started/with-ionic) through Ionic.

## Concept

**Stack Diagram**
![stack](/screenshots/stackDiagram.png)

**Prototype**
![proto](/screenshots/app.png)