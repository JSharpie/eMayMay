(function(){
  angular
    .module('eMayMay')
    .controller('MainController', function ($scope) {
      $scope.msg = "test";
    })
    .controller('ShopController', function ($scope, ShopService) {
      ShopService.getItems().success(function (items) {
        $scope.allItems = items;
      });
      $scope.addItem = function(newItem){
        ShopService.addItem(newItem);
      };
      $scope.addToCart = function(cartItem){
        ShopService.addToCart(cartItem);
      };
    })
    .controller('CartController', function($scope, CartService){
      CartService.getCart().success(function(items){
        $scope.cartItems = items;
      });
      $scope.removeItem = function(item){
        CartService.removeItem(item);
      }
    });
})();
