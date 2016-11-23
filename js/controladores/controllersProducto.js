angular.module('abmapp.controllersProducto', [])


app.controller('controlProductosGrilla', function($scope, $http,factoryProductos) {
  $scope.Traer=function(){

   factoryProductos.TraerTodos().then(function(rta){
        $scope.ListadoProd = rta;
  console.info('funco la factory produ..',$scope.ListadoProd);
    });

  }

  $scope.Traer();



});



