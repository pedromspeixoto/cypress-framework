# cypress-framework

## Table of Contents

- [cypress-framework](#cypress-framework)
  - [Overview](#overview)
    - [Cypress](#cypress)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Usage](#usage)

## Overview

This repo contains a framework using Cypress to automate E2E testing for both a backend and a frontend application.

The main purpose of this demo aims to demonstrate on how Cypress can be used to simplify both API and E2E testing.

### Cypress

This demo uses the following Cypress related tools:
- Cypress API tests are used using cypress-plugin-api
- Cypress reports are generated using mocha tools (junit and html formats)
- Data and models are created using faker

Cypress folder structure (located under the `qa` folder):

```bash
qa/
├── cypress/
│   ├── fixtures/          # Data files used by the tests
│   ├── specs/             # Test files
│   │   ├── api/           # API tests
│   │   └── ui/            # UI tests
│   ├── plugins/           # Cypress plugins
│   └── support/
│       ├── apis/          # Definition of APIs as cypress custom commands
│       ├── models/        # Definition of classes (models) used by the tests
│       ├── types/         # Definition of UI custom commands
│       └── e2e.js         # Import custom commands and cypress hooks that apply for all tests
│       └── commands.js    # Definition of generic custom commands
├── results/               # Cypress results folder
├── .env                   # Environment variables
├── cypress.config.js      # Cypress configuration file
├── package.json           # Node.js dependencies
└── reporter-config.json   # Cypress reporter configuration file
```

Overview of the CI that was configured with Github Actions:

1. Checkout the code
2. Start the backend and frontend applications with docker-compose
3. Setup node and install the dependencies
4. Run the Cypress tests with the `--record` flag to send the results to Cypress Cloud
5. Publish the HTML reports as a zip file and upload it to the Github Actions artifacts
6. Publish the JUnit reports to Github Actions using the junit-report-action plugin

This repository also shows on how to report the test results using three different methods:

- HTML reports (published as a zip file and uploaded to the Github Actions artifacts)
- JUnit reports (published to Github Actions using the [junit-report-action](https://github.com/marketplace/actions/junit-report-action) plugin)
- Cypress Cloud (located [here](https://cloud.cypress.io/projects/15nh9z/runs))

To change the Cypress Cloud project, please update the `projectId` value in the `qa/cypress.config.js` file.

### Backend

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

### Frontend

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

This was tested using the following versions:

- Docker version 20.10.14, build a224086
- docker-compose version 1.29.2, build 5becea4c
- GNU Make 3.81
- git version 2.32.1 (Apple Git-133)
- Node.js v14.5.0

## Usage

1. Clone the repo:

```bash
git clone https://github.com/pedromspeixoto/cypress-framework.git
```

2. Start the backend and frontend applications with docker-compose:

```bash
make docker-compose-up-local
```

3. Install the dependencies:

```bash
make install
```

4. Run the Cypress tests:

```bash
make cypress-run
```

5. Reports are generated using three different methods:

- HTML reports (located under the `qa/reports` folder after each run)
- JUnit reports (located under the `qa/reports` folder after each run)
- Cypress Cloud (located [here](https://cloud.cypress.io/projects/15nh9z/runs))