(function() {
  "use strict";
  angular
    .module('eMayMay')
    .factory('ShopService', function($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/eMayMay';
      var addItem = function(newItem) {
        $http.post(url, newItem).then(function(res) {
          console.log(res);
        });
      };
      var getItems = function() {
        return $http.get(url);
      };
      var addToCart = function(cartItem){
        $http.post('http://tiny-tiny.herokuapp.com/collections/eMayMayCart', cartItem).then(function(res){
          console.log(res);
        });
      };
      var remove = function(item){
        $http.delete(url+'/'+item._id);
      };
      return {
        addItem: addItem,
        getItems: getItems,
        remove: remove,
        addToCart: addToCart
      };
    })
    .factory('CartService', function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/eMayMayCart';
      var getCart = function() {
        return $http.get(url);
      };
      var removeItem = function(item){
        console.log(url + '/' + item._id);
        $http.delete(url+'/'+item._id);
      };
      return {
        getCart: getCart,
        removeItem: removeItem
      };
    });
})();
