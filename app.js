(function(){
  "use strict";
  angular
    .module('eMayMay', [
      'ngRoute'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          template: '',
          controller: 'MainController'
        })
        .when('/shop', {
          templateUrl: 'views/shop.html',
          controller: 'ShopController'
        })
        .when('/admin', {
          templateUrl: 'views/addItem.html',
          controller: 'ShopController'
        })
        .when('/cart', {
          templateUrl: 'views/showCart.html',
          controller: 'CartController'
        })
        .when('/shop/:_id', {
          templateUrl: 'views/showDetail.html',
          controller: 'ShopController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})
    });
})();
