# Dockerized CI/CD for Next.js Application

🚀 This repository contains a basic Next.js application that is Dockerized and has a CI/CD pipeline set up using GitHub Actions.

## Overview

This project demonstrates how to:

- Create a basic Next.js application
- Dockerize the Next.js application for easy deployment
- Set up Continuous Integration and Continuous Deployment (CI/CD) with GitHub Actions

## Features

- **Next.js**: A popular React framework for building server-rendered and statically-generated websites.
- **Docker**: Containerize the Next.js application to ensure consistency across different environments.
- **GitHub Actions**: Automate the testing, building, and deployment of the application using CI/CD pipelines.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/dockerized-cicd.git
   cd dockerized-cicd
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application locally:**

   ```bash
   npm run dev
   ```

### Dockerize the Application

1. **Build the Docker image:**

   ```bash
   docker build -t nextjs-app .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

   The application should now be running on [http://localhost:3000](http://localhost:3000).

### CI/CD with GitHub Actions

The CI/CD pipeline is configured to:

- Run tests on every push to the `main` branch.
- Build and deploy the Docker container automatically.

To view the workflow file, check out `.github/workflows/ci-cd.yml`.

## Contributing

Feel free to submit issues or pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License.
