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
        delete cartItem._id;
        console.log(cartItem);
        $http.post('http://tiny-tiny.herokuapp.com/collections/eMayMayCart', cartItem).then(function(res){
          console.log(res);
        });
      };
      var remove = function(item){
        $http.delete(url+'/'+item._id);
      };
      var addReview = function(item, review){
        if(!item.reviews){
          item = angular.extend({}, item, {reviews:[review]});
        }
        else{
          item.reviews.push(review);
        }
        return $http.put(url + '/' + item._id, item);
      };
      var edit = function(item){
        return $http.put(url+'/'+item._id, item);
      };
      var detail = function(itemId){
        return $http.get(url + '/' + itemId);
      }
      return {
        addItem: addItem,
        getItems: getItems,
        remove: remove,
        addToCart: addToCart,
        addReview: addReview,
        edit: edit,
        detail: detail
      };
    })
    .factory('CartService', function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/eMayMayCart';
      var getCart = function() {
        return $http.get(url);
      };
      var removeItem = function(item){
        console.log(url + '/' + item._id);
        $http.get(url).then(function(res){
          $http.delete(url + '/' + item._id);
        });
      };
      var totalCost = function(items){
        var cost = 0;
          for(var i = 0; i < items.length; i++){
            cost += parseInt(items[i].price);
          }
          console.log(cost);
          return cost;
      }
      var checkout = function(items){

      }
      return {
        getCart: getCart,
        removeItem: removeItem,
        totalCost: totalCost,
        checkout: checkout
      };
    });
})();
