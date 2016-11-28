<?php
require_once"accesoDatos.php";
class sucursales
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_sucu;
	public $localDir;
	public $fotoLocal1;
	public $fotoLocal2;
	public $fotoLocal3;

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS

//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	
//--------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnasucursal($idParametro) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from sucursales where localDir =:id");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('sucursales');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from sucursales");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "sucursales");	
		return $arrPersonas;
	}
	
	public static function Borrar($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from sucursales WHERE id-sucu=:id");	
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function Modificar($sucursal)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update sucursales
				set fotoLocal1=:fotoLocal1,
				fotoLocal2=:fotoLocal2,
				fotoLocal3=:fotoLocal3
				WHERE id_sucu=:id");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:localDir,:apellido,:foto)");
		
		$consulta->bindValue(':id', $sucursal->idMuestras, PDO::PARAM_STR);
		
		$consulta->bindValue(':fotoLocal2', $sucursal->fotoLocal2, PDO::PARAM_STR);
		$consulta->bindValue(':fotoLocal3', $sucursal->fotoLocal3, PDO::PARAM_STR);
		$consulta->bindValue(':fotoLocal1', $sucursal->fotoLocal1, PDO::PARAM_STR);

			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function Insertar($sucursal)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into sucursales (localDir,fotoLocal1,fotoLocal2,fotoLocal3)values(:direccion,:foto1,:foto2,:foto3)");
		$consulta->bindValue(':direccion', $sucursal->direccion, PDO::PARAM_STR);
		$consulta->bindValue(':foto1', $sucursal->foto1, PDO::PARAM_STR);
		$consulta->bindValue(':foto2', $sucursal->foto2, PDO::PARAM_STR);
		$consulta->bindValue(':foto3', $sucursal->foto3, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//	
}