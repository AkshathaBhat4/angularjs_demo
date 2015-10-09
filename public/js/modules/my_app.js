var app = angular.module('myApp', [])
app.run(function($rootScope){
  $rootScope.name = 'Welcome !!!';
  $rootScope.parent_name = 'Nik !!!';
});
app.controller('MyAppController',
  function($scope) {
    $scope.name = "Ari";
  }
);

app.controller('MyAppChildController',
  function($scope) {
    $scope.name = "Ben";
  }
);

app.controller('FirstController', function($scope) {
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.subtract = function(amount) { $scope.counter -= amount; };
});

app.controller('ParentController', function($scope) {
  $scope.person = {greeted: false};
});
app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.person.name = "Ari Lerner";
    $scope.person.greeted = true;
  }
});