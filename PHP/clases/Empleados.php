<?php
require_once"AccesoDatos.php";
class empleados
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_emple;
	public $nombre;
	public $legajo;
	public $cargo;
	public $estado;

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
	

public static function TraerTodosTodos() 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from empleados");
	    $consulta->execute();
	  $arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "empleados");	
		return $arrPersonas;	
					
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
	
	public static function Modificar($emple)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update empleados
				set cargo = :cargo,
				estado=:estado			
				WHERE id_emple=:id_emple");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:direccion,:apellido,:foto)");
		
		$consulta->bindValue(':id_emple', $emple->id_emple, PDO::PARAM_STR);
		$consulta->bindValue(':estado', $emple->estado, PDO::PARAM_STR);
		$consulta->bindValue(':cargo', $emple->cargo, PDO::PARAM_STR);
		
		return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function Insertar($empleado)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into empleados (nombre,legajo,cargo)values(:nombre,:legajo,:cargo)");
		$consulta->bindValue(':cargo', $empleado->perfil, PDO::PARAM_STR);
		$consulta->bindValue(':legajo', $empleado->legajo, PDO::PARAM_STR);
		$consulta->bindValue(':nombre', $empleado->nombre, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//
}
