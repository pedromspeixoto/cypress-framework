const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  failOnStatusCode: false,
  screenshotsFolder: "results/screenshots",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  env: {
    outputDataFolder: "results/generated-data",
    junitFolder: "results/junit",
    mochawesomeFolder: "results/mochawesome"
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "http://localhost",
    apiBaseUrl: "http://localhost:8080",
    specPattern: [
      "cypress/specs/api/*.spec.js",
      "cypress/specs/ui/*.spec.js"
    ],
  },
});