<?php
require_once"accesoDatos.php";
class productos
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_producto;
	public $direccion;
	public $foto1;
	public $foto2;
	public $foto3;
	public $oferta;

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
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from productos where id-prod =:id");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('productos');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from productos");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "productos");	
		return $arrPersonas;
	}
	
	public static function Borrar($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from productos WHERE id-prod=:id");	
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function Modificar($producto)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update productos
				set direccion=:direccion,
				foto1=:foto1,
				foto2=:foto2,
				foto3=:foto3,
				oferta=:oferta
				WHERE id-prod=:id");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:direccion,:apellido,:foto)");
		
		$consulta->bindValue(':id', $producto->id, PDO::PARAM_STR);
		$consulta->bindValue(':direccion', $producto->direccion, PDO::PARAM_STR);
		$consulta->bindValue(':foto2', $producto->foto2, PDO::PARAM_STR);
		$consulta->bindValue(':foto3', $producto->foto3, PDO::PARAM_STR);
		$consulta->bindValue(':foto1', $producto->foto1, PDO::PARAM_STR);
		$consulta->bindValue(':oferta', $producto->oferta, PDO::PARAM_STR);

			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function Insertar($producto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into productos (direccion,foto1,foto2,foto3)values(:direccion,:foto1,:foto2,:foto3)");
		$consulta->bindValue(':direccion', $producto->direccion, PDO::PARAM_STR);
		$consulta->bindValue(':foto1', $producto->foto1, PDO::PARAM_STR);
		$consulta->bindValue(':foto2', $producto->foto2, PDO::PARAM_STR);
		$consulta->bindValue(':foto3', $producto->foto3, PDO::PARAM_STR);
		$consulta->bindValue(':oferta', $producto->oferta, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//
}