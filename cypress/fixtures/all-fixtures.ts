import { setupIntercepts } from '../support/intercepts'; 

export const setupFixtures = () => {
    setupIntercepts();

    // Brand Fixtures
    cy.intercept('POST', '/api/v1/brand/create', {
        statusCode: 201,
        body: { id: 'brand1', name: 'Brand A' },
    }).as('POST__api_v1_brand_create');
    
    cy.intercept('PUT', '/api/v1/brand/{uuid}', {
        statusCode: 200,
        body: { id: 'brand1', name: 'Brand A Updated' },
    }).as('PUT__api_v1_brand__uuid_');
    
    cy.intercept('DELETE', '/api/v1/brand/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_brand__uuid_');
    
    cy.intercept('GET', '/api/v1/brand/{uuid}', {
        statusCode: 200,
        body: { id: 'brand1', name: 'Brand A' },
    }).as('GET__api_v1_brand__uuid_');
    
    cy.intercept('GET', '/api/v1/brands', {
        statusCode: 200,
        body: [
            { id: 'brand1', name: 'Brand A' },
            { id: 'brand2', name: 'Brand B' },
        ],
    }).as('GET__api_v1_brands');

    // Category Fixtures
    cy.intercept('POST', '/api/v1/category/create', {
        statusCode: 201,
        body: { id: 'category1', name: 'Category A' },
    }).as('POST__api_v1_category_create');
    
    cy.intercept('PUT', '/api/v1/category/{uuid}', {
        statusCode: 200,
        body: { id: 'category1', name: 'Category A Updated' },
    }).as('PUT__api_v1_category__uuid_');
    
    cy.intercept('DELETE', '/api/v1/category/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_category__uuid_');
    
    cy.intercept('GET', '/api/v1/category/{uuid}', {
        statusCode: 200,
        body: { id: 'category1', name: 'Category A' },
    }).as('GET__api_v1_category__uuid_');
    
    cy.intercept('GET', '/api/v1/categories', {
        statusCode: 200,
        body: [
            { id: 'category1', name: 'Category A' },
            { id: 'category2', name: 'Category B' },
        ],
    }).as('GET__api_v1_categories');

    // Order Fixtures
    cy.intercept('GET', '/api/v1/orders', {
        statusCode: 200,
        body: [
            { id: 'order1', total: 100 },
            { id: 'order2', total: 200 },
        ],
    }).as('GET__api_v1_orders');
    
    cy.intercept('GET', '/api/v1/orders/shipment-locator', {
        statusCode: 200,
        body: { status: 'shipped', location: 'Warehouse A' },
    }).as('GET__api_v1_orders_shipment-locator');
    
    cy.intercept('GET', '/api/v1/orders/dashboard', {
        statusCode: 200,
        body: { totalOrders: 2, totalAmount: 300 },
    }).as('GET__api_v1_orders_dashboard');
    
    cy.intercept('POST', '/api/v1/order/create', {
        statusCode: 201,
        body: { id: 'order1', total: 100 },
    }).as('POST__api_v1_order_create');
    
    cy.intercept('GET', '/api/v1/order/{uuid}', {
        statusCode: 200,
        body: { id: 'order1', total: 100 },
    }).as('GET__api_v1_order__uuid_');
    
    cy.intercept('PUT', '/api/v1/order/{uuid}', {
        statusCode: 200,
        body: { id: 'order1', total: 150 },
    }).as('PUT__api_v1_order__uuid_');
    
    cy.intercept('DELETE', '/api/v1/order/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_order__uuid_');
    
    cy.intercept('GET', '/api/v1/order/{uuid}/download', {
        statusCode: 200,
        body: { fileUrl: 'http://example.com/order1.pdf' },
    }).as('GET__api_v1_order__uuid__download');

    // Payment Fixtures
    cy.intercept('POST', '/api/v1/order-status/create', {
        statusCode: 201,
        body: { id: 'status1', name: 'Processing' },
    }).as('POST__api_v1_order-status_create');
    
    cy.intercept('PUT', '/api/v1/order-status/{uuid}', {
        statusCode: 200,
        body: { id: 'status1', name: 'Shipped' },
    }).as('PUT__api_v1_order-status__uuid_');
    
    cy.intercept('DELETE', '/api/v1/order-status/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_order-status__uuid_');
    
    cy.intercept('GET', '/api/v1/order-status/{uuid}', {
        statusCode: 200,
        body: { id: 'status1', name: 'Processing' },
    }).as('GET__api_v1_order-status__uuid_');
    
    cy.intercept('GET', '/api/v1/order-statuses', {
        statusCode: 200,
        body: [
            { id: 'status1', name: 'Processing' },
            { id: 'status2', name: 'Shipped' },
        ],
    }).as('GET__api_v1_order-statuses');
    
    cy.intercept('GET', '/api/v1/payments', {
        statusCode: 200,
        body: [
            { id: 'payment1', amount: 100 },
            { id: 'payment2', amount: 200 },
        ],
    }).as('GET__api_v1_payments');
    
    cy.intercept('POST', '/api/v1/payment/create', {
        statusCode: 201,
        body: { id: 'payment1', amount: 100 },
    }).as('POST__api_v1_payment_create');
    
    cy.intercept('GET', '/api/v1/payment/{uuid}', {
        statusCode: 200,
        body: { id: 'payment1', amount: 100 },
    }).as('GET__api_v1_payment__uuid_');
    
    cy.intercept('PUT', '/api/v1/payment/{uuid}', {
        statusCode: 200,
        body: { id: 'payment1', amount: 150 },
    }).as('PUT__api_v1_payment__uuid_');
    
    cy.intercept('DELETE', '/api/v1/payment/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_payment__uuid_');

    // Product Fixtures
    cy.intercept('POST', '/api/v1/product/create', {
        statusCode: 201,
        body: { id: 'product1', name: 'Product A' },
    }).as('POST__api_v1_product_create');
    
    cy.intercept('PUT', '/api/v1/product/{uuid}', {
        statusCode: 200,
        body: { id: 'product1', name: 'Product A Updated' },
    }).as('PUT__api_v1_product__uuid_');
    
    cy.intercept('DELETE', '/api/v1/product/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_product__uuid_');
    
    cy.intercept('GET', '/api/v1/product/{uuid}', {
        statusCode: 200,
        body: { id: 'product1', name: 'Product A' },
    }).as('GET__api_v1_product__uuid_');
    
    cy.intercept('GET', '/api/v1/products', {
        statusCode: 200,
        body: [
            { id: 'product1', name: 'Product A' },
            { id: 'product2', name: 'Product B' },
        ],
    }).as('GET__api_v1_products');

    // User Fixtures
    cy.intercept('GET', '/api/v1/user', {
        statusCode: 200,
        body: { id: 'user1', email: 'user1@example.com' },
    }).as('GET__api_v1_user');
    
    cy.intercept('DELETE', '/api/v1/user', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_user');
    
    cy.intercept('GET', '/api/v1/user/orders', {
        statusCode: 200,
        body: [
            { id: 'order1', total: 100 },
            { id: 'order2', total: 200 },
        ],
    }).as('GET__api_v1_user_orders');
    
    cy.intercept('PUT', '/api/v1/user/edit', {
        statusCode: 200,
        body: { id: 'user1', email: 'user1@example.com' },
    }).as('PUT__api_v1_user_edit');
    
    cy.intercept('POST', '/api/v1/file/upload', {
        statusCode: 201,
        body: { id: 'file1', url: 'http://example.com/file1.jpg' },
    }).as('POST__api_v1_file_upload');
    
    cy.intercept('GET', '/api/v1/file/{uuid}', {
        statusCode: 200,
        body: { id: 'file1', url: 'http://example.com/file1.jpg' },
    }).as('GET__api_v1_file__uuid_');

    // Admin Fixtures
    cy.intercept('POST', '/api/v1/admin/login', {
        statusCode: 200,
        body: { token: 'admin-token' },
    }).as('POST__api_v1_admin_login');
    
    cy.intercept('GET', '/api/v1/admin/logout', {
        statusCode: 200,
        body: {},
    }).as('GET__api_v1_admin_logout');
    
    cy.intercept('POST', '/api/v1/admin/create', {
        statusCode: 201,
        body: { id: 'admin1', email: 'admin1@example.com' },
    }).as('POST__api_v1_admin_create');
    
    cy.intercept('GET', '/api/v1/admin/user-listing', {
        statusCode: 200,
        body: [
            { id: 'user1', email: 'user1@example.com' },
            { id: 'user2', email: 'user2@example.com' },
        ],
    }).as('GET__api_v1_admin_user-listing');
    
    cy.intercept('PUT', '/api/v1/admin/user-edit/{uuid}', {
        statusCode: 200,
        body: { id: 'user1', email: 'user1@example.com' },
    }).as('PUT__api_v1_admin_user-edit__uuid_');
    
    cy.intercept('DELETE', '/api/v1/admin/user-delete/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_admin_user-delete__uuid_');

    // User Auth Fixtures
    cy.intercept('POST', '/api/v1/user/login', {
        statusCode: 200,
        body: { token: 'user-token' },
    }).as('POST__api_v1_user_login');
    
    cy.intercept('GET', '/api/v1/user/logout', {
        statusCode: 200,
        body: {},
    }).as('GET__api_v1_user_logout');
    
    cy.intercept('POST', '/api/v1/user/register', {
        statusCode: 201,
        body: { id: 'user1', email: 'user1@example.com' },
    }).as('POST__api_v1_user_register');
    
    cy.intercept('PUT', '/api/v1/user/change-password', {
        statusCode: 200,
        body: { message: 'Password changed successfully' },
    }).as('PUT__api_v1_user_change-password');
    
    cy.intercept('POST', '/api/v1/user/forgot-password', {
        statusCode: 200,
        body: { message: 'Password reset link sent' },
    }).as('POST__api_v1_user_forgot-password');
    
    cy.intercept('POST', '/api/v1/user/reset-password', {
        statusCode: 200,
        body: { message: 'Password reset successfully' },
    }).as('POST__api_v1_user_reset-password');
    
    cy.intercept('POST', '/api/v1/user/verify-email', {
        statusCode: 200,
        body: { message: 'Email verified successfully' },
    }).as('POST__api_v1_user_verify-email');
    
    cy.intercept('POST', '/api/v1/user/resend-verification-email', {
        statusCode: 200,
        body: { message: 'Verification email resent' },
    }).as('POST__api_v1_user_resend-verification-email');

    // Promotions and Blogs Fixtures
    cy.intercept('GET', '/api/v1/promotions', {
        statusCode: 200,
        body: [
            { id: 'promo1', name: 'Promotion A' },
            { id: 'promo2', name: 'Promotion B' },
        ],
    }).as('GET__api_v1_promotions');
    
    cy.intercept('GET', '/api/v1/blogs', {
        statusCode: 200,
        body: [
            { id: 'blog1', title: 'Blog A' },
            { id: 'blog2', title: 'Blog B' },
        ],
    }).as('GET__api_v1_blogs');
    
    cy.intercept('POST', '/api/v1/blog/create', {
        statusCode: 201,
        body: { id: 'blog1', title: 'Blog A' },
    }).as('POST__api_v1_blog_create');
    
    cy.intercept('PUT', '/api/v1/blog/{uuid}', {
        statusCode: 200,
        body: { id: 'blog1', title: 'Blog A Updated' },
    }).as('PUT__api_v1_blog__uuid_');
    
    cy.intercept('DELETE', '/api/v1/blog/{uuid}', {
        statusCode: 204,
        body: {},
    }).as('DELETE__api_v1_blog__uuid_');
    
    cy.intercept('GET', '/api/v1/blog/{uuid}', {
        statusCode: 200,
        body: { id: 'blog1', title: 'Blog A' },
    }).as('GET__api_v1_blog__uuid_');
    
    cy.intercept('GET', '/api/v1/blogs', {
        statusCode: 200,
        body: [
            { id: 'blog1', title: 'Blog A' },
            { id: 'blog2', title: 'Blog B' },
        ],
    }).as('GET__api_v1_blogs');
};

