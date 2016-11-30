<?php
require_once"AccesoDatos.php";
class productos
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_prod;
	public $produDir;
	public $fotoProd1;
	public $fotoProd2;
	public $fotoProd3;
	public $precio;
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
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from productos where produDir =:produDir");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':produDir', $idParametro, PDO::PARAM_INT);
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
		public static function TraerDisponibles()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta(
		"select   A.id_prod,
				  A.produDir,
				  A.fotoProd1,
				  A.fotoProd2,
				  A.fotoProd3,
				  A.precio,
				  A.oferta
			from productos A
           

			where id_prod not in  ( select id_prod from local_producto)


         ");
       
	
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "empleados");	
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
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into productos (produDir,fotoProd1,fotoProd2,fotoProd3,precio,oferta)values(:produDir,:fotoProd1,:fotoProd2,:fotoProd3,:precio,:oferta)");
		$consulta->bindValue(':produDir', $producto->produDir, PDO::PARAM_STR);
		$consulta->bindValue(':fotoProd1', $producto->fotoProd1, PDO::PARAM_STR);
		$consulta->bindValue(':fotoProd2', $producto->fotoProd2, PDO::PARAM_STR);
		$consulta->bindValue(':fotoProd3', $producto->fotoProd3, PDO::PARAM_STR);
		$consulta->bindValue(':precio', $producto->precio, PDO::PARAM_STR);
		$consulta->bindValue(':oferta', $producto->oferta, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//
}