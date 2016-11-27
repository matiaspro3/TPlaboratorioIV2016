<?php
/*
require 'Slim/Slim.php';
require_once 'app/libs/Array2XML.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

define("SPECIALCONSTANT", true);
require 'app/libs/connect.php';
require 'app/routes/api.php';
include_once '../clases/Personas.php';

$app->run();
*/

header('Access-Control-Allow-Origin: *');  
/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
require 'vendor/autoload.php';

require '../PHP/clases/Usuarios.php';
require '../PHP/clases/Productos.php';
require '../PHP/clases/Empleados.php';
require '../PHP/clases/Sucursales.php';
require '../PHP/clases/Local-Empleado.php';
require '../PHP/clases/Local-Productos.php';

/**
 * Step 2: Instantiate a Slim application
 *

 */
$app = new Slim\App();

/**
 * Step 3: Define the Slim application routes
 *
/**
* GET: Para consultar y leer recursos
* POST: Para crear recursos
* PUT: Para editar recursos
* DELETE: Para eliminar recursos
*
*  GET: Para consultar y leer recursos */

$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

//TRAER LISTA DE OBJETOS
$app->get('/personas[/]', function ($request, $response, $args) {
    $datos = Persona::TraerTodasLasPersonas();
    $response->write(json_encode($datos))   ;//INTERNAL SERVER ERROR 500 -> Porque le es6taba devolviendo una referencia a memoria del servidor (hay que pasar un "string" del objeto transformado a json!!)
    //$response->write("Lista de usuarios");
    
    return $response;
});

$app->get('/usuarios[/]', function ($request, $response, $args) {
    $datos = usuario::TraerTodosLosUsuarios();
    $response->write(json_encode($datos))   ;//INTERNAL SERVER ERROR 500 -> Porque le es6taba devolviendo una referencia a memoria del servidor (hay que pasar un "string" del objeto transformado a json!!)
    //$response->write("Lista de usuarios");
    
    return $response;
});





$app->get('/productos[/]', function ($request, $response, $args) {
    $datos = productos::TraerTodos();
    $response->write(json_encode($datos));    
    return $response;
});




$app->get('/sucursales[/]', function ($request, $response, $args) {
    $datos = sucursales::TraerTodos();
    $response->write(json_encode($datos));    
    return $response;
});


$app->get('/local_empleado[/]', function ($request, $response, $args) {
    $datos = local_empleado::TraerTodos();
    $response->write(json_encode($datos));    
    return $response;
});


$app->get('/local_empleados/{objeto}', function ($request, $response, $args) {
    $idSucu = json_decode($args['objeto']);
    $datos = local_empleado::TraerEmpleados($idSucu);
    $response->write(json_encode($datos))   ;
    
    return $response;
});


$app->get('/empleadosDispo[/]', function ($request, $response, $args) {
 
    $datos = empleados::TraerEmpleadosDisponibles();
    $response->write(json_encode($datos))   ;
    
    return $response;
});





$app->get('/empleados/{objeto}', function ($request, $response, $args) {
    $emple = json_decode($args['objeto']);
    $datos = empleados::TraerUnEmpleado($emple);
    $response->write(json_encode($datos))   ;
    
    return $response;
});


$app->get('/sucursalTraer/{objeto}', function ($request, $response, $args) {
    $sucu = json_decode($args['objeto']);
    $datos = sucursales::TraerUnasucursal($sucu);
    $response->write(json_encode($datos))   ;
    
    return $response;
});
















$app->get('/local_producto[/]', function ($request, $response, $args) {
    $datos = local_producto::TraerTodos();
    $response->write(json_encode($datos));    
    return $response;
});












/* FORMA DE RECIBIR POR PARAMETROS UN OBJETO EN POST

    POST: Para crear recursos */
$app->post('/alta/{objeto}', function ($request, $response, $args) {
    $persona = json_decode($args['objeto']);
  
// mover foto

            if($persona->foto!="pordefecto.png")
            {
                $rutaVieja="../servidor/usuarios/".$persona->foto;
                $rutaNueva="../fotos/".$persona->foto;
                copy($rutaVieja,$rutaNueva);
            }
            $datos = Persona::InsertarPersona($persona);
// mover foto fin

    $response->write($datos);

    return $response;
});

$app->post('/altaUser/{usuario}', function ($request, $response, $args) {
    $persona = json_decode($args['usuario']);
    $datos = usuario::InsertarUser($persona);


    $response->write($datos);

    return $response;
});


