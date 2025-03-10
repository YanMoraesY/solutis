const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    clearAllSessionStorage: true,
    failOnStatusCode: false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

    },
    specPattern: "cypress/e2e/step/*.feature",
    env: {
      url_teste: 'https://fakerestapi.azurewebsites.net/api/v1/',
    },
  }
});