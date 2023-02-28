<?php

class Horario{

    //Declaración de Variables
    private $idHorario;
    private $dia;
    private $horaInicio;
    private $horaFin;

    //Método Constructor

    public function __construct(){
        $this->idHorario;
        $this->dia;
        $this->horaInicio;
        $this->horaFin;
    }

    //Métodos GETTERS and SETTERS
    
    

	public function getIdHorario() {
		return $this->idHorario;
	}

	public function setIdHorario($idHorario): self {
		$this->idHorario = $idHorario;
		return $this;
	}

	
	public function getDia() {
		return $this->dia;
	}
	
	
	public function setDia($dia): self {
		$this->dia = $dia;
		return $this;
	}
	
	
	public function getHoraInicio() {
		return $this->horaInicio;
	}
	
	public function setHoraInicio($horaInicio): self {
		$this->horaInicio = $horaInicio;
		return $this;
	}
	
	
}


?>