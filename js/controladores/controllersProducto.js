angular.module('abmapp.controllersProducto', [])


app.controller('controlProductosGrilla', function($scope, $http,factorySucursalProducto,factoryUserActual) {
	


   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );

  $scope.Traer=function(){

   factorySucursalProducto.TraerTodos().then(function(rta){
        $scope.ListadoProd = rta;
  console.info('funco la factory produ..',$scope.ListadoProd);
    });

  }

  $scope.Traer();



});



