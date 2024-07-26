import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://pet-shop.buckhill.com.hr',
    specPattern: 'cypress/integration/{admin,user,bugs}/**/*.spec.{js,jsx,ts,tsx}', 
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
});
