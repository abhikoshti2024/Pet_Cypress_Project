

declare namespace Cypress {
    interface Chainable {
        setupApp(): Chainable<void>;
        adminLogin(email: string, password: string): Chainable<Cypress.Response<any>>;
        userLogin(email: string, password: string): Chainable<Cypress.Response<any>>;
        visitApp(url: string): Chainable<void>;
        listProducts():Chainable<Cypress.Response<any>>;
        getUserData():Chainable<Cypress.Response<any>>;
        fetchUserOrders():Chainable<Cypress.Response<any>>;
        fetchProductByUUID(uuid: string):Chainable<Cypress.Response<any>>;
        fetchOrderStatuses():Chainable<Cypress.Response<any>>;
        fetchUserList():Chainable<Cypress.Response<any>>;
        interceptPromotions():Chainable<void>;
        listPromotions():Chainable<Cypress.Response<any>>;
        createProduct(product: { name: string, description: string, price: number, brand: string, category: string }):Chainable<Cypress.Response<any>>

       
    }
}
