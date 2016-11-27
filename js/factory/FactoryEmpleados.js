angular
  .module('abmapp')
  .factory('factoryEmpleado', function (servicioABM) {
    var objeto = {};
    objeto.TraerTodos = TraerTodos;
    objeto.Borrar = Borrar;
    objeto.Alta = Alta;

objeto.TraerEmpleado = TraerEmpleado;
        objeto.TraerDisponibles = TraerDisponibles;
    objeto.Modificar = Modificar;
    

    return objeto;


    function TraerDisponibles(){
      return servicioABM.CargarEmpleadosDisponibles();
    }
  
function TraerEmpleado(emple){
      return servicioABM.TraerEmpleado(emple);
    }
  


    function TraerTodos(){
      return servicioABM.CargarSucursales();
    }
  

 function Alta(producto){
       return servicioABM.AltaSucursales(producto);
    }


 function Borrar(producto){
       return servicioABM.BorrarSucursal(producto);
    }


 function Modificar(producto){
       return servicioABM.ModificarSucursal(producto);
    }



  })
