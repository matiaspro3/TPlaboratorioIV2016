angular.module('abmapp.controlSucursal', [])


app.controller('controlSucursalAlta', function($scope,FileUploader,$state, $http,factoryUserActual,factorySucursal,servicioABM) {

   $scope.user = factoryUserActual.Logueado;

$scope.sucursal={};
//$scope.sucursal.direccion='algo';




 $scope.uploader=new FileUploader({url:'servidor/archivosSucu.php'});


$scope.sucursal.foto1='pordefecto.png';
$scope.sucursal.foto2='pordefecto.png';
$scope.sucursal.foto3='pordefecto.png';




$scope.uploader.onAfterAddingFile = function(item) {

if ($scope.sucursal.foto1=='pordefecto.png')
{
  item.file.name =$scope.sucursal.direccion+'-1.jpg';
  $scope.sucursal.foto1=$scope.sucursal.direccion+'-1.jpg';
}else if ($scope.sucursal.foto2=='pordefecto.png')
{
  item.file.name =$scope.sucursal.direccion+'-2.jpg';
  $scope.sucursal.foto2=$scope.sucursal.direccion+'-2.jpg';
} else 
{item.file.name =$scope.sucursal.direccion+'-3.jpg';
$scope.sucursal.foto3=$scope.sucursal.direccion+'-3.jpg';
}

item.upload();


};

$scope.uploader.onSuccessItem=function(item, response, status, headers)
  {

       $scope.uploader.onBeforeUploadItem(item);
 };




  $scope.Alta=function(){


  //  console.log($scope.uploader.queue);
      if($scope.uploader.queue[0]!=undefined)
      {
        var nombreFoto = $scope.uploader.queue[0]._file.name;
       
      }

      console.info("Sucursal a guardar SLIM:    .......",$scope.sucursal);
      

factorySucursal.sucu=$scope.sucursal;

servicioABM.AltaSucursales($scope.sucursal).then(function(rta){
    console.info("ALTA ookk...",rta);
     alert("sucursal REGISTRADO SLIM!");
     $state.go("inicio");
    
   }),  function errorCallback(response) {
        console.info("incorrecto", response);
alert("errrrro!");

}




  }


  




});






app.controller('controlSucursalesGrilla', function($scope,$state, factoryUserActual,$http,factorySucursal,factorySucursalEmpleado) {
 


   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );

  $scope.Traer=function(){

   //factorySucursalEmpleado.TraerTodos().then(function(rta){
    factorySucursal.TraerTodos().then(function(rta){
        $scope.ListadoProd = rta;
  console.info('funco la factory empleadd..',$scope.ListadoProd);
    });

  }

  $scope.Traer();

  $scope.Ver=function(sucu){
  $state.go('sucursalVer', {objUser:sucu});
  
  }


});




app.controller('controlSucuVer', function($scope,$state,$stateParams, $http) {
 
$scope.sucursal={};

  $scope.sucursal.id = Number($stateParams.objUser.id);
  console.info('parammm,,,', $stateParams.objUser);
  $scope.sucursal.localDir = $stateParams.objUser.localDir;
  $scope.sucursal.fotoLocal1= $stateParams.objUser.fotoLocal1;
  $scope.sucursal.fotoLocal2 = $stateParams.objUser.fotoLocal2;
  $scope.sucursal.fotoLocal3= $stateParams.objUser.fotoLocal3;






  $scope.Modificar=function(){

/*
   factoryUserActual.Modificar($scope.user).then(function(rta){
    console.info("Modificar ookk...");
      $state.go('usuario.grilla');
  }


)*/

}

});


