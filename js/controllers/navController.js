(function(global) {

  // App
  var app = global.h4hApp;

  // Controllers
  app.NavController = function($scope, $rootScope, $location) {
    $scope.location = $location;
  };

})(window);