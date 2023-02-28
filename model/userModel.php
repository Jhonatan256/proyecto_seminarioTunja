<?php

class Usuario
{

	//Variable de conexiòn
	private $pdo;
	//Declaración de variables
	private $idUsuario;
	private $tipoDocumento;
	private $numeroDocumento;
	private $primerNombre;
	private $segundoNombre;
	private $primerApellido;
	private $segundoApellido;
	private $telefono;
	private $direccion;
	private $email;
	private $clave;
	private $estado;

	private $codRol;


	//Método Constructor
	public function __construct()
	{
		//Inicializamos la conexión
		$this->pdo = BaseDatos::Conectar();

		
	}

	//Métodos GETTERS and SETTERS
	public function getIdUsuario(): ?int
	{
		return $this->idUsuario;
	}

	public function setIdUsuario(int $idUsuario)
	{
		$this->idUsuario = $idUsuario;
		return $this;
	}
	
	
	public function getTipoDocumento() :?string
	{
		return $this->tipoDocumento;
	}

	public function setTipoDocumento(string $tipoDocumento)
	{
		$this->tipoDocumento = $tipoDocumento;
		return $this;
	}


	public function getNumeroDocumento() :?string
	{
		return $this->numeroDocumento;
	}


	public function setNumeroDocumento(string $numeroDocumento)
	{
		$this->numeroDocumento = $numeroDocumento;
		return $this;
	}


	public function getPrimerApellido() :?string
	{
		return $this->primerApellido;
	}


	public function setPrimerApellido(string $primerApellido)
	{
		$this->primerApellido = $primerApellido;
		return $this;
	}


	public function getSegundoApellido(): ?string
	{
		return $this->segundoApellido;
	}


	public function setSegundoApellido(string $segundoApellido)
	{
		$this->segundoApellido = $segundoApellido;
		return $this;
	}


	public function getPrimerNombre(): ?string
	{
		return $this->primerNombre;
	}


	public function setPrimerNombre(string $primerNombre)
	{
		$this->primerNombre = $primerNombre;
		return $this;
	}


	public function getSegundoNombre() :?string
	{
		return $this->segundoNombre;
	}


	public function setSegundoNombre(string $segundoNombre)
	{
		$this->segundoNombre = $segundoNombre;
		return $this;
	}


	public function getTelefono()
	{
		return $this->telefono;
	}


	public function setTelefono(string $telefono)
	{
		$this->telefono = $telefono;
		return $this;
	}

	public function getDireccion() :?string
	{
		return $this->direccion;
	}



	public function setDireccion(string $direccion)
	{
		$this->direccion = $direccion;
		return $this;
	}



	public function getEmail(): ?string
	{
		return $this->email;
	}


	public function setEmail(string $email)
	{
		$this->email = $email;
		return $this;
	}


	public function getClave(): ?string
	{
		return $this->clave;
	}


	public function setClave(string $clave)
	{
		$this->clave = $clave;
		return $this;
	}

	public function getEstado():?string
	{
		return $this->estado;
	}


	public function setEstado(string $estado)	{
		$this->estado = $estado;
		return $this;
	}


	public function getCodRol(): ?int
	{
		return $this->codRol;
	}

	public function setCodRol(int $codRol)
	{
		$this->codRol = $codRol;
		return $this;
	}

	//Método para crear una usuario

	

	//Método para listar usuario estudiante
	public function listUserStudents()
	{
		try {

			$sql = $this->pdo->prepare("SELECT tipoDocumento,numeroDocumento,primerNombre,primerApellido,telefono,direccion,email,clave,estado FROM usuario WHERE codRol=3;");
			$sql->execute();
			
			return $sql->fetchAll();		
		} catch (Exception $e) {
			die($e->getMessage());
		} //Fin try-catch
	}




