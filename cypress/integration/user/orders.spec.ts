/// <reference types="cypress" />

import '../../support/commands'; 
import { userCredentials } from '../../fixtures/user'; 

describe('Order Statuses', () => {
    beforeEach(() => {
        cy.setupApp(); // Ensure setup is complete before tests run
    });

    it('should fetch all order statuses and validate the response structure and titles', () => {
        // Log in first to get the token
        cy.userLogin(userCredentials.email, userCredentials.password).then(() => {
            // Fetch order statuses using the custom command
            cy.fetchOrderStatuses().then((response) => {
                // Check the status code
                expect(response.status).to.eq(200);

                // Log the response body
                console.log('Response Body:', response.body);

                // Validate the structure of the response
                expect(response.body).to.have.property('current_page').that.is.a('number');
                expect(response.body).to.have.property('data').that.is.an('array');

                const statuses = response.body.data;

                // Print the statuses to the console
                console.log('Order Statuses List:', statuses);

                // Perform assertions on the statuses list
                expect(statuses.length).to.eq(6); // Check if there are 5 statuses

                // Validate each status object
                statuses.forEach((status: any) => {
                    expect(status).to.have.property('uuid').that.is.a('string');
                    expect(status).to.have.property('title').that.is.a('string');
                    expect(status).to.have.property('created_at').that.is.a('string');
                    expect(status).to.have.property('updated_at').that.is.a('string');
                });

                // Validate specific titles
                const expectedTitles = [
                    'canceled',
                    'shipped',
                    'paid',
                    'pending payment',
                    'open'
                ];

                // Extract titles from response
                const actualTitles = statuses.map((status: any) => status.title);
                
                // Check if all expected titles are included
                expectedTitles.forEach(title => {
                    expect(actualTitles).to.include(title);
                });
            });
        });
    });
});
