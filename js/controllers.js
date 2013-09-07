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


}])

.controller('LoginController', ['$scope', 'SessionService', function($scope, SessionService) {
  //SessionService.signup(username, password);

  $scope.username = null;
  $scope.password = null;

  $scope.submitSignup = function() {
    console.log("submitting signup stuff");
    SessionService.signup($scope.username, $scope.password);
  };

  alert('please sign my guestbook');
}]);