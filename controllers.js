(function(){
  angular
    .module('eMayMay')
    .controller('MainController', function ($scope) {
      $scope.msg = "test";
    })
    .controller('ShopController', function ($scope, ShopService, $routeParams) {
      ShopService.getItems().success(function (items) {
        $scope.allItems = items;
        console.log($routeParams);
      });
      if($routeParams._id){
        ShopService.detail($routeParams._id).success(function(data){
          console.log(data);
          $scope.item = data;
          console.log($scope.item);
        });
      }
      else{
        ShopService.getItems().success(function(item){
          $scope.item = item;
        });
      }
      $scope.addItem = function(newItem){
        ShopService.addItem(newItem);
      };
      $scope.addToCart = function(cartItem){
        ShopService.addToCart(cartItem);
      };
      $scope.remove = function(item){
        ShopService.remove(item);
      };
      $scope.addReview = function(item, review){
        ShopService.addReview(item, review);
      };
      $scope.edit = function(item){
        ShopService.edit(item);
      }
    })
    .controller('CartController', function($scope, CartService){
      $scope.cartItems = [];
      CartService.getCart().success(function(items){
        $scope.cartItems = items;
        console.log($scope.cartItems);
        $scope.removeItem = function(item){
          console.log(item);
          CartService.removeItem(item);
        };
      $scope.totalCost = CartService.totalCost($scope.cartItems);
    });
  });
})();