	public function Obtener($idUsuario)
	{
		try {
			$consulta = $this->pdo->prepare("SELECT * FROM usuario WHERE idUsuario=?;");
			$consulta->execute(array($idUsuario));
			$r = $consulta->fetch();
			$usu = new Usuario();
				$usu->setIdUsuario($r->idUsuario);
								$usu->setTipoDocumento($r->tipoDocumento);
								$usu->setNumeroDocumento($r->numeroDocumento);
								$usu->setPrimerNombre($r->primerNombre);
								$usu->setSegundoNombre($r->segundoNombre);
								$usu->setPrimerApellido($r->primerApellido);
								$usu->setSegundoApellido($r->segundoApellido);
								$usu->setTelefono($r->telefono);
								$usu->setDireccion($r->direccion);
								$usu->setEmail($r->email);
								$usu->setClave($r->clave);
								$usu->setEstado($r->estado);
								$usu->setClave($r->clave);
								

			return $usu;
		} catch (Exception $e) {
			die($e->getMessage());
		}
	}


	//Método para listar usuario profesor
	public function listUserTeacher()
	{
		try {

			$sql = $this->pdo->prepare("SELECT tipoDocumento,numeroDocumento,primerNombre,primerApellido,telefono,direccion,email,clave,estado FROM usuario WHERE codRol=2;");
			$sql->execute();

			return $sql->fetchAll();
		} catch (Exception $e) {
			die($e->getMessage());
		} //Fin try-catch
	}



	
	//Método para borrar usuario

	public function dropUser(){

		try {

			$sql = $this->pdo->prepare("DELETE * FROM usuario ;");
			$sql->execute();

			return $sql->fetchAll();
		} catch (Exception $e) {
			die($e->getMessage());
		} //Fin try-catch
	}

	
	public function Insertar(Usuario $usu){

		try{

			$sql = "INSERT INTO usuario (idUsuario,tipoDocumento, numeroDocumento, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, clave, estado, codRol) 
			VALUES (NULL,?,?,?,NULL,?,?,?,NULL,?,NULL,?,?);";
echo var_dump($sql);

			$this->pdo->prepare($sql)
				->execute(array(
								$usu->getIdUsuario(),
								$usu->getTipoDocumento(),
								$usu->getNumeroDocumento(),
								$usu->getPrimerNombre(),
								$usu->getSegundoNombre(),
								$usu->getPrimerApellido(),
								$usu->getSegundoApellido(),
								$usu->getTelefono(),
								$usu->getDireccion(),
								$usu->getEmail(),
								$usu->getClave(),
								$usu->getEstado(),
								$usu->getClave(),
								$usu->getCodRol(),
			));

		

			
		}catch(Exception $e){
			die($e->getMessage());
		}

	}



	public function Actualizar(Usuario $usu)
	{
		try {
			$consulta = "UPDATE usuario SET 
                tipoDocumento=?,
                numeroDocumento=?,
                primerNombre=?,
                segundoNombre=?,
                primerApellido=?
				segundoApellido=?
				telefono=?
				direccion=?
				email=?
				clave=?
				estado=?
				clave=?


                WHERE idUsuario=?;
            ";
			$this->pdo->prepare($consulta)
				->execute(array(
					$usu->getTipoDocumento(),
					$usu->getNumeroDocumento(),
					$usu->getPrimerNombre(),
					$usu->getSegundoNombre(),
					$usu->getPrimerApellido(),
					$usu->getSegundoApellido(),
					$usu->getTelefono(),
					$usu->getDireccion(),
					$usu->getEmail(),
					$usu->getClave(),
					$usu->getEstado(),
					$usu->getClave(),
					
				));
		} catch (Exception $e) {
			die($e->getMessage());
		}
	}


	public function Eliminar($idUsuario)
	{
		try {
			$consulta = "DELETE FROM usuario WHERE idUsuario=?;";
			$this->pdo->prepare($consulta)
			->execute(array($idUsuario));
		} catch (Exception $e) {
			die($e->getMessage());
		}
	}


	
}
