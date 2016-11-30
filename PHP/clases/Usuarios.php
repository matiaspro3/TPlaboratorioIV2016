<?php
require_once"AccesoDatos.php";
class usuario
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $usuario;
	public $dni;
 	public $password;
  	public $partido;
  	public $foto;


//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y S
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR

//--------------------------------------------------------------------------------//
//--TOSTRING	
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnUser($usuario) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		//$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where usuario =:usuario");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");

		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where usuario =:usuario and email=:email and password=:password ");
		$consulta->bindValue(':usuario', $usuario->usuario, PDO::PARAM_INT);
		$consulta->bindValue(':email', $usuario->email, PDO::PARAM_INT);
		$consulta->bindValue(':password', $usuario->password, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('usuario');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodosLosUsuarios()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "usuario");	
		return $arrPersonas;
	}
	
	public static function BorrarUser($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from usuarios	WHERE id=:id");	
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarUser($idParametro)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			$consulta =$objetoAccesoDato->RetornarConsulta("
				update usuarios 
				set usuario=:nombre,
				email=:email,
				password=:pass,
				perfil = :tipo,
				estado = :estado
				WHERE id=:id");
		//	$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();*/ 
		//	$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:nombre,:apellido,:foto)");
			$consulta->bindValue(':id',$idParametro->id, PDO::PARAM_INT);
			$consulta->bindValue(':nombre',$idParametro->usuario, PDO::PARAM_STR);
			$consulta->bindValue(':email', $idParametro->email, PDO::PARAM_STR);
			$consulta->bindValue(':pass', $idParametro->password, PDO::PARAM_STR);
			$consulta->bindValue(':estado', $idParametro->estado, PDO::PARAM_STR);
			$consulta->bindValue(':tipo', $idParametro->perfil, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarUser($user)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into usuarios (usuario,email,password,perfil)values(:usuario,:email,:password,:perfil)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarPersona (:usuario,:dni,:password,:partido,:foto)");

		$consulta->bindValue(':usuario', $user->usuario, PDO::PARAM_STR);
		$consulta->bindValue(':email',$user->email, PDO::PARAM_STR);
		$consulta->bindValue(':password', $user->password, PDO::PARAM_STR);
	$consulta->bindValue(':perfil',$user->perfil, PDO::PARAM_STR);
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//



}
