const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    html: false,
    json: true,
    reportDir: "cypress/reports",
    reportFilename: "report",
    overwrite: false,
  },
});
