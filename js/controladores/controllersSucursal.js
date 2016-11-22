angular.module('abmapp.controlSucursal', [])


app.controller('controlSucursalAlta', function($scope, $http,factoryUserActual) {

   $scope.user = factoryUserActual.Logueado;
});



