# aws-serverless-api-auth
Serverless API with authentication using AWS services

# 🚀 Serverless REST API with AWS Lambda, API Gateway, DynamoDB & Cognito <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" width="40" align="right">

![AWS Serverless](https://img.shields.io/badge/AWS-Serverless-orange?logo=amazon-aws) 
![DynamoDB](https://img.shields.io/badge/Database-DynamoDB-blue?logo=amazon-dynamodb) 
![Cognito](https://img.shields.io/badge/Auth-Cognito-yellowgreen?logo=amazon-cognito)

A secure serverless API implementation using AWS serverless technologies with JWT authentication.

## 📦 AWS Services Used

<p align="center">
  <img src="https://res.cloudinary.com/apideck/image/upload/w_128,f_auto/v1604487231/icons/amazon-api-gateway.png" title="API Gateway" width="40"/>
  <img src="https://img.icons8.com/color/48/000000/aws-lambda.png" title="Lambda" width="40"/> 
  <img src="https://img.icons8.com/color/48/000000/amazon-dynamodb.png" title="DynamoDB" width="40"/>
  <img src="https://img.icons8.com/color/48/000000/amazon-cognito.png" title="Cognito" width="40"/>
  <img src="https://img.icons8.com/color/48/000000/aws-iam.png" title="IAM" width="40"/>
</p>

## 📌 Features

- 🔐 JWT Authentication via AWS Cognito
- ⚡ Serverless architecture with AWS Lambda
- 🗃️ NoSQL database with DynamoDB
- 🔄 RESTful API endpoints via API Gateway
- 🔒 IAM-based authorization
- 📦 Infrastructure as Code (Serverless Framework)

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/your-username/serverless-api-auth.git
cd serverless-api-auth

# Install dependencies
npm install

# Install Serverless Framework globally
npm install -g serverless

⚙️ Configuration
1. Set up AWS credentials:
serverless config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY
2. Update serverless.yml with your Cognito details:
environment:
  USER_POOL_ID: your-cognito-user-pool-id
  CLIENT_ID: your-cognito-app-client-id

🚀 Deployment
# Deploy to AWS
serverless deploy

# Deploy with specific stage
serverless deploy --stage production

🌐 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/auth	    Authenticate user	No
POST	/users	    Create new user	    No
POST	/items	    Create new item	    Yes
GET	    /items/{id}	Get item by ID	    Yes

🔐 Authentication Flow
1. Register user in Cognito (or via /users endpoint)
2. Get JWT token from /auth endpoint
3. Include token in headers:
    Authorization: Bearer YOUR_TOKEN

� Testing Locally
# Start local server with all services
serverless offline start

# Run tests
npm test

📚 Resources
AWS Serverless Documentation

Serverless Framework Docs

Cognito Developer Guide

📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

<p align="center"> Built with ❤️ and <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" width="20"/> AWS </p> ```