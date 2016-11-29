angular.module('abmapp.controllersUsuario', [])


app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});
app.controller('controlInicio', function($scope, $http,factoryUserActual) {
  $scope.DatoTest="**Menu**";
  


//////////////////////////////////


///////////////////////////////////














  //TENGO QUE VALIDAR SI ESTA AUTENTICADO
/*  if($auth.isAuthenticated())
    //muestro los botones para que ingrese al sistema
  else
    //le pido que se loguee*/

   $scope.user = factoryUserActual.Logueado;
  console.info("user...",$scope.user );

});



app.controller('controlUsuario', function($scope, $http,$auth,$state,factoryUserActual) {
/* if($auth.isAuthenticated()){
          $scope.selogueo=true;

        }
        else{
          $scope.selogueo=false;
        }
  */
   $scope.user = factoryUserActual.Logueado;
   console.info("userCONTROL...",$scope.user );
  $scope.Grilla=function(){
   
  $state.go("usuario.grilla");


  }








});



app.controller('controlUsuarioMenu', function($scope, $http,$auth,$state,factoryUserActual) {
        /*
  if($auth.isAuthenticated()){
          $scope.selogueo=true;
    
        }
        else{
      
          $scope.selogueo=false;
        }
*/


$scope.user =factoryUserActual.Logueado;



  $scope.Desloguearse = function(){
        $auth.logout();
$scope.user ="";
factoryUserActual.Logueado= "";
     $state.go("inicio");
}

});

app.controller('controlUsuarioLogin', function($scope, $http, $auth, $state,factoryUserActual) {













  $scope.usuario = {};
//  $scope.usuario.usuario = "lala";
// $scope.usuario.dni = 5656;
//  $scope.usuario.password = 2222;

  $scope.Admin = function(){
  $scope.usuario.usuario = "matias";
  $scope.usuario.email = "admin@administrador";
  $scope.usuario.password = 444;
  $scope.usuario.perfil= "admin";
  }


  $scope.Encargado = function(){
  $scope.usuario.usuario = "encargado";
  $scope.usuario.email = "enca@encargado";
  $scope.usuario.password = 321;
  $scope.usuario.perfil= "enca"; 
  }

  $scope.Empleado = function(){
  $scope.usuario.usuario = "empleado";
  $scope.usuario.email = "emple@empleado";
  $scope.usuario.password = 454;
  $scope.usuario.perfil= "emple"; 
  }
 
  $scope.Cliente = function(){
  $scope.usuario.usuario = "cliente";
  $scope.usuario.email = "clien@cliente";
  $scope.usuario.password = 123;
  $scope.usuario.perfil= "clien"; 
  }






  $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
      .then(function(response) {
        console.info("autenticatee",response);
      })
      .catch(function(response) {
        console.log("rompió github!");
      });
    }

  /*if($auth.isAuthenticated())
    console.info("token", $auth.getPayload());
  else
    console.info("no token", $auth.getPayload());*/

  $scope.Login = function(){

    //Esto es una llamada equivalente a $http
    console.info("userrrrrrrrr...",$scope.usuario);
    $auth.login($scope.usuario)
    .then(function(response) {


        //CHEQUEO DE SESION ACTIVA O NO
        if($auth.isAuthenticated()){
          console.info("token", $auth.getPayload());
          factoryUserActual.Logueado= $auth.getPayload();

                if (factoryUserActual.Logueado.estado!="activo")
        {
          //alert(factoryUserActual.Logueado.estado);
          alert("SE ENCUENTRA DADO DE BAJA:"+factoryUserActual.Logueado.estado);
               $auth.logout();
              factoryUserActual.Logueado= "";
                   $state.go("inicio");
              }
                  else{       console.info("correcto", response);
          //$scope.userActual= $auth.getPayload();
          //console.info("$scope.userActual", $scope.userActual);
          //console.info("$scope.userActual.perfil", $scope.userActual.perfil);
          

          alert("LOGUEADO!");

      
    
            //factoryUserActual.Logueado=$scope.usuario;

          $state.go("inicio");}


        }
        else{
          console.info("no token", $auth.getPayload());
          //alert("Usuario NO registrado.");
          //$state.go("usuario.registrarse");
          alert("Usuario NO registrado.Contacte al ADMIN para que lo ingrese");
          $state.go("inicio");


        }
          
      // Redirect user here after a successful log in.
    })
    .catch(function(response) {
        console.info("incorrecto", response);
      // Handle errors here, such as displaying a notification
      // for invalid email and/or password.
    });
    
  }











});

app.controller('controlUsuarioRegistrarse', function($scope, $http, FileUploader, $state,factoryUserActual) {
  

  $scope.Guardar=function(){
  
      console.log("usuario a guardar:");
      console.log($scope.usuario);

if (!$scope.usuario.perfil)
{
//console.info('nullloo',$scope.usuario.perfil);
$scope.usuario.perfil ='clien';
}

else  if ($scope.usuario.perfil !='admin')
{

$scope.usuario.perfil ='clien';
}

factoryUserActual.Alta($scope.usuario).then(function(rta){
    console.info("ALTA ookk...");


     alert("User Registrado");
   $state.go("inicio");
    
   })

;

}

});



app.controller('controlUsuarioGrilla', function($scope, $http, $state, $auth,factoryUserActual) {
    
   


  $scope.Traer=function(){

   factoryUserActual.TraerTodas().then(function(rta){
        $scope.ListadoUsers = rta;
  console.info('funco la factory usuariossss..',$scope.ListadoUsers);
    });

  }

  $scope.Traer();

  $scope.Borrar=function(usuario){

   factoryUserActual.Borrar(usuario).then(function(rta){
  console.info('boreeeeeee  usuariossss..');
        $scope.Traer();
    });




  }

  $scope.Modificar=function(usuario){
    
    //console.info("Modificar persona....",usuario);
    $state.go('usuario.modificar', {objUser:usuario});
  }


});





app.controller('usuarioRegistrarseMOD', function($scope, $http,FileUploader, $state,$stateParams, factoryUserActual) {

$scope.userActual= factoryUserActual.Logueado;

  $scope.user={};

  $scope.user.id = Number($stateParams.objUser.id);
  console.info($scope.user);
  $scope.user.usuario = $stateParams.objUser.usuario;
  $scope.user.email= $stateParams.objUser.email;
  $scope.user.password = Number($stateParams.objUser.password);
  $scope.user.perfil = $stateParams.objUser.perfil;
    $scope.user.estado = $stateParams.objUser.estado;


console.info("usuario a midificar;...",$scope.user);



  $scope.Modificar=function(){


   factoryUserActual.Modificar($scope.user).then(function(rta){
    console.info("Modificar ookk...");
      $state.go('usuario.grilla');
  }
)}


  });
 


