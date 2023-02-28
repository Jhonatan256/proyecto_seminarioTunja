<?php

class Calificaciones{
//Declaración de variables
    private $idCalificaciones;
    private $notaHabilitacion;
    private $notaTutoria;
    private $notaFinal;


    //Método Constructor
    public function __construct(){
        $this->idCalificaciones;
        $this->notaHabilitacion;
        $this->notaTutoria;
        $this->notaFinal;

    }


    //Método GETTERS and SETTERS
    public function getIdCalificaciones()
    {
        return $this->idCalificaciones;
    }
    public function setIdCalificaciones($idCalificaciones): self
    {
        $this->idCalificaciones = $idCalificaciones;
        return $this;
    }

    
	public function getNotaHabilitacion() {
		return $this->notaHabilitacion;
	}

		public function setNotaHabilitacion($notaHabilitacion): self {
		$this->notaHabilitacion = $notaHabilitacion;
		return $this;


	}

	
	public function getNotaTutoria() {
		return $this->notaTutoria;
	}
	
	
	public function setNotaTutoria($notaTutoria): self {
		$this->notaTutoria = $notaTutoria;
		return $this;
	}

	public function getNotaFinal() {
		return $this->notaFinal;
	}
	

	public function setNotaFinal($notaFinal): self {
		$this->notaFinal = $notaFinal;
		return $this;
	}
}


?>