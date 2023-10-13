# CI_CD_with_docker
This repository contains a simple Node.js web application and a Continuous Integration/Continuous Deployment (CI/CD) pipeline setup using GitHub Actions. The primary goal of this project is to demonstrate the automation of the build, test, and deployment process for a web application.

## Features

- **Simple Web Application**: The repository includes a basic Node.js web application that displays a "Hello, World!" message.

- **Docker Integration**: The application is containerized using Docker for consistent deployment across environments.

- **Continuous Integration (CI)**: GitHub Actions is used for CI, automatically building and testing the application whenever changes are pushed to the `main` branch.

- **Continuous Deployment (CD)**: Upon successful CI, the application is deployed to a production-like environment.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/PaoloVeliz/CI_CD_with_docker.git
2. Build the Docker image:
   ```bash 
   docker build -t my-app:latest .
3. Run the Docker container:
   ```bash 
    docker run -d -p 3000:3000 my-app:latest
4. Open a web browser and access the application at http://localhost:3000.

## CI/CD Pipeline

The CI/CD pipeline in this project is configured to run automatically on every push to the main branch. The pipeline includes the following stages:

1. Build: The Docker image is built from the source code.

2. Test: Automated tests are run to ensure the application functions correctly.

3. Deploy: The Docker image is deployed to a production-like environment.