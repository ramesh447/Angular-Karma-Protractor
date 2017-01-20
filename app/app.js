var app = angular.module("app", []);
app.controller("HelloController", function($scope) {
    //alert('called');
  $scope.message = "Hello World";	
    $scope.newText = undefined;
  $scope.changeGreeting = function() {
    if ($scope.newText !== undefined) {
      $scope.message = $scope.newText;
    }
  };
});