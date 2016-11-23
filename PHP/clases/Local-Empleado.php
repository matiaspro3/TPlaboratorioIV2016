<?php
require_once"accesoDatos.php";
class local_empleado
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_emple;
	public $id_local;
	


//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS

//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	
//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnProducto($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from local-empleado where id-emple =:id");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('local_empleado');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from local-empleado");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "local_empleado");	
		return $arrPersonas;
	}
	
	public static function Borrar($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from local-empleado WHERE id-emple=:id");	
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
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into local-empleado (id-emple,id-local)values(:id-emple,:id-local)");
		$consulta->bindValue(':id-emple', $producto->id_emple, PDO::PARAM_STR);
		$consulta->bindValue(':id-local', $producto->id_local, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//
}