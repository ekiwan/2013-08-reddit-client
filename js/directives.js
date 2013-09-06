angular.module('myApp.directives', [])

.directive('primeDirective', function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/home.html',

    scope: {
      ngModel: '='
    },

    link: function(scope, ele, attr) {
      scope.score = 0;

      scope.upVote = function() {
        scope.score++;
      };

      scope.downVote = function() {
        scope.score--;
      };
    }
  };

});