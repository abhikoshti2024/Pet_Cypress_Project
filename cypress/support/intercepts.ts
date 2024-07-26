

export const setupIntercepts = () => {
  // Brand Intercepts
  cy.intercept('POST', '/api/v1/brand/create').as('POST__api_v1_brand_create');
  cy.intercept('PUT', '/api/v1/brand/{uuid}').as('PUT__api_v1_brand__uuid_');
  cy.intercept('DELETE', '/api/v1/brand/{uuid}').as('DELETE__api_v1_brand__uuid_');
  cy.intercept('GET', '/api/v1/brand/{uuid}').as('GET__api_v1_brand__uuid_');
  cy.intercept('GET', '/api/v1/brands').as('GET__api_v1_brands');
  // Category Intercepts
  cy.intercept('POST', '/api/v1/category/create').as('POST__api_v1_category_create');
  cy.intercept('PUT', '/api/v1/category/{uuid}').as('PUT__api_v1_category__uuid_');
  cy.intercept('DELETE', '/api/v1/category/{uuid}').as('DELETE__api_v1_category__uuid_');
  cy.intercept('GET', '/api/v1/category/{uuid}').as('GET__api_v1_category__uuid_');
  cy.intercept('GET', '/api/v1/categories').as('GET__api_v1_categories');
  // Order Intercepts
  cy.intercept('GET', '/api/v1/orders').as('GET__api_v1_orders');
  cy.intercept('GET', '/api/v1/orders/shipment-locator').as('GET__api_v1_orders_shipment-locator');
  cy.intercept('GET', '/api/v1/orders/dashboard').as('GET__api_v1_orders_dashboard');
  cy.intercept('POST', '/api/v1/order/create').as('POST__api_v1_order_create');
  cy.intercept('GET', '/api/v1/order/{uuid}').as('GET__api_v1_order__uuid_');
  cy.intercept('PUT', '/api/v1/order/{uuid}').as('PUT__api_v1_order__uuid_');
  cy.intercept('DELETE', '/api/v1/order/{uuid}').as('DELETE__api_v1_order__uuid_');
  cy.intercept('GET', '/api/v1/order/{uuid}/download').as('GET__api_v1_order__uuid__download');
  // Payment Intercepts
  cy.intercept('POST', '/api/v1/order-status/create').as('POST__api_v1_order-status_create');
  cy.intercept('PUT', '/api/v1/order-status/{uuid}').as('PUT__api_v1_order-status__uuid_');
  cy.intercept('DELETE', '/api/v1/order-status/{uuid}').as('DELETE__api_v1_order-status__uuid_');
  cy.intercept('GET', '/api/v1/order-status/{uuid}').as('GET__api_v1_order-status__uuid_');
  cy.intercept('GET', '/api/v1/order-statuses').as('GET__api_v1_order-statuses');
  cy.intercept('GET', '/api/v1/payments').as('GET__api_v1_payments');
  cy.intercept('POST', '/api/v1/payment/create').as('POST__api_v1_payment_create');
  cy.intercept('GET', '/api/v1/payment/{uuid}').as('GET__api_v1_payment__uuid_');
  cy.intercept('PUT', '/api/v1/payment/{uuid}').as('PUT__api_v1_payment__uuid_');
  cy.intercept('DELETE', '/api/v1/payment/{uuid}').as('DELETE__api_v1_payment__uuid_');
  // Product Intercepts
  cy.intercept('POST', '/api/v1/product/create').as('POST__api_v1_product_create');
  cy.intercept('PUT', '/api/v1/product/{uuid}').as('PUT__api_v1_product__uuid_');
  cy.intercept('DELETE', '/api/v1/product/{uuid}').as('DELETE__api_v1_product__uuid_');
  cy.intercept('GET', '/api/v1/product/{uuid}').as('GET__api_v1_product__uuid_');
  cy.intercept('GET', '/api/v1/products').as('GET__api_v1_products');
  // User Intercepts
  cy.intercept('GET', '/api/v1/user').as('GET__api_v1_user');
  cy.intercept('DELETE', '/api/v1/user').as('DELETE__api_v1_user');
  cy.intercept('GET', '/api/v1/user/orders').as('GET__api_v1_user_orders');
  cy.intercept('PUT', '/api/v1/user/edit').as('PUT__api_v1_user_edit');
  cy.intercept('POST', '/api/v1/file/upload').as('POST__api_v1_file_upload');
  cy.intercept('GET', '/api/v1/file/{uuid}').as('GET__api_v1_file__uuid_');
  // Admin Intercepts
  cy.intercept('POST', '/api/v1/admin/login').as('POST__api_v1_admin_login');
  cy.intercept('GET', '/api/v1/admin/logout').as('GET__api_v1_admin_logout');
  cy.intercept('POST', '/api/v1/admin/create').as('POST__api_v1_admin_create');
  cy.intercept('GET', '/api/v1/admin/user-listing').as('GET__api_v1_admin_user-listing');
  cy.intercept('PUT', '/api/v1/admin/user-edit/{uuid}').as('PUT__api_v1_admin_user-edit__uuid_');
  cy.intercept('DELETE', '/api/v1/admin/user-delete/{uuid}').as('DELETE__api_v1_admin_user-delete__uuid_');
  // User Auth Intercepts
  cy.intercept('POST', '/api/v1/user/login').as('POST__api_v1_user_login');
  cy.intercept('GET', '/api/v1/user/logout').as('GET__api_v1_user_logout');
  cy.intercept('POST', '/api/v1/user/create').as('POST__api_v1_user_create');
  cy.intercept('POST', '/api/v1/user/forgot-password').as('POST__api_v1_user_forgot-password');
  cy.intercept('POST', '/api/v1/user/reset-password-token').as('POST__api_v1_user_reset-password-token');
  // Main Intercepts
  cy.intercept('GET', '/api/v1/main/promotions').as('GET__api_v1_main_promotions');
  cy.intercept('GET', '/api/v1/main/blog').as('GET__api_v1_main_blog');
  cy.intercept('GET', '/api/v1/main/blog/{uuid}').as('GET__api_v1_main_blog__uuid_');
};
