angular.module('abmapp.controlSucursal', [])


app.controller('controlSucursalAlta', function($scope,FileUploader,$state, $http,factoryUserActual,factoryEmpleado,factorySucursal,servicioABM) {

   $scope.user = factoryUserActual.Logueado;

$scope.sucursal={};

 $scope.uploader=new FileUploader({url:'servidor/archivosSucu.php'});


$scope.sucursal.fotoLocal1='pordefecto.png';
$scope.sucursal.fotoLocal2='pordefecto.png';
$scope.sucursal.fotoLocal3='pordefecto.png';




$scope.uploader.onAfterAddingFile = function(item) {

if ($scope.sucursal.fotoLocal1=='pordefecto.png')
{
  item.file.name =$scope.sucursal.localDir+'-1.jpg';
  $scope.sucursal.fotoLocal1=$scope.sucursal.localDir+'-1.jpg';
}else if ($scope.sucursal.foto2=='pordefecto.png')
{
  item.file.name =$scope.sucursal.localDir+'-2.jpg';
  $scope.sucursal.fotoLocal2=$scope.sucursal.localDir+'-2.jpg';
} else 
{item.file.name =$scope.sucursal.localDir+'-3.jpg';
$scope.sucursal.fotoLocal3=$scope.sucursal.localDir+'-3.jpg';
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
    
 var pregunta = confirm("¿Desea dar de alta otra Sucursal?");
                if (pregunta == true) {

               //$state.go("empleadoAlta");
                $scope.sucursal={};
                } else {
                    $state.go("inicio");
                }
              
    // alert("sucursal REGISTRADO SLIM!");
     //$state.go("inicio");
    



   })



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
      console.info("encviando..",sucu);
    $state.go('sucursalVer', {objUser:sucu});
    
    }


});




app.controller('controlSucuModificar', function($scope,FileUploader,$state,$stateParams, $http,factorySucursal,factoryUserActual) {


 console.info('recivo en sucu Modificar,', $stateParams.objUser);


       $scope.cancelar=true;
   $scope.user = factoryUserActual.Logueado;

$scope.sucursal={};
$scope.buckUp={};
  
  $scope.sucursal.idMuestras = Number($stateParams.objUser.idMuestras);


  $scope.sucursal.localDir = $stateParams.objUser.localDir;
  
 $scope.sucursal.fotoLocal1= $stateParams.objUser.fotoLocal1;

   $scope.sucursal.fotoLocal2= $stateParams.objUser.fotoLocal2;

 $scope.sucursal.fotoLocal3= $stateParams.objUser.fotoLocal3;

  console.info('objeto sucursal....', $scope.sucursal);

  $scope.buckUp.foto1=$scope.sucursal.fotoLocal1;
  $scope.buckUp.foto2=$scope.sucursal.fotoLocal2;
  $scope.buckUp.foto3=$scope.sucursal.fotoLocal3;



  $scope.EliminarFoto=function(foto){
           
  var pregunta = confirm("Seguro desea Eliminar esta foto?");
                if (pregunta == true) {
                            if (foto=='fotoLocal1'){
                                 
                                  $scope.sucursal.fotoLocal1 = '';
                              
                              }
                              else  if (foto=='fotoLocal2')
                              {
                                  $scope.sucursal.fotoLocal2 = '';
                              }    
                              else   if (foto=='fotoLocal3')
                              {
                                  $scope.sucursal.fotoLocal3 = '';
                              }


                } else {
                   // alert("Cancelado.");
                }
              

  }


 $scope.uploader=new FileUploader({url:'servidor/archivosSucu.php'});
$scope.uploader.onAfterAddingFile = function(item) {
        $scope.cancelar=false;
                                        if (!$scope.sucursal.fotoLocal1)
                                          {
                                            item.file.name =$scope.sucursal.localDir+'-1.jpg';
                                            $scope.sucursal.fotoLocal1=$scope.sucursal.localDir+'-1.jpg';
                                          }else if (!$scope.sucursal.fotoLocal2)
                                          {
                                            item.file.name =$scope.sucursal.localDir+'-2.jpg';
                                            $scope.sucursal.fotoLocal2=$scope.sucursal.localDir+'-2.jpg';
                                          } else if (!$scope.sucursal.fotoLocal3)
                                          {item.file.name =$scope.sucursal.localDir+'-3.jpg';
                                          $scope.sucursal.fotoLocal3=$scope.sucursal.localDir+'-3.jpg';
                                          }


                      item.upload();


                        };

                        $scope.uploader.onSuccessItem=function(item, response, status, headers)
                          {

                               $scope.uploader.onBeforeUploadItem(item);
                         };



  $scope.Modi=function(){
console.info('a modificarrr....',$scope.sucursal);
               factorySucursal.Modificar($scope.sucursal).then(function(rta){

  console.info('modificado....',rta);
  $state.go('sucursalesGrilla');
    

    
   })         
}













});






