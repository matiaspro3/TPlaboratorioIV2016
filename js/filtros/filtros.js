angular.module('abmapp.filtros', []) 
  
  app.filter('filtroPerfil', function () {
   var perfil = {
      'admin': 'Administrador',
      'enca' : 'Encargado',
      'emple': 'Empleado',
      'clien': 'Cliente'
    }
   return function (input) {
        if (!input)
        return '';
    return perfil[input];
    }

});
app.filter('filtroPass', function () {
   var pass = {
      ' ': '****'
    
      
    }
   return function (input) {
        if (!input)
        return '';
    return pass[input];
    };





  });
