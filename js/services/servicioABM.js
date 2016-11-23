angular.module('abmapp')
.service('servicioABM', function($timeout,$http) {
    this.Nombre = "Servicio ABM";
   this.CargarProductos = CargarProductos;
    this.CargarSucursales = CargarSucursales;
    this.CargarSucursalEmpleado = CargarSucursalEmpleado;
    this.CargarSucursalProductos = CargarSucursalProductos;
    this.AltaProductos = AltaProductos;
    this.AltaSucursales = AltaSucursales;
    this.AltaLocalEmpleado = AltaLocalEmpleado;
    this.AltaLocalProducto = AltaLocalProducto;
    this.BorrarProducto = BorrarProducto;
    this.BorrarSucursal = BorrarSucursal;
    this.BorrarLocalEmpleado = BorrarLocalEmpleado;
    this.BorrarLocalProducto = BorrarLocalProducto;
    this.ModificarProducto = ModificarProducto;
    this.ModificarSucursal = ModificarSucursal;
    this.ModificarLocalEmpleado = ModificarLocalEmpleado;
    this.ModificarLocalProducto = ModificarLocalProducto;


  
//TRAER TODOS.............
    function CargarProductos(){
      
          return $http.get('http://localhost/Labo/ws/productos')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }
  
function CargarSucursales(){
            
    return $http.get('http://http://matiasds.16mb.com/ws/sucursales')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }
  

function CargarSucursalEmpleado(){
      
          return $http.get('http://localhost/Labo/ws/local_empleado')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }

function CargarSucursalProductos(){
      
          return $http.get('http://localhost/Labo/ws/local_producto')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }













  //ALTA.............

    function AltaProductos(prod){
            
    return  $http.post('http://localhost/Labo/ws/altaPrd/' + JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }



    function AltaSucursales(prod){
            
    return  $http.post('http://localhost/Labo/ws/sucursal/' + JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }


    function AltaLocalEmpleado(prod){
            
    return  $http.post('http://localhost/Labo/ws/local_empleado/' + JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }



    function AltaLocalProducto(prod){
            
    return  $http.post('http://localhost/Labo/ws/local_producto/' + JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }










//BAJA.............
    function BorrarProducto(persona){      
    
      return    $http.delete('http://localhost/Labo/ws/producto/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }
   function BorrarSucursal(persona){      
    
      return    $http.delete('http://localhost/Labo/ws/sucursales/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }

   function BorrarLocalEmpleado(persona){      
    
      return    $http.delete('http://localhost/Labo/ws/local_empleado/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }


   function BorrarLocalProducto(persona){      
    
      return    $http.delete('http://localhost/Labo/ws/local_producto/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }






//MODIFICAR.............
    function ModificarProducto(persona){
            
    return    $http.put('http://localhost/Labo/ws/modificarProd/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }


        function ModificarSucursal(persona){
            
    return    $http.put('http://localhost/Labo/ws/sucursal/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }






        function ModificarLocalEmpleado(persona){
            
    return    $http.put('http://localhost/Labo/ws/local_empleado/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }



        function ModificarLocalProducto(persona){
            
    return    $http.put('http://localhost/Labo/ws/local_producto/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }















   







  })