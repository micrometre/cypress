const { defineConfig } = require("cypress");

module.exports = defineConfig({
screenshotOnRunFailure: false,
reporter: 'junit',
reporterOptions: {
  reportDir: 'results',
  mochaFile: 'results/test-output.xml',
  toConsole: false,
},
video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
