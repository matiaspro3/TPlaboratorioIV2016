angular.module('abmapp.controlSucursal', [])


app.controller('controlSucursalAlta', function($scope,FileUploader,$state, $http,factoryUserActual,factoryEmpleado,factorySucursal,servicioABM) {

   $scope.user = factoryUserActual.Logueado;

$scope.sucursal={};

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




  }//fin alta





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




app.controller('controlSucuVer', function($scope,$state,$stateParams, $http,factorySucursalEmpleado,factoryUserActual) {
 
   $scope.user = factoryUserActual.Logueado;


$scope.sucursal={};

  $scope.sucursal.id = Number($stateParams.objUser.id_sucu);
  console.info('parammm,,,', $stateParams.objUser);
  $scope.sucursal.localDir = $stateParams.objUser.localDir;
  if ($stateParams.objUser.fotoLocal1=="")
  $scope.sucursal.fotoLocal1= "pordefecto.png"
else $scope.sucursal.fotoLocal1= $stateParams.objUser.fotoLocal1;
if ($stateParams.objUser.fotoLocal2=="")
  $scope.sucursal.fotoLocal2= "pordefecto.png"
else $scope.sucursal.fotoLocal2= $stateParams.objUser.fotoLocal2;
if ($stateParams.objUser.fotoLocal3=="")
  $scope.sucursal.fotoLocal3= "pordefecto.png"
else $scope.sucursal.fotoLocal3= $stateParams.objUser.fotoLocal3;
  console.info('parammm,,,', $scope.sucursal);


factorySucursalEmpleado.TraerEmpleados($scope.sucursal.id).then(function(rta){
   
    console.info(rta);
$scope.ListadoSucu = rta;
   //$state.go("inicio");
    
   })




  $scope.Modificar=function(){

/*
   factoryUserActual.Modificar($scope.user).then(function(rta){
    console.info("Modificar ookk...");
      $state.go('usuario.grilla');
  }


)*/

}

});



app.controller('controlSucursalMOD', function($scope,factoryUserActual,FileUploader,$state, $http,factoryUserActual,factorySucursalEmpleado,factoryEmpleado,factorySucursal,servicioABM) {
   $scope.user = factoryUserActual.Logueado;
$scope.sucursal={};
$scope.sucursalLista={};
$scope.sucursalElejida={};
$scope.empleado1={};
$scope.empleado2={};
$scope.empleado3={};
$scope.encargado={};


$scope.sucursal.encargado;  
$scope.sucursal.empleado1;  
$scope.sucursal.empleado3;  
$scope.sucursal.empleado2;  
$scope.sucursal.elegida;

$scope.alta1={};  
$scope.alta2={};  
$scope.alta3={};
$scope.alta4={};    

 



   $scope.user = factoryUserActual.Logueado;

$scope.sucursales={};


factorySucursal.TraerTodos().then(function(rta){
  
    $scope.sucursalLista=rta;
//        console.info("sucur......", $scope.sucursales);
    
   }),  function errorCallback(response) {
        console.info("incorrecto", response);
alert("errrrro!");

}


factoryEmpleado.TraerDisponibles().then(function(rta){
  //  console.info("disponibles...",rta);
    $scope.disponibles=rta;
    
   }),  function errorCallback(response) {
        console.info("incorrecto", response);
alert("errrrro!");

}








  $scope.Alta=function(){

    //console.info('encargado...',$scope.sucursal.encargado);
    //console.info('empleado1...',$scope.sucursal.empleado1);
    //console.info('empleado2...',$scope.sucursal.empleado2);
   // console.info('empleado3...',$scope.sucursal.empleado3);
   // console.info('empleado3...',$scope.sucursal.empleado3);


////////////////

 factorySucursal.TraerSucursal($scope.sucursal.elegida).then(function(rta){
    
    $scope.sucursalElejida=rta;
    $scope.alta1.sucu=$scope.sucursalElejida.id_sucu;  
    $scope.alta2.sucu=$scope.sucursalElejida.id_sucu;  
    $scope.alta3.sucu=$scope.sucursalElejida.id_sucu;  
    $scope.alta4.sucu=$scope.sucursalElejida.id_sucu;  

  //  console.info("sucursal  factory...",$scope.sucursalElejida);
   // console.info("sucursal  factory idddd...",$scope.alta.sucu);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}




//////////
 
    factoryEmpleado.TraerEmpleado($scope.sucursal.encargado).then(function(rta){
    
    $scope.encargado=rta;
  

  $scope.alta1.emple=$scope.encargado.id_emple; 

   console.info("alta encargado...",$scope.alta1);


    factorySucursalEmpleado.Alta($scope.alta1).then(function(rta){
    
    console.info("alta encargado...",rta);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}
   /// console.info("encargado  factory...",$scope.encargado);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}


//////////////

    factoryEmpleado.TraerEmpleado($scope.sucursal.empleado1).then(function(rta){
    
    $scope.empleado1=rta;
    $scope.alta2.emple=$scope.empleado1.id_emple; 
     
console.info("alta emple1...",$scope.alta2);
    factorySucursalEmpleado.Alta($scope.alta2).then(function(rta){
    
    console.info("alta encargado...",rta);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}


   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}



   

/////////////////////

    factoryEmpleado.TraerEmpleado($scope.sucursal.empleado2).then(function(rta){
    
    $scope.empleado2=rta;
$scope.alta3.emple=$scope.empleado2.id_emple; 

   console.info("alta emple2...",$scope.alta3);
  factorySucursalEmpleado.Alta($scope.alta3).then(function(rta){
    
    console.info("alta encargado...",rta);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}




    //console.info("empleado 2 factory...",$scope.empleado2);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}



  


///////////////
    factoryEmpleado.TraerEmpleado($scope.sucursal.empleado3).then(function(rta){
    

    $scope.empleado3=rta;

$scope.alta4.emple=$scope.empleado3.id_emple; 
console.info("alta emple3...",$scope.alta4);
    factorySucursalEmpleado.Alta($scope.alta4).then(function(rta){
    
    console.info("alta encargado...",rta);
    $state.go('inicio');
   }),  function errorCallback(response) {
        console.info("incorrecto", response);

}
    //console.info("empleado 3 factory...",$scope.empleado3);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}

   


//////////
/*
//
    factorySucursalEmpleado.Alta($scope.sucursal.empleado3).then(function(rta){
    
    $scope.empleado3=rta;
    console.info("empleado 3 factory...",$scope.empleado3);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}

*/

}







});
