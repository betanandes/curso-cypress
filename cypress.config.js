const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1000,
    viewportHeight: 660,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false  // permite acessar iframes de origens diferentes
  },
});
