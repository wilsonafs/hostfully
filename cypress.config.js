const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  video: false,
  chromeWebSecurity: false,
  retries: 2,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: (process.env.BASE_URL || "https://computer-database.gatling.io/computers"),
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
