/// <reference types="cypress" />

import '../../support/commands'; 
import { adminCredentials } from '../../fixtures/admin'; 

describe('Admin Login', () => {
    beforeEach(() => {
        cy.setupApp();
    });

    it('should log in as admin successfully', () => {
        cy.adminLogin(adminCredentials.email, adminCredentials.password).then((response) => {
        expect(response.status).to.eq(200);
    });
});

it('should fetch the list of users, validate the response structure, and assert multiple UUIDs', () => {
    // Log in as admin to get the token
    cy.visitApp('/');
        // Fetch user list using the custom command
        cy.fetchUserList().then((response) => {
            // Check the status code
            expect(response.status).to.eq(200);

            // Validate the structure of the response
            expect(response.body).to.have.property('current_page').that.is.a('number');
            expect(response.body).to.have.property('data').that.is.an('array');
            expect(response.body).to.have.property('total').that.is.a('number');
            expect(response.body).to.have.property('last_page').that.is.a('number');
            expect(response.body).to.have.property('per_page').that.is.a('number');

            // Check if multiple UUIDs are present
            const users = response.body.data;
            expect(users.length).to.be.greaterThan(0);

            // Validate each user object
            users.forEach((user: any) => {
                expect(user).to.have.property('uuid').that.is.a('string');
                expect(user).to.have.property('first_name').that.is.a('string');
                expect(user).to.have.property('last_name').that.is.a('string');
                expect(user).to.have.property('email').that.is.a('string');
                expect(user).to.have.property('email_verified_at').and.satisfy((val: any) => typeof val === 'string' || val === null);
                expect(user).to.have.property('avatar').and.satisfy((val: any) => typeof val === 'string' || val === null);
                expect(user).to.have.property('address').that.is.a('string');
                expect(user).to.have.property('phone_number').that.is.a('string');
                expect(user).to.have.property('is_marketing').that.is.a('number');
                expect(user).to.have.property('created_at').that.is.a('string');
                expect(user).to.have.property('updated_at').that.is.a('string');
                expect(user).to.have.property('last_login_at').and.satisfy((val: any) => typeof val === 'string' || val === null);
            });

            // Assert that the total number of users matches the response
            expect(response.body.total).to.be.a('number');
            expect(response.body.total).to.be.greaterThan(users.length);
        });
    });
});

it('should validate pagination links and ensure the next page URL is correct', () => {
    // Log in as admin to get the token
    cy.visitApp('/');
        // Fetch user list using the custom command
        cy.fetchUserList().then((response) => {
            // Check the status code
            expect(response.status).to.eq(200);

            // Validate pagination links
            expect(response.body).to.have.property('links').that.is.an('array');
            const links = response.body.links;

            // Check if pagination links are valid
            const pageNumbers = links.map((link: any) => link.label).filter((label: string) => !label.includes('Previous') && !label.includes('Next'));
            expect(pageNumbers).to.include('1'); // Ensure the current page is included
            expect(response.body.last_page).to.be.a('number').and.to.be.greaterThan(1); 

            // Assert that the next page URL is present if there are more pages
            if (response.body.last_page > 1) {
                expect(response.body.next_page_url).to.not.be.null;
            }
        });
    });


it('should validate data for a specific user by UUID', () => {
    // Specify the UUID of the user you want to validate
    const userId = '9624968e-62fb-4db1-8a52-4b3017fcd532'; // Example UUID

    // Log in as admin to get the token
    cy.visitApp('/');
        // Fetch user list using the custom command
        cy.fetchUserList().then((response) => {
            // Check the status code
            expect(response.status).to.eq(200);

            // Find the user with the specified UUID
            const user = response.body.data.find((user: any) => user.uuid === userId);

            // Assert that the user is found
            expect(user).to.not.be.undefined;

            // Validate the user data
            expect(user).to.have.property('uuid', userId);
            expect(user).to.have.property('first_name').that.is.a('string');
            expect(user).to.have.property('last_name').that.is.a('string');
            expect(user).to.have.property('email').that.is.a('string');
            expect(user).to.have.property('email_verified_at').and.satisfy((val: any) => typeof val === 'string' || val === null);
            expect(user).to.have.property('avatar').and.satisfy((val: any) => typeof val === 'string' || val === null);
            expect(user).to.have.property('address').that.is.a('string');
            expect(user).to.have.property('phone_number').that.is.a('string');
            expect(user).to.have.property('is_marketing').that.is.a('number');
            expect(user).to.have.property('created_at').that.is.a('string');
            expect(user).to.have.property('updated_at').that.is.a('string');
            expect(user).to.have.property('last_login_at').and.satisfy((val: any) => typeof val === 'string' || val === null);
        });
    });


