const { defineConfig } = require("cypress");


async function setupNodeEvents(on, config){
  
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      specPattern: "cypress/Intigration/framework/page_test.js",
      // implement node event listeners here
  },
});
