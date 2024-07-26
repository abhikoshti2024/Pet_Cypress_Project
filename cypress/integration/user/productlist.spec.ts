/// <reference types="cypress" />

import '../../support/commands'; 
import { userCredentials } from '../../fixtures/user';

describe('List Products', () => {
    beforeEach(() => {
        cy.setupApp(); // Ensure setup is complete before tests run
    });

    it('should fetch product by UUID and validate the response structure', () => {
        const productUUID = 'ec60e481-8e5b-3528-bf62-68ef7fd9e763'; // Replace with a valid product UUID
    
        // Log in first to get the token
        cy.userLogin(userCredentials.email, userCredentials.password).then(() => {
            // Visit the app with the user token set in localStorage
            cy.visitApp('/'); // Adjust the URL as needed
    
            // Fetch product by UUID using the custom command
            cy.fetchProductByUUID(productUUID).then((response) => {
                // Log the response body
                console.log('Response Body:', response.body);
    
                // Handle response based on the success property
                if (response.body.success === 1) {
                    // Success case: Validate the response structure
                    const product = response.body.data;
    
                    expect(product).to.be.an('object').that.is.not.empty;
                    expect(product).to.have.property('category_uuid');
                    expect(product).to.have.property('title');
                    expect(product).to.have.property('uuid');
                    expect(product).to.have.property('price');
                    expect(product).to.have.property('description');
                    expect(product).to.have.property('metadata');
    
                    // Validate product details
                    expect(product.category_uuid).to.equal('7384810d-1611-3667-a40d-51196292e7da');
                    expect(product.title).to.equal('Shout for Pets Odor and Urine Eliminator - Effective Way to Remove Puppy & Dog Odors and Stains from Carpets & Rugs');
                    expect(product.uuid).to.equal('ec60e481-8e5b-3528-bf62-68ef7fd9e763');
                    expect(product.price).to.equal(43.5);
                    expect(product.description).to.equal('Sint optio debitis aut numquam ea repellat. Atque iusto facilis sint exercitationem quo tenetur. Reprehenderit et vel ut. Ipsum velit ea recusandae cupiditate. Deleniti inventore architecto eum sit omnis et. Sed rerum et delectus perspiciatis labore nam. Qui voluptates natus blanditiis nemo laboriosam facere pariatur. Sunt nihil sed tenetur itaque iure eum. Consequatur nihil aliquid placeat sapiente voluptas ut placeat. Sapiente vel laboriosam possimus in sit.');
    
                    // Validate metadata
                    expect(product.metadata).to.have.property('brand', '6672e326-1c0a-316c-b0bc-0c2ca27af17b');
                } else {
                    // Error case: Handle and validate error response
                    expect(response.body.success).to.equal(0);
                    expect(response.body.error).to.equal('Product not found');
                    expect(response.body.data).to.be.an('array').that.is.empty;
                }
            });
        });
    });


    it('should fetch all products and validate the response structure', () => {
        cy.listProducts().then((response) => {
            // Check the status code
            expect(response.status).to.eq(200);

            // Log the response body
            console.log('Response Body:', response.body);

            if (response.body.success === 0) {
                // Handle the case where no products are found
                cy.log('No products found.');
                expect(response.body.error).to.equal('Product not found');
                expect(response.body.data).to.be.an('array').that.is.empty;
            } else {
                // Validate the structure of the response
                expect(response.body).to.have.property('current_page').that.is.a('number');
                expect(response.body).to.have.property('data').that.is.an('array');

                const products = response.body.data;

                // Print the products to the console
                console.log('Products List:', products);

                // Perform assertions on the products list
                expect(products.length).to.be.greaterThan(0); // Check if there is at least one product

                // Validate each product object
                products.forEach((product: any) => {
                    expect(product).to.have.property('category_uuid').that.is.a('string');
                    expect(product).to.have.property('title').that.is.a('string');
                    expect(product).to.have.property('uuid').that.is.a('string');
                    expect(product).to.have.property('price').that.is.a('number');
                    expect(product).to.have.property('description').that.is.a('string');
                    expect(product).to.have.property('metadata').that.is.an('object');
                    expect(product.metadata).to.have.property('brand').that.is.a('string');
                    expect(product.metadata).to.have.property('image').that.is.a('string');
                    expect(product).to.have.property('created_at').that.is.a('string');
                    expect(product).to.have.property('updated_at').that.is.a('string');
                    expect(product).to.have.property('deleted_at').that.is.null;

                    // Validate the category object
                    const category = product.category;
                    expect(category).to.have.property('uuid').that.is.a('string');
                    expect(category).to.have.property('title').that.is.a('string');
                    expect(category).to.have.property('slug').that.is.a('string');
                    expect(category).to.have.property('created_at').that.is.a('string');
                    expect(category).to.have.property('updated_at').that.is.a('string');

                    // Validate the brand object
                    const brand = product.brand;
                    expect(brand).to.have.property('uuid').that.is.a('string');
                    expect(brand).to.have.property('title').that.is.a('string');
                    expect(brand).to.have.property('slug').that.is.a('string');
                    expect(brand).to.have.property('created_at').that.is.a('string');
                    expect(brand).to.have.property('updated_at').that.is.a('string');
                });
            }
        });
    });
});
