const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      BASE_URL: 'https://fakerestapi.azurewebsites.net/api/v1/Activities'
    }
  },
});
