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
      return servicioABM.TraerEmpleados();
    }
  

 function Alta(emple){
       return servicioABM.AltaEmpleado(emple);
    }


 function Borrar(producto){
       return servicioABM.BorrarSucursal(producto);
    }


 function Modificar(emple){
       return servicioABM.ModificarEmple(emple);
    }



  })
