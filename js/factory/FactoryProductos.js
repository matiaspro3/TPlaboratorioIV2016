angular
  .module('abmapp')
  .factory('factoryProductos', function (servicioABM) {
    var objeto = {};
    objeto.TraerTodos = TraerTodos;
    objeto.Borrar = Borrar;
    objeto.Alta = Alta;
    objeto.Modificar = Modificar;
    objeto.TraerDisponibles=TraerDisponibles;
    objeto.TraerProducto=TraerProducto;

    return objeto;


    function TraerTodos(){
      return servicioABM.CargarProductos();
    }
  
    function TraerDisponibles(){
      return servicioABM.CargarProductosDisponibles();
    }
    function TraerProducto(prod){
      return servicioABM.TraerProducto(prod);
    }

 function Borrar(producto){
       return servicioABM.BorrarProducto(producto);
    }


 function Alta(producto){
       return servicioABM.AltaProductos(producto);
    }


 function Modificar(producto){
       return servicioABM.ModificarProducto(producto);
    }



  })