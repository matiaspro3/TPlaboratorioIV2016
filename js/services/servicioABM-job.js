angular.module('abmapp')
.service('servicioABM', function($timeout,$http) {
    this.Nombre = "Servicio ABM";
   this.Borrar = Borrar;
    this.Cargar = Cargar;
    this.Alta = Alta;
    this.Modificar =Modificar;

  

    function Cargar(){
      
      
    return $http.get('http://localhost:8088/Labo/ws/personas')
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }
  

  

    function Alta(persona){
      
      
    return  $http.post('http://localhost:8088/Labo/ws/alta/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }






    function Borrar(persona){
      
      
    return    $http.delete('http://localhost:8088/Labo/ws/personas/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }
  

    function Modificar(persona){
      
      
    return    $http.put('http://localhost:8088/Labo/ws/modificarPerson/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }

   







  })