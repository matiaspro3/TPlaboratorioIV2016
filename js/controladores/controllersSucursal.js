angular.module('abmapp.controlSucursal', [])


app.controller('controlSucursalAlta', function($scope, $http,factoryUserActual) {

   $scope.user = factoryUserActual.Logueado;
});



app.controller('controlSucursalesGrilla', function($scope, factoryUserActual,$http,factorySucursalEmpleado) {
 


   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );

  $scope.Traer=function(){

   factorySucursalEmpleado.TraerTodos().then(function(rta){
        $scope.ListadoProd = rta;
  console.info('funco la factory empleadd..',$scope.ListadoProd);
    });

  }

  $scope.Traer();



});


