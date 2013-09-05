angular.module('myApp.controllers', [])

.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $http.jsonp('http://api.reddit.com/new?jsonp=JSON_CALLBACK')
    .success(function(data) {
      $scope.reddits = data.data.children;
      console.log(data.data.children);
    })
    
    .error(function(data, status) {
      console.log('great job');
    });
    
  $scope.score = 0;

  $scope.upVote = function() {
    score++;
  }

  $scope.downVote = function() {
    score--;
  }
}])