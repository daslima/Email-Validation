const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://notes-serverless-app.com',
    setupNodeEvents(on, config) {
    },
  },
});
