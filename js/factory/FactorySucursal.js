angular
  .module('abmapp')
  .factory('factorySucursal', function (servicioABM) {
    var objeto = {};
    objeto.TraerTodos = TraerTodos;
    objeto.Borrar = Borrar;
    objeto.Alta = Alta;
    objeto.TraerSucursal = TraerSucursal;
    objeto.Modificar = Modificar;
    

    return objeto;


    function TraerTodos(){
      return servicioABM.CargarSucursales();
    }
  
    function TraerSucursal(sucu){
      return servicioABM.TraerSucursal(sucu);
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