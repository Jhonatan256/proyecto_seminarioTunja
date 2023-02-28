<?php
class Grupo{
    
    //Declaración de variables
    private $idGrupo;
    private $nombre;

    //Método Constructor
    public function __construct(){
        $this->idGrupo;
        $this->nombre;
    }

    //Métodos GETTERS and SETTERS

    
	public function getIdGrupo() {
		return $this->idGrupo;
	}

	public function setIdGrupo($idGrupo): self {
		$this->idGrupo = $idGrupo;
		return $this;
	}
	
	
	public function getNombre() {
		return $this->nombre;
	}
	

	public function setNombre($nombre): self {
		$this->nombre = $nombre;
		return $this;
	}
}

?>