app.controller('controlSucuVer', function($scope,$state,$stateParams, $http,factorySucursalEmpleado,factorySucursalProducto,factoryUserActual) {
 console.info('recivo estp,', $stateParams.objUser);
   $scope.user = factoryUserActual.Logueado;
 console.info('userrr en ver sucu..', $scope.user);
$scope.sucursal={};
  
  $scope.sucursal.idMuestras = Number($stateParams.objUser.id_sucu);
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


/*
factorySucursalProducto.TraerTodosSucu($scope.sucursal.id).success(function(rta) { 
 console.info(rta);
$scope.ListadoProductos = rta;
}).error(function() { alert("errrrro!"); })
  */



factorySucursalEmpleado.TraerEmpleados($scope.sucursal.idMuestras).then(function(rta){
   
    console.info(rta);
$scope.ListadoSucu = rta;
    console.info('$scope.ListadoSucu ....',$scope.ListadoSucu );
   //$state.go("inicio");
    
     }),  function error(response) {
        console.info("incorrecto", response);
alert("errrrro!");

}




  $scope.Ver=function(sucu){
  $state.go('productoVer', {objUser:sucu});
  
  }

  $scope.Modificar=function(){



    $state.go('sucursalModificar', {objUser:$scope.sucursal});

}

console.info('id....',$scope.sucursal);
factorySucursalProducto.TraerTodosSucu($scope.sucursal.idMuestras).then(function(rta){
   
    console.info('algooo....',rta);
$scope.ListadoProductos = rta;



console.info('lista de productos ....',$scope.ListadoProductos);
console.info('lista dir....',$scope.ListadoProductos.produDir);
console.info('lista. oferta...',$scope.ListadoProductos.oferta);
console.info('lista. comprada..',$scope.ListadoProductos.comprada);
   //$state.go("inicio");
    
   }) .catch(function(rta) {
      alert("errrrro!");  // Catch and handle exceptions from success/error/finally functions
    })





/////// mapa

$scope.visible=false;



$scope.buscar=function(){

      $scope.coorMapa=resultado.lat()+','+resultado.lng();
      console.info('$scope.coorMapa....',$scope.coorMapa);
        $scope.visible=true;
        

}

  
   $scope.sucursalMapa =  $scope.sucursal.localDir + ', Ciudad Autónoma de Buenos Aires, Argentina';

var resultado;
  var direccion = $scope.sucursalMapa;

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({address: direccion}, function(results, status) {

    if (status == google.maps.GeocoderStatus.OK) {
      resultado = results[0].geometry.location;
      console.info('direccion....',direccion);
      console.info('results[0]....',results[0]);
      console.info('resultado....',resultado);
      console.info('resultado.lat....',resultado.lat());
      console.info('resultado.lng....',resultado.lng());
     // setTimeout($scope.buscar, 5000);

      }
  }
)
////////// mapa fin












//fin
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
