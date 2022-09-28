const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {},
  },
});
