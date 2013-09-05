angular.module('myApp.directives', [])

.directive('primeDirective', function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/home.html',
  
    scope: {
      ngModel: '='
    }
    
    // link: function(scope, ele, attr) {
    // }
  };
  
});