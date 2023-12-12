const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 10000;
      config.responseTimeout = 20000;
      config.pageLoadTimeout = 60000;
      // implement node event listeners here

      return config;
    },
  },
});
