<?php
require_once"accesoDatos.php";
require_once"Productos.php";
require_once"Sucursales.php";
class local_producto
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $id_prod;
	public $produDir;
	public $fotoProd1;
	public $fotoProd2;
	public $fotoProd3;
	public $oferta;
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
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from local_producto where id_prod =:id");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");
		$consulta->bindValue(':id', $idParametro, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('local_producto');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodos()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta(
	 /*" select  id_prod  from local_producto");*/
	    	"select A.id_prod,
				  A.produDir,
				  A.fotoProd1,
				  A.fotoProd2,
				  A.fotoProd3,
				  A.oferta,
				  B.id_sucu,
				  B.localDir,
				  B.fotoLocal1,
				  B.fotoLocal2,
				  B.fotoLocal3,
				  C.comprada
			from productos A , sucursales B, local_producto C
			where A.id_prod = C.id_prod
			and   B.id_sucu = C.id_local
         ");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "local_producto");	
		return $arrPersonas;
	}
	
	public static function Borrar($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from local_producto WHERE id-prod=:id");	
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function Modificar($producto)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update local-producto
				set id-prod=:id-prod,
				id-local =:id-local,			
				comprada=:comprada
				WHERE id-prod=:id");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

			//$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:direccion,:apellido,:foto)");
		
		$consulta->bindValue(':id-prod', $producto->id_producto, PDO::PARAM_STR);
		$consulta->bindValue(':id-local', $producto->id_local, PDO::PARAM_STR);
		$consulta->bindValue(':foto1', $producto->foto1, PDO::PARAM_STR);
		$consulta->bindValue(':comprada', $producto->comprada, PDO::PARAM_STR);

			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function Insertar($producto)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into local_producto (id-prod,id-local,comprada)values(:id-prod,:id-local,:comprada)");
		$consulta->bindValue(':id-prod', $producto->id_producto, PDO::PARAM_STR);
		$consulta->bindValue(':id-local', $producto->id_local, PDO::PARAM_STR);
		$consulta->bindValue(':comprada', $producto->comprada, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//
}