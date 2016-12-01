
//var app = angular.module('abmapp', ['ui.router','abmapp.factoryPersona', 'abmapp.servicioABM','abmapp.controllersPersona', 'abmapp.controllersUsuario', 'satellizer', 'angularFileUpload', 'validation.match']);
var app = angular.module('abmapp', [
  'ui.router','ngMap',
  'angularSpinners',
  'highcharts-ng',
   , 'abmapp.controllersUsuario'
  , 'abmapp.controllersProducto'
  , 'satellizer'
  , 'angularFileUpload'
  , 'validation.match'

  ]);
app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  
  $authProvider.loginUrl = 'labo2/PHP/auth.php'; //Ruta del archivo auth que esta en jwt y direcciona a PHP
  $authProvider.tokenName = 'tokenTP'; //nombre largo
  $authProvider.tokenPrefix = 'Aplicacion'; //sarasa
  $authProvider.authHeader = 'data';

  $authProvider.github({
      clientId: '08fc74e99837e2f15086',
      url: '/auth/github',
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      redirectUri: window.location.origin,
      optionalUrlParams: ['scope'],
      scope: ['user:email'],
      scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: { width: 1020, height: 618 }
    });

  $stateProvider
 
      .state('inicio', {
                url : '/inicio',
                cache:false,
                templateUrl : 'vistas/inicio.html',
                controller : 'controlInicio'
            })



      .state('usuario', {
                url : '/usuario',
                abstract:true,
                       cache:false,
                templateUrl : 'vistas/abstractaUsuario.html',
                controller : 'controlUsuario'
            })


      .state('usuario.menu', {
                url: '/usermenu',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioMenu.html',
                        controller : 'controlUsuarioMenu'
                    }
                }
            })
      .state('usuario.login', {
                url: '/login',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioLogin.html',
                        controller : 'controlUsuarioLogin'
                    }
                }
            })
      .state('usuario.registrarse', {
                url: '/registrarse',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioRegistrarse.html',
                        controller : 'controlUsuarioRegistrarse'
                    }
                }
            })

      .state('usuario.modificar', {
                      url: '/ModificarUser',
                             cache:false,
                              params: {
                  objUser: null
                },
                      views: {
                          'contenido': {
                              templateUrl: 'vistas/usuarioRegistrarseMOD.html',
                              controller : 'usuarioRegistrarseMOD'
                          }
                      }
                  })

    .state('usuario.grilla', {
                url: '/grilla',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioGrilla.html',
                        controller : 'controlUsuarioGrilla'
                    }
                }
            })



    .state('productosGrilla', {
                    url : '/productosGrilla',
                    cache:false,
                    templateUrl : 'vistas/productosGrilla.html',
                    controller : 'controlProductosGrilla'
                })
  .state('productoAlta', {
                    url : '/productosAlta',
                    cache:false,
                    templateUrl : 'vistas/productoAlta.html',
                    controller : 'controlProductosAlta'
                })


      .state('productoMOD', {
                      url: '/ModificarProdu',
                             cache:false,
                          templateUrl: 'vistas/productoMOD.html',
                              controller : 'controlProductoMOD'
                                })



  .state('productoVer', {
                      url: '/VerProducto',
                             cache:false,
                              params: {
                  objUser: null
                },
                     
                              templateUrl: 'vistas/productoVer.html',
                              controller : 'controlProduVer'
                     
                  })

   .state('sucursalAlta', {
                url : '/altaSucursal',
                cache:false,
                templateUrl : 'vistas/sucursalAlta.html',
                controller : 'controlSucursalAlta'
            })

 

    .state('sucursalesGrilla', {
                    url : '/sucursalesGrilla',
                    cache:false,
                    templateUrl : 'vistas/sucursalesGrilla.html',
                    controller : 'controlSucursalesGrilla'
                })


  .state('sucursalVer', {
                      url: '/VerSucu',
                             cache:false,
                              params: {
                  objUser: null
                },
                     
                              templateUrl: 'vistas/sucursalVer.html',
                              controller : 'controlSucuVer'
                     
                  })


      .state('sucursalMOD', {
                      url: '/ModificarSucu',
                             cache:false,
                                   templateUrl: 'vistas/sucursalMOD.html',
                              controller : 'controlSucursalMOD'
                                })


      .state('empleadoAlta', {
                      url: '/AltaEmple',
                             cache:false,
                                   templateUrl: 'vistas/empleadoAlta.html',
                              controller : 'controlEmpleadoAlta'
                                })


 .state('sucursalModificar', {
                      url: '/Sucumodi',
                             cache:false,
                              params: {
                  objUser: null
                },
                     
                              templateUrl: 'vistas/sucursalModificar.html',
                              controller : 'controlSucuModificar'
                     
                  })





      .state('empleadoMOD', {
                      url: '/ModificarEmple',
                             cache:false,
                                        params: {
                  objUser: null
                },
                                   templateUrl: 'vistas/empleadoMOD.html',
                              controller : 'controlEmpleadoMOD'
                                })


      .state('empleadoGrilla', {
                      url: '/GrillaEmple',
                             cache:false,
                                   templateUrl: 'vistas/empleadoGrilla.html',
                              controller : 'controlEmpleadoGrilla'
                                })

  .state('pedidos', {
                    url : '/pedidos',
                    cache:false,
                    templateUrl : 'vistas/pedidos.html',
                    controller : 'controlPedidos'
                })

 .state('graficos', {
                    url : '/graficos',
                    cache:false,
                    templateUrl : 'vistas/graficos.html',
                    controller : 'controlGraficos'
                })
  .state('encuesta', {
                    url : '/encuesta',
                    cache:false,
                     params: {
                  obj: null
                },
                    templateUrl : 'vistas/encuesta.html',
                    controller : 'controlEncuesta'
                })





             $urlRouterProvider.otherwise('/inicio');
});

