<?php
require_once"AccesoDatos.php";
class local_empleado
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_emple;
	public $nombre;
	public $legajo;
	public $cargo;
	public $id_sucu;
	public $localDir;
	public $fotoLocal1;
	public $fotoLocal2;
	public $fotoLocal3;
	public $comprada;


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
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from local_empleado where id-emple =:id");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('local_empleado');
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
	public static function TraerEmpleados($id)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta(
			/*"select * 	from local_empleado
			where  id_local = :id_local
*/
				"select A.id_emple,
				  A.nombre,
				  A.legajo,
				  A.cargo
				
			from empleados A ,  local_empleado C
			where   C.id_local = :id_local
			and A.id_emple = C.id_emple
         ");
       
	$consulta->bindValue(':id_local', $id,PDO::PARAM_INT);
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "local_empleado");	
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

	public static function Insertar($id)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into local_empleado (id_emple,id_local)values(:id_emple,:id_local)");
		$consulta->bindValue(':id_emple', $id->emple, PDO::PARAM_STR);
		$consulta->bindValue(':id_local', $id->sucu, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//
}