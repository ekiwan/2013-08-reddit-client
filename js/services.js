angular.module('myApp.services', [])
.factory('SessionService', ['serverRoute', '$http',
  function(serverRoute, $http) {
    return {
      signup: function(username, password) {
        $http({
          method: 'POST',
          url: serverRoute + '/signup',
          data: JSON.stringify({
            username: username,
            password: password
          })
        })
        .success(function(data) {
          console.log("success signup post");
        })
        .error(function(data, status) {
          console.log("error signup post: ", status);
        });
      },
      login: function() {

      }
    };
  }]);