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
    }

  });



app.filter('filtroOferta', function () {
   var pass = {
       0 : 'Actualmente sin Oferta.',
       1 : 'Prodiedad en Oferta.'    
      
    }
   return function (input) {
        if (!input)
        return 'Actualmente sin Oferta.';
    return pass[input];
    }

  });

