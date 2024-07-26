describe('Add New Product', () => {
    let productId: string;
  
    before(() => {
      cy.setupApp(); // Set up intercepts and fixtures if needed
  
      // Step 1: Log in as an admin
      cy.visitApp('/') 
        .then(() => {
          // Step 2: Create a new product and store the product ID
          cy.createProduct({
            name: 'Test Product',
            description: 'This is a test product.',
            price: 99.99,
            brand: 'Test Brand',
            category: 'Dog123456789' 
          }).then((response) => {
            if (response.status === 201) {
              productId = response.body.id; 
          } else {
              cy.log('Product creation failed. ');
          }
          });
        });
    });
  
    it('should log in as an admin and add a new product', () => {
      // Step 3: Verify that the product appears in the UI
      cy.visitApp('/products');
  
      // Fetch the product from API to verify
      cy.fetchProductByUUID(productId).then((apiResponse) => {
        const product = apiResponse.body;
  
        // Verify product details in the UI
        cy.get('.product-list').should('contain', product.title); 
        cy.get('.product-list').should('contain', product.description);
        cy.get('.product-list').should('contain', product.price);
      });
    });
  });
  