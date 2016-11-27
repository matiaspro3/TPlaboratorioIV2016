angular
  .module('abmapp')
  .factory('factorySucursalEmpleado', function (servicioABM) {
    var objeto = {};
    objeto.TraerTodos = TraerTodos;
    objeto.TraerEmpleados = TraerEmpleados;
    objeto.Borrar = Borrar;
    objeto.Alta = Alta;
    objeto.Modificar = Modificar;
    

    return objeto;


    function TraerTodos(){
      return servicioABM.CargarSucursalEmpleado();
    }
  
    function TraerEmpleados(emple){
      return servicioABM.CargarSucursalEmpleadoS(emple);
    }

    function TraerTodos(){
      return servicioABM.CargarSucursalEmpleado();
    }
 function Alta(producto){
       return servicioABM.AltaLocalEmpleado(producto);
    }


 function Borrar(producto){
       return servicioABM.BorrarLocalEmpleado(producto);
    }


 function Modificar(producto){
       return servicioABM.ModificarLocalEmpleado(producto);
    }



  })