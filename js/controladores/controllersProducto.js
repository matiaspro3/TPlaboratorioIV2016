angular.module('abmapp.controllersProducto', [])


app.controller('controlEncuesta', function($scope,$state,$stateParams, $http,factoryUserActual) {


   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );
   console.info("producto personaaaa...",$stateParams.obj);

$scope.producto={};

$scope.producto.fotoProd1= $stateParams.obj.fotoProd1;
$scope.producto.fotoProd2= $stateParams.obj.fotoProd2;
$scope.producto.fotoProd3= $stateParams.obj.fotoProd3;










});


app.controller('controlProductosGrilla', function($scope,$state, $http,factorySucursalProducto,factoryUserActual) {
	


   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );

  $scope.Traer=function(){

   factorySucursalProducto.TraerTodos().then(function(rta){
        $scope.ListadoProd = rta;
  console.info('funco la factory produ..',$scope.ListadoProd);
    });

  }

  $scope.Traer();


  $scope.Ver=function(sucu){
    console.info('enviandoooo produ..',sucu);
  $state.go('productoVer', {objUser:sucu});
  
  }

});

  
app.controller('controlProductosAlta', function($scope,FileUploader,$state, $http,factoryProductos,factoryUserActual,factoryEmpleado,factorySucursal,servicioABM) {

   $scope.user = factoryUserActual.Logueado;

$scope.producto={};

 $scope.uploader=new FileUploader({url:'servidor/archivosProdu.php'});


$scope.producto.fotoProd1='pordefecto.png';
$scope.producto.fotoProd2='pordefecto.png';
$scope.producto.fotoProd3='pordefecto.png';




$scope.uploader.onAfterAddingFile = function(item) {

if ($scope.producto.fotoProd1=='pordefecto.png')
{
  item.file.name =$scope.producto.produDir+'-1.jpg';
  $scope.producto.fotoProd1=$scope.producto.produDir+'-1.jpg';
}else if ($scope.producto.fotoProd2=='pordefecto.png')
{
  item.file.name =$scope.producto.produDir+'-2.jpg';
  $scope.producto.fotoProd2=$scope.producto.produDir+'-2.jpg';
} else 
{item.file.name =$scope.producto.produDir+'-3.jpg';
$scope.producto.fotoProd3=$scope.producto.produDir+'-3.jpg';
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

      console.info("producto a guardar SLIM:    .......",$scope.producto);
      
if (!$scope.producto.oferta)
  $scope.producto.oferta=false;
factoryProductos.Alta($scope.producto).then(function(rta){
    console.info("ALTA ookk...",rta);

 var pregunta = confirm("¿Desea dar de alta otro Inmueble?");
                if (pregunta == true) {

               //$state.go("empleadoAlta");
                $scope.producto={};
                } else {
                    $state.go("inicio");
                }
              
//     alert("producto REGISTRADO SLIM!");
  //   $state.go("inicio");
    


   })




  }//fin alta





});




app.controller('controlProductoMOD', function($scope,factoryUserActual,factorySucursalProducto,factoryProductos,FileUploader,$state, $http,factoryUserActual,factorySucursalEmpleado,factoryEmpleado,factorySucursal,servicioABM) {
   $scope.user = factoryUserActual.Logueado;
$scope.sucursal={};
$scope.sucursalLista={};
$scope.sucursalElejida={};

//$scope.producto.produDir;
// $scope.productoAgregar;

//$scope.sucursal.elegida;

$scope.alta={};  

 $scope.ok = false;



   $scope.user = factoryUserActual.Logueado;

$scope.sucursales={};


factorySucursal.TraerTodos().then(function(rta){
  
    $scope.sucursalLista=rta;
//        console.info("sucur......", $scope.sucursales);
    
   }),  function errorCallback(response) {
        console.info("incorrecto", response);
alert("errrrro!");

}


factoryProductos.TraerDisponibles().then(function(rta){
  //  console.info("disponibles...",rta);
    $scope.disponibles=rta;
    
   }),  function errorCallback(response) {
        console.info("incorrecto", response);
alert("errrrro!");

}




//$timeout([fn], [delay], [invokeApply], [Pass]);


$scope.Grabar=function(){


  console.info("strin  producto...",JSON.stringify($scope.alta));
   
    factorySucursalProducto.Alta($scope.alta).then(function(rta){
    
    console.info("alta producto.................",rta);
    $state.go('productosGrilla');
      //  $state.go('inicio');
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}
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
    $scope.alta.sucu=$scope.sucursalElejida.id_sucu;  


  //  console.info("sucursal  factory...",$scope.sucursalElejida);
   // console.info("sucursal  factory idddd...",$scope.alta.sucu);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}



//////////
 
    factoryProductos.TraerProducto($scope.producto.produDir).then(function(rta){
    
    $scope.productoAgregar=rta;
  
 console.info("rta  producto...",rta);

  $scope.alta.prod=$scope.productoAgregar.id_prod; 
$scope.ok = true;
   console.info("traigo  producto...",$scope.alta);

   /// console.info("encargado  factory...",$scope.encargado);
   }),  function errorCallback(response) {
        console.info("incorrecto", response);


}

 


}



});











app.controller('controlProduVer', function($scope,$state,$stateParams,factorySucursalProducto, $http,factorySucursalEmpleado,factoryUserActual) {
 
   console.log($stateParams.objUser.produDir);


 $scope.user = factoryUserActual.Logueado;
  //console.info('user....', $scope.user);
$scope.sucursal={};

  $scope.sucursal.id_sucu = Number($stateParams.objUser.id_sucu);
  console.info('parammm,,,', $stateParams.objUser);
  $scope.sucursal.localDir = $stateParams.objUser.localDir;


  $scope.comprada=$stateParams.objUser.comprada;

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


  $scope.Ver=function(sucu){

    console.info("encviando..",sucu);
  $state.go('sucursalVer', {objUser:sucu});
  
  }

$scope.producto={};

$scope.comprarProd={};
  $scope.producto.id_prod = Number($stateParams.objUser.id_prod);

  $scope.producto.precio = Number($stateParams.objUser.precio);
  $scope.producto.oferta = $stateParams.objUser.oferta;

$scope.comprarProd.prod=$scope.producto.id_prod;
$scope.comprarProd.user=$scope.user.id;
  console.info('comprador....', $scope.comprarProd);

  console.info('parammm,,,', $stateParams.objUser);

  $scope.producto.produDir = $stateParams.objUser.produDir;


  if ($stateParams.objUser.fotoProd1=="")
  $scope.producto.fotoProd1= "pordefecto.png"
else $scope.producto.fotoProd1= $stateParams.objUser.fotoProd1;
if ($stateParams.objUser.fotoProd2=="")
  $scope.producto.fotoProd2= "pordefecto.png"
else $scope.producto.fotoProd2= $stateParams.objUser.fotoProd2;
if ($stateParams.objUser.fotoProd3=="")
  $scope.producto.fotoProd3= "pordefecto.png"
else $scope.producto.fotoProd3= $stateParams.objUser.fotoProd3;

  console.info('producto......', $scope.producto);

  $scope.Comprar=function(){

          
  var pregunta = confirm("Seguro desea Comprar esta Propiedad?");
                if (pregunta == true) {                        


factorySucursalProducto.Modificar($scope.comprarProd).then(function(rta){

console.info('modificado......', rta);
//$scope.comprado=true;
alert("Gracias por confiar en nosotros...Se agrego su solicitiud a la lista de pedidos");
   
  var encuenta = confirm("Desea contestar unas preguntas sobre el confort del sericio?");
                if (encuenta == true) { 
                  console.info('envio  emcuesta----',$scope.producto);
                $state.go("encuesta",{obj:$scope.producto});  
               } else {
                  alert("Gracias de Todas Formas.");
                  $state.go("productosGrilla");
                }

})
      } else {
                   // alert("Cancelado.");
                }



}


/////// mapa

$scope.visible=false;



$scope.buscar=function(){

      $scope.coorMapa=resultado.lat()+','+resultado.lng();
      console.info('$scope.coorMapa....',$scope.coorMapa);
        $scope.visible=true;
        

}

 
   $scope.productoMapa = $scope.producto.produDir + ', Ciudad Autónoma de Buenos Aires, Argentina';

var resultado;
  var direccion = $scope.productoMapa;

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
 


});






















app.controller('controlPedidos', function($scope,$state, $http,factorySucursalProducto,factoryUserActual) {
  


   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );

  $scope.Traer=function(){

   factorySucursalProducto.TraerPedidos().then(function(rta){
        $scope.ListadoPedidos = rta;
  console.info('pedidosssss..',$scope.ListadoPedidos);
    });

  }

  $scope.Traer();


  $scope.Ver=function(sucu){/*
    console.info('enviandoooo produ..',sucu);
  $state.go('productoVer', {objUser:sucu});
  */
  }

});
