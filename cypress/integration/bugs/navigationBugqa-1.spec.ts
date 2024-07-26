

describe('Promotions Page', () => {
    let promotionsData: any[] = []; // Store the API data
  
    before(() => {
      cy.setupApp();
      
      // Intercept the API call and request the data
      cy.interceptPromotions();
      cy.listPromotions().then((response) => {
        promotionsData = response.body.data; // Store the data for later use
      });
    });
  
    it('should navigate to the Promotions page and display promotions correctly', () => {
      cy.visitApp('/');
  
      // Click on the "PROMOTIONS" navigation item
      cy.get('.v-toolbar__content > .v-container > .d-flex:nth-child(2) > .v-btn:nth-child(2) > .v-btn__content').click();
  
    
      
      // Verify that the UI elements match the API data
      promotionsData.forEach((promotion) => {
        if (promotion.title && typeof promotion.title === 'string') {
          cy.contains(promotion.title).should('be.visible');
        } else {
          cy.log(`Promotion title is missing or not a string: ${promotion}`);
        }
        
        if (promotion.description && typeof promotion.description === 'string') {
          cy.contains(promotion.description).should('be.visible');
        } else {
          cy.log(`Promotion description is missing or not a string: ${promotion}`);
        }
      });
    });
  });
  