$app->post('/altaPrd/{producto}', function ($request, $response, $args) {
    $prod = json_decode($args['producto']);
    $datos = productos::Insertar($prod);


    $response->write($datos);

    return $response;
});



$app->post('/Altasucursal/{sucursalre}', function ($request, $response, $args) {

    $sucu = json_decode($args['sucursalre']);
          // echo 'ola' ;
// mover fotofhtfghfgh
           if($sucu->foto1!="pordefecto.png")
            {
                $rutaVieja="../servidor/sucursales/".$sucu->foto1;
                $rutaNueva="../fotos/sucursales/".$sucu->foto1;
                copy($rutaVieja,$rutaNueva);
           }
         if($sucu->foto2!="pordefecto.png")
            {
                $rutaVieja="../servidor/sucursales/".$sucu->foto2;
                $rutaNueva="../fotos/sucursales/".$sucu->foto2;
                copy($rutaVieja,$rutaNueva);
            }
             if($sucu->foto2!="pordefecto.png")
           {
                $rutaVieja="../servidor/sucursales/".$sucu->foto3;
                $rutaNueva="../fotos/sucursales/".$sucu->foto3;
                copy($rutaVieja,$rutaNueva);
            }
         
// mover foto fin

$datos = sucursales::Insertar($sucu);
  //  $response->write(json_encode($datos));
$response->write(json_encode($datos));

    return $response;
});



$app->post('/local_empleado/{sucursal}', function ($request, $response, $args) {
    $prod = json_decode($args['sucursal']);
    $datos = local_empleado::Insertar($prod);


    $response->write($datos);

    return $response;
});







$app->post('/local_producto/{sucursal}', function ($request, $response, $args) {
    $prod = json_decode($args['sucursal']);
    $datos = local_producto::Insertar($prod);


    $response->write($datos);

    return $response;
});

















// /* PUT: Para editar recursos */
$app->put('/modificarPerson/{objeto}', function ($request, $response, $args) {
    $persona = json_decode($args['objeto']);
    $datos = Persona::ModificarPersona($persona);
    $response->write($datos);
    //var_dump($args);
    return $response;
});
$app->put('/modificarUser/{objeto}', function ($request, $response, $args) {
    $usuario = json_decode($args['objeto']);
    $datos = usuario::ModificarUser($usuario);
    $response->write($datos);
    //var_dump($args);
    return $response;
});


$app->put('/modificarProd/{objeto}', function ($request, $response, $args) {
    $prod = json_decode($args['objeto']);
    $datos = productos::Modificar($prod);
    $response->write($datos);
    //var_dump($args);
    return $response;
});




$app->put('/sucursal/{objeto}', function ($request, $response, $args) {
    $prod = json_decode($args['objeto']);
    $datos = sucursales::Modificar($prod);
    $response->write($datos);
    //var_dump($args);
    return $response;
});


$app->put('/local_empleado/{objeto}', function ($request, $response, $args) {
    $prod = json_decode($args['objeto']);
    $datos = local_empleado::Modificar($prod);
    $response->write($datos);
    //var_dump($args);
    return $response;
});


$app->put('/local_producto/{objeto}', function ($request, $response, $args) {
    $prod = json_decode($args['objeto']);
    $datos = local_producto::Modificar($prod);
    $response->write($datos);
    //var_dump($args);
    return $response;
});
















// /* DELETE: Para eliminar recursos */
$app->delete('/personas/{id}', function ($request, $response, $args) {
   
   $obje=Persona::TraerUnaPersona($args['id'])   ;

        if($obje->foto!="pordefecto.png")
            {
                unlink("../fotos/".$obje->foto);
            }

       
$datos = Persona::BorrarPersona($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});



$app->delete('/usuario/{id}', function ($request, $response, $args) {
   
  /* //si pide foto 
   $obje=Persona::TraerUnaPersona($args['id'])   ;

  
        if($obje->foto!="pordefecto.png")
            {
                unlink("../fotos/".$obje->foto);
            }
*/
       
$datos = usuario::BorrarUser($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});



$app->delete('/producto/{id}', function ($request, $response, $args) {
        
$datos = productos::Borrar($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});



$app->delete('/sucursales/{id}', function ($request, $response, $args) {
        
$datos = sucursales::Borrar($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});





$app->delete('/local_empleado/{id}', function ($request, $response, $args) {
        
$datos = local_empleado::Borrar($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});




$app->delete('/local_producto/{id}', function ($request, $response, $args) {
        
$datos = local_producto::Borrar($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});





/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();
