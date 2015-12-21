var userControllers = angular.module('userControllers', ['ngAnimate']);

userControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/users.json').success(function(data) {
    $scope.users = data;
    $scope.userOrder = 'name';
  });
}]);

userControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.doctors = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.doctors.length-1;
    }

    if ($routeParams.itemId < $scope.doctors.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

