# PetShop E2E Test Suite Automated Tests.

This repository contains automated tests of a  eCommerce pet shop web application using Cypress and TypeScript.

## Table of Contents

- [Pet-Shop Automated Tests.](#pet-shop-automated-tests)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the tests](#running-the-tests)
  - [Folder Structure](#folder-structure)
  - [Bugs logged during testing](#bugs-logged-during-testing)

## Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed (Node.js >= 12)
- Git (optional, but recommended)

## Installation

1. Clone the repository.[https://github.com/abhikoshti2024/Pet-Shop-Cypress-Docker_project.git]
2. Install dependencies: `npm install`
3. Set environment variables in a `.env` file.
4. Run tests:
   - `npx cypress open` or `npx cypress run`

## Running the tests

## Docker

1. Build the Docker image: `docker build -t petshop_cypress_e2e .`
2. Run tests in Docker: `docker run petshop_cypress_e2e`


## Folder Structure

- `bugs/` - Contains bug reports found during testing
- `cypress/` - Contains Cypress test files
- `integration/` - Test scripts
- `support/` - Custom commands 
- `commands/` - Cypress custom commands; these are reusable functions that can be called from within the test scripts.
- `.env` - Environment configuration
- `cypress.config.ts` - Cypress configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Project dependencies and scripts
- `README.md` - Project documentation
- `Dockerfile`: Docker configuration
- `docker-compose.yml`: Docker Compose configuration
- `generate-intercepts.ts`: Intercept file generator



## Bugs logged during testing

- [QA-1: None of the Main Navigation Bar Items Navigate to the Correct Page](bugs/qa-1.md)
- [QA-2: Logged-In Users (Admin and Normal) Are Logged Out Upon Page Refresh](bugs/qa-2.md)
- [QA-3: Error "Undefined array key 'category_uuid'" When Creating a Product by an Admin](bugs/qa-3.md)



