<?php
require_once"accesoDatos.php";
class empleados
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_emple;
	public $nombre;
	public $legajo;
	public $cargo;


//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS

//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	
//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnEmpleado($para) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from empleados where legajo =:legajo");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':legajo', $para, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('empleados');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta(
			/*"select * from local_empleado");*/
				"select A.id_emple,
				  A.nombre,
				  A.legajo,
				  A.cargo,
				  B.id_sucu,
				  B.localDir,
				  B.fotoLocal1,
				  B.fotoLocal2,
				  B.fotoLocal3
			from empleados A , sucursales B, local_empleado C
			where A.id_emple = C.id_emple
			and   B.id_sucu = C.id_local
         ");

		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "local_empleado");	
		return $arrPersonas;
	}
	public static function TraerEmpleadosDisponibles()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta(
		"select A.id_emple,
				  A.nombre,
				  A.legajo,
				  A.cargo				
			from empleados A 

			where id_emple not in  ( select id_emple from local_empleado)




         ");
       
	
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "empleados");	
		return $arrPersonas;
	}
	public static function Borrar($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from local_empleado WHERE id-emple=:id");	
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function Modificar($producto)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update local-empleado
				set id-emple:id-emple,
				id-local =:id-local,			
				WHERE id-prod=:id");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:direccion,:apellido,:foto)");
		
		$consulta->bindValue(':id-emple', $producto->id_emple, PDO::PARAM_STR);
		$consulta->bindValue(':id-local', $producto->id_local, PDO::PARAM_STR);
		return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function Insertar($producto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into local_empleado (id-emple,id-local)values(:id-emple,:id-local)");
		$consulta->bindValue(':id-emple', $producto->id_emple, PDO::PARAM_STR);
		$consulta->bindValue(':id-local', $producto->id_local, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//
}