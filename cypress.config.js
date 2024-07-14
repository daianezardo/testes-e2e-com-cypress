const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 50000,
  requestTimeout: 10000,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
  },
  projectId: 'y2gx52',
})
