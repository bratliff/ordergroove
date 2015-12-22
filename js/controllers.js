var userControllers = angular.module('userControllers', ['ngAnimate']);

userControllers.controller('ListController', ['$scope', '$http', '$filter', function($scope, $http) {
  $http.get('js/users.json').success(function(data) {
    $scope.users = data;
    $scope.userOrder = 'last_name';
  });

  $scope.$watch('search', function(val)
    { 
        
    });

}]);

userControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/users.json').success(function(data) {
    $scope.users = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.users.length-1;
    }

    if ($routeParams.itemId < $scope.users.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

