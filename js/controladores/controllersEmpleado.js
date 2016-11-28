angular.module('abmapp.controllersEmpleado', [])


app.controller('controlEmpleadoGrilla', function($scope,$state, $http,factoryEmpleado,factoryUserActual) {
	
//$scope.ListadoEmple =[];

   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );

  $scope.Traer=function(){

   factoryEmpleado.TraerTodos().then(function(rta){
    console.info('rta..',rta);
        $scope.ListadoEmple = rta;
  console.info('funco la factory empleadisss..',$scope.ListadoEmple);
    });

  }

  $scope.Traer();


  $scope.Ver=function(emple){
    console.info('enviandoooo empleadoppp..',emple);
 $state.go('empleadoMOD', {objUser:emple});
  
  }

});

  
app.controller('controlEmpleadoAlta', function($scope,$state, $http,factoryUserActual,factoryEmpleado) {

   $scope.user = factoryUserActual.Logueado;


$scope.empleado={};


  $scope.Alta=function(){

      console.info("producto a guardar SLIM:    .......",$scope.empleado);
      
factoryEmpleado.Alta($scope.empleado).then(function(rta){
    console.info("ALTA ookk...",rta);
     alert("Empleado REGISTRADO SLIM!");

     $state.go("inicio");
    
   }) 




  }//fin alta





});








app.controller('controlEmpleadoMOD', function($scope,$state,$stateParams, factoryEmpleado,$http,factoryUserActual) {
 
   $scope.user = factoryUserActual.Logueado;
  console.info('param recivo en mod....', $stateParams.objUser);


$scope.empleado={};

  $scope.empleado.id_emple = Number($stateParams.objUser.id_emple);

  $scope.empleado.cargo = $stateParams.objUser.cargo;
   $scope.empleado.estado = $stateParams.objUser.estado;
    $scope.empleado.legajo = $stateParams.objUser.legajo;
     $scope.empleado.nombre = $stateParams.objUser.nombre;






  console.info('parammm,,,', $scope.empleado);


  $scope.Guardar=function(){

      console.info("producto a guardar SLIM:    .......",$scope.empleado);
      
factoryEmpleado.Modificar($scope.empleado).then(function(rta){
    console.info("empleado modi  ookk...",rta);
     

     $state.go("empleadoGrilla");
    
   })
   } 




});
