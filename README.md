# cypress-framework

## Table of Contents

- [posts-demo](#posts-demo)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Usage](#usage)

## Overview

This repo contains a framework using Cypress to automate E2E testing for both a backend and a frontend application.

The main purpose of this demo aims to demonstrate on how Cypress can be used to simplify both API and E2E testing.

This demo uses the following Cypress related tools:
- Cypress API tests are used using cypress-plugin-api
- Cypress reports are generated using mocha tools (junit and html formats)
- Data and models are created using faker

Cypress folder structure (located under the `qa` folder):

TBD

Overview of the CI that was configured with Github Actions:

TBD

The demo Golang backend application for this project has the following features:
- CRUD operations for posts [GET, POST, PUT, DELETE]
- MySQL as a database engine
- Gorm for ORM
- Goose for database migrations
- Zap for logging
- UberFx for configuration
- Go modules for dependency management
- Chi for routing
- Swagger for API documentation

The demo React FE that was created for this application has the following features:
- Axios for API calls
- React Router for routing
- React Bootstrap for UI components
- NGINX as a web server
- Docker multi-stage build for production

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Make](https://www.gnu.org/software/make/)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)

## Usage

1. Clone the repo:

```bash
git clone https://github.com/pedromspeixoto/cypress-framework.git
```

2. Start the backend and frontend applications with docker-compose:

```bash
make docker-compose-up-local
```

3. Run the Cypress tests:

```bash
make cypress-run
```

4. HTML and JUnit reports will be generated under the `qa/reports` folder.