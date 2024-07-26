/// <reference types="cypress" />

import '../../support/commands'; 
import { userCredentials } from '../../fixtures/user'; 

describe('User Authentication and Data', () => {
  beforeEach(() => {
    cy.setupApp(); // Ensure setup is done before each test
  });

  it('should log in as user successfully and receive a status code 200', () => {
    cy.userLogin(userCredentials.email, userCredentials.password).then((response) => {
      // Check response status code
      expect(response.status).to.eq(200);
    });
  });

  it('should fetch user data and validate the response structure', () => {
    // Visit the app with the user token set in localStorage
    cy.visitApp('/'); // Adjust the URL as needed

    // Fetch user data with the user token
    cy.getUserData().then((response) => {
      // Check the status code
      expect(response.status).to.eq(200);

      // Log the response body
      console.log('Response Body:', response.body);
      expect(response.body).to.have.property('success').that.equals(1);
      expect(response.body).to.have.property('data').that.is.an('object');

      const data = response.body.data;


      // Validate the structure of the response
      expect(data).to.have.property('uuid').that.is.a('string');
      expect(data).to.have.property('first_name').that.is.a('string');
      expect(data).to.have.property('email').that.is.a('string');
      expect(data).to.have.property('created_at').that.is.a('string');
      expect(data).to.have.property('updated_at').that.is.a('string');

      // Additional property checks can be added as needed
    });
  });

  it('should log in as user successfully and receive a status code 200', () => {
    cy.userLogin(userCredentials.email, userCredentials.password).then((response) => {
        // Check response status code
        expect(response.status).to.eq(200);
    });
});

it('should fetch user orders and validate the response structure', () => {
    // Log in first to get the token
    cy.userLogin(userCredentials.email, userCredentials.password).then(() => {
        // Visit the app with the user token set in localStorage
        cy.visitApp('/'); // Adjust the URL as needed

        // Fetch user orders using the custom command
        cy.fetchUserOrders().then((response) => {
            // Check the status code
            expect(response.status).to.eq(200);

            // Log the response body
            console.log('Response Body:', response.body);

            // Validate the structure of the response
            expect(response.body).to.have.property('current_page').that.is.a('number');
            expect(response.body).to.have.property('data').that.is.an('array');
            expect(response.body).to.have.property('first_page_url').that.is.a('string');
            expect(response.body).to.have.property('from').that.is.null;
            expect(response.body).to.have.property('last_page').that.is.a('number');
            expect(response.body).to.have.property('last_page_url').that.is.a('string');
            expect(response.body).to.have.property('links').that.is.an('array');
            expect(response.body).to.have.property('next_page_url').that.is.null;
            expect(response.body).to.have.property('path').that.is.a('string');
            expect(response.body).to.have.property('per_page').that.is.a('number');
            expect(response.body).to.have.property('prev_page_url').that.is.null;
            expect(response.body).to.have.property('to').that.is.null;
            expect(response.body).to.have.property('total').that.is.a('number');



    });
  });
});
});

