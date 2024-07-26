
import 'cypress-localstorage-commands';

import { setupIntercepts } from './intercepts'; // Import from intercepts.ts
import { setupFixtures } from '../fixtures/all-fixtures'; // Import from fixture.ts

// Define a custom command to set up intercepts and fixtures
Cypress.Commands.add('setupApp', () => {
    // Set up intercepts
    setupIntercepts();

    // Set up fixtures
    setupFixtures();
});

// Define a custom command to log in as an admin
Cypress.Commands.add('adminLogin', (email: string, password: string) : Cypress.Chainable<Cypress.Response<any>> => {
    return cy.request({
        method: 'POST',
        url: '/api/v1/admin/login',
        body: { email, password },
    }).then((response) => {
        expect(response.status).to.eq(200);
        if (response.body.token) {
            window.localStorage.setItem('adminToken', response.body.token); // Save token to localStorage
        }
        return response;   
    });
});

// Define a custom command to log in as a user
Cypress.Commands.add('userLogin', (email: string, password: string): Cypress.Chainable<Cypress.Response<any>> => {
    return cy.request({
        method: 'POST',
        url: '/api/v1/user/login',
        body: { email, password },
    }).then((response) => {
        // Handle response here if needed
        expect(response.status).to.eq(200);
        if (response.body.token) {
            window.localStorage.setItem('userToken', response.body.token); // Save token to localStorage
        }
        return response; // Return the response if needed
    });
});




// Define a custom command to visit the application with setup
Cypress.Commands.add('visitApp', (url: string) => {
    cy.setupApp(); // Ensure intercepts and fixtures are set up
    cy.visit(url, {
        onBeforeLoad(win) {
            // Use tokens if needed
            win.localStorage.setItem('adminToken','eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGV0LXNob3AuYnVja2hpbGwuY29tLmhyIiwiZXhwIjoxNzIxOTc5MzA4LCJ1c2VyX3V1aWQiOiJkYTJmNmE0ZS1lOTljLTMzN2MtOWRhZS0wMTU0MjZiNDI0YzMifQ.uCaKxHCWBx7dKs9Ok6Ezf-8g0czFzNVuNWpLeraJrCLQG8DNR6o9OeHWkUR3fzBQyjJue4NdBpXRyEGZqfusiewy9HbeW5WeeWggcgISg9pVhyWvLnodHyAj0WEMiO8ccm1zXwQkXKxks1hc2n0b27yuFZB8OccShQyKoJSwS5-WF1-LzoUXcwgfYBayQBpE1ikrcChBuUMOzYda54K18TvLa2TnpuQcWpCUSWzCSNoXRndtmwEThJ9DuH86QoBeMPxT8IiDnQlQPvVsKo0W48ybfLbEF9x-LEaeCO_eEpDw_jahKO8gHdBmUpgvSHJ6vmP7_L-dJeOEL-xo00tiyg');
            win.localStorage.setItem('userToken','eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcGV0LXNob3AuYnVja2hpbGwuY29tLmhyIiwiZXhwIjoxNzIxOTc5MzY1LCJ1c2VyX3V1aWQiOiI0MDlhZTg2ZC1mOWY0LTQ3MTAtODJkOC05YzBjYTEzNGU1OGIifQ.DNAZ48UDDmiwCm8rdS0S5jEMCl6lNjETbIIib6QHoS6XXE6HvLPEmVleZDmkuwoYXOY6HHIK3c2svHf9B1ebRfcXVM0dcSy5mxaTUxUruRE0NKySdndZGn41d01LtPs_TjKKp8v7cFBOltvy2biSlOoBG4FjZDf-rLgqgsRvXciGtWNAVb0ePBPA859pqCgbttJlL-ahJx9cNDcRnFmImS8ixA6LPreWgIO_sEHBqjjPpTOJOl1nAE16FdXbhNmlY4aFGCB4R6WOKC9RvfNqEv27ocxbPzQjPD8lT92Cnr5Lx3Uzhrulvvj2uTnBxBltT7FHzdRld-ILry8dtMtF5g');
        }
    });
});






Cypress.Commands.add('listProducts', () : Cypress.Chainable<Cypress.Response<any>> => {
    return cy.request({
        method: 'GET',
        url: `/api/v1/products`,
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response; 
    });
});



Cypress.Commands.add('getUserData', () : Cypress.Chainable<Cypress.Response<any>>=> {
    const token = localStorage.getItem('userToken');
  
    return cy.request({
      method: 'GET',
      url: '/api/v1/user',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response; 
    });
  });
  

  Cypress.Commands.add('fetchUserOrders', () : Cypress.Chainable<Cypress.Response<any>> => {
    const userToken = localStorage.getItem('userToken');
    return cy.request({
        method: 'GET',
        url: '/api/v1/user/orders',
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response; 
});
});

Cypress.Commands.add('fetchProductByUUID', (uuid: string):Cypress.Chainable<Cypress.Response<any>> => {
    const token = localStorage.getItem('userToken') || localStorage.getItem('adminToken');
    return cy.request({
        method: 'GET',
        url: `/api/v1/product/${uuid}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response; 
});
});


Cypress.Commands.add('fetchOrderStatuses', () :Cypress.Chainable<Cypress.Response<any>>=> {
    return cy.request({
        method: 'GET',
        url: '/api/v1/order-statuses',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('userToken')}` // Set the user token in the headers
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response; 
});
});




Cypress.Commands.add('fetchUserList', () :Cypress.Chainable<Cypress.Response<any>>=> {
    const adminToken = localStorage.getItem('adminToken');
    return cy.request({
        method: 'GET',
        url: '/api/v1/admin/user-listing',
        headers: {
            Authorization: `Bearer ${adminToken }`
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        return response; 
});
});


  

Cypress.Commands.add('interceptPromotions', () => {
    cy.intercept('GET', '/api/v1/main/promotions').as('getPromotions');
  });
  
  

Cypress.Commands.add('listPromotions', () : Cypress.Chainable<Cypress.Response<any>> => {
    return cy.request({
      method: 'GET',
      url: '/api/v1/main/promotions',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('data').that.is.an('array');
      return response; 
    });
  });
  
 
  Cypress.Commands.add('createProduct', (product: { name: string, description: string, price: number, brand: string, category: string }) => {
    const adminToken = localStorage.getItem('adminToken'); 

    // Format the data to be URL-encoded
    const formData = new URLSearchParams({
        category_uuid: product.category, 
        title: product.name,
        price: product.price.toString(),
        description: product.description,
        metadata: JSON.stringify({
            image: 'string', 
            brand: product.brand
        })
    }).toString();

    return cy.request({
        method: 'POST',
        url: '/api/v1/product/create',
        headers: {
            Authorization: `Bearer ${adminToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    }).then((response) => {
        expect(response.status).to.eq(200); 
        return response;
    });
});
