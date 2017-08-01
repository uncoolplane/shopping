angular.module('eCommerce', ['ui.router', 'ui.bootstrap', 'ui.grid', 'ngAnimate', 'ngMessages', 'ngTouch', /*'uploadFileService', 'fileModelDirective'*/]).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './views/home/home.html',
    controller: 'homeController'
  })
  .state('cart', {
    url: '/cart',
    templateUrl: './views/cart/cart.html',
    controller: 'cartController'
  })
  .state('checkout', {
    url: '/checkout',
    templateUrl: './views/checkout/checkout.html',
    controller: 'checkoutController'
  })
  .state('profile', {
    url: '/profile',
    templateUrl: './views/profile/profile.html',
    controller: 'profileController'
  })
  .state('login', {
    url: '/login',
    templateUrl: './views/profile/login.html',
    controller: 'loginController'
  })
  .state('customer', {
    url: '/customers',
    templateUrl: './views/customers/customers.html',
    controller: 'customersController'
  })
  .state('customerdetails', {
    url: '/customers/details/:id',
    templateUrl: './views/customers/customerDetails.html',
    controller: 'customerDetailsController'
  })
  .state('products', {
    url: '/products',
    templateUrl: './views/products/products.html',
    controller: 'productsController'
  })
  .state('productdetails', {
    url: '/products/details/:id',
    templateUrl: './views/products/productDetails.html',
    controller: 'productDetailsController'
  })
  .state('orders', {
    url: '/orders',
    templateUrl: './views/orders/orders.html',
    controller: 'ordersController'
  })
  .state('orderdetails', {
    url: '/orders/details/:id',
    templateUrl:'./views/orders/orderDetails.html',
    controller: 'orderDetailsController'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: './views/contact/contact.html',
    controller: 'contactController'
  })
  .state('myorders', {
    url: '/myorders',
    templateUrl: './views/orders/myorders.html',
    controller: 'myordersController'
  })
})
