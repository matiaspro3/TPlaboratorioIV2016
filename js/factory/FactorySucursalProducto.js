angular
  .module('abmapp')
  .factory('factorySucursalProducto', function (servicioABM) {
    var objeto = {};
    objeto.TraerTodos = TraerTodos;
        objeto.TraerTodosSucu = TraerTodosSucu;
    objeto.Borrar = Borrar;
    objeto.Alta = Alta;
    objeto.Modificar = Modificar;
    

    return objeto;


    function TraerTodos(){
      return servicioABM.CargarSucursalProductos();
    }
  
    function TraerTodosSucu(sucu){
      return servicioABM.CargarSucursalProductosAlgunos(sucu);
    }

 function Alta(producto){
       return servicioABM.AltaLocalProducto(producto);
    }


 function Borrar(producto){
       return servicioABM.BorrarLocalProducto(producto);
    }


 function Modificar(producto){
       return servicioABM.ModificarLocalProducto(producto);
    }



  })