angular.module('abmapp')
.service('servicioABM', function($timeout,$http) {
    this.Nombre = "Servicio ABM";
   this.CargarProductos = CargarProductos;
    this.CargarSucursales = CargarSucursales;
    this.CargarSucursalEmpleado = CargarSucursalEmpleado;
    this.CargarSucursalEmpleadoS = CargarSucursalEmpleadoS;
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

 this.CargarEmpleadosDisponibles = CargarEmpleadosDisponibles;
  this.TraerEmpleado = TraerEmpleado; 
  this.TraerSucursal = TraerSucursal;

 this.CargarProductosDisponibles = CargarProductosDisponibles;
this.TraerProducto = TraerProducto;
this.CargarSucursalProductosAlgunos = CargarSucursalProductosAlgunos;
this.TraerEmpleados = TraerEmpleados;
this.AltaEmpleado = AltaEmpleado;

this.ModificarEmple = ModificarEmple;
  
//TRAER TODOS.............
    function CargarProductos(){
      
          return $http.get('http://localhost/labo2/ws/productos')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }
  
function CargarSucursales(){
            
    return $http.get('http://localhost/labo2/ws/sucursales')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }
  

function CargarSucursalEmpleado(){
      
          return $http.get('http://localhost/labo2/ws/local_empleado')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }




function CargarSucursalEmpleadoS(emple){
      
          return $http.get('http://localhost/labo2/ws/local_empleados/' + JSON.stringify(emple))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }







function CargarEmpleadosDisponibles(){
      
          return $http.get('http://localhost/labo2/ws/empleadosDispo')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }

function CargarProductosDisponibles(){
      
          return $http.get('http://localhost/labo2/ws/productosDispo')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }




function TraerEmpleado(emple){
      
          return $http.get('http://localhost/labo2/ws/empleados/' + JSON.stringify(emple))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }

function TraerEmpleados(){
      
          return $http.get('http://localhost/labo2/ws/empleadosTodos')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }




function TraerSucursal(sucu){
      
          return $http.get('http://localhost/labo2/ws/sucursalTraer/' + JSON.stringify(sucu))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }



function TraerProducto(sucu){
      
          return $http.get('http://localhost/labo2/ws/productoTraer/' + JSON.stringify(sucu))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }









function CargarSucursalProductosAlgunos(prod){
      
          return $http.get('http://localhost/labo2/ws/local_productosAlgunos/'+ JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }







function CargarSucursalProductos(){
      
          return $http.get('http://localhost/labo2/ws/local_producto')
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
        )

    }







  //ALTA.............

    function AltaProductos(prod){
            
    return  $http.post('http://localhost/labo2/ws/altaPrd/' + JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }


    function AltaEmpleado(emple){
            
    return  $http.post('http://localhost/labo2/ws/altaEmple/' + JSON.stringify(emple))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }




    function AltaSucursales(prod){
    //      var reci= JSON.stringify(prod)
      //      console.info('recivo slim',reci);
    return  $http.post('http://localhost/labo2/ws/Altasucursal/' + JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }


    function AltaLocalEmpleado(sucu){
            
    return  $http.post('http://localhost/labo2/ws/local_empleado/' + JSON.stringify(sucu))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }



    function AltaLocalProducto(prod){
            
    return  $http.post('http://localhost/labo2/ws/local_producto/' + JSON.stringify(prod))
    .then(function(respuesta) {       
      
    return respuesta.data;
      },function errorCallback(response) {
           return response;  }
      )
    }










//BAJA.............
    function BorrarProducto(persona){      
    
      return    $http.delete('http://localhost/labo2/ws/producto/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }
   function BorrarSucursal(persona){      
    
      return    $http.delete('http://localhost/labo2/ws/sucursales/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }

   function BorrarLocalEmpleado(persona){      
    
      return    $http.delete('http://localhost/labo2/ws/local_empleado/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }


   function BorrarLocalProducto(persona){      
    
      return    $http.delete('http://localhost/labo2/ws/local_producto/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
          return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
               }
      )
    }






//MODIFICAR.............
    function ModificarProducto(persona){
            
    return    $http.put('http://localhost/labo2/ws/modificarProd/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }


        function ModificarSucursal(persona){
            
    return    $http.put('http://localhost/labo2/ws/sucursal/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }


   function ModificarEmple(emple){
            
    return    $http.put('http://localhost/labo2/ws/modificarEmple/' + JSON.stringify(emple))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }



        function ModificarLocalEmpleado(persona){
            
    return    $http.put('http://localhost/labo2/ws/local_empleado/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }



        function ModificarLocalProducto(persona){
            
    return    $http.put('http://localhost/labo2/ws/local_productoComprar/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      
      },function errorCallback(response) {
           return response; 
             }   
   )
    }















   







  })