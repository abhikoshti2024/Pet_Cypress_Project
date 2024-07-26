
import { userCredentials } from '../../fixtures/user'; 

describe('Login and Page Refresh', () => {
    let initialUserData: any;
  
    before(() => {
      cy.setupApp(); // Set up intercepts and fixtures if needed
    });
  
    it('should log in, navigate to a page, refresh, and compare user data', () => {
      // Step 1: Log in as a user
      cy.visitApp('/');
  
      // Step 2: Navigate to any page within the application
      cy.visitApp('/cart');
       
      // Step 3: Fetch user data from the API
      cy.getUserData().then((response) => {
        initialUserData = response.body; // Store the data for later comparison
      });

      
  
      // Step 4: Refresh the page
      cy.reload(); // Refreshes the current page
  
      // Step 5: Fetch user data again after refresh
      cy.getUserData().then((response) => {
        // Verify that the user data after refresh matches the initial data
        expect(response.body).to.deep.equal(initialUserData);
      });
    });
  });
  