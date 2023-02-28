<?php

class Ciclo{
    //Declaración de variables

    private $idCiclo;
    private $nombreCiclo;
    private $semestre;
    private $descripcion;
    private $fechaInicio;
    private $fechaFinalizacion;

    //Método Constructor

    public function __construct(){
        $this->idCiclo;
        $this->nombreCiclo;
        $this->semestre;
        $this->descripcion;
        $this->fechaInicio;
        $this->fechaFinalizacion;
    }

    //Métodos GETTERS and SETTERS


		public function getIdCiclo() {
		return $this->idCiclo;
	}

	public function setIdCiclo($idCiclo): self {
		$this->idCiclo = $idCiclo;
		return $this;
	}

	
	public function getNombreCiclo() {
		return $this->nombreCiclo;
	}
	
	
	public function setNombreCiclo($nombreCiclo): self {
		$this->nombreCiclo = $nombreCiclo;
		return $this;
	}
	
	
	public function getSemestre() {
		return $this->semestre;
	}
	
	
	public function setSemestre($semestre): self {
		$this->semestre = $semestre;
		return $this;
	}
	
	
	public function getDescripcion() {
		return $this->descripcion;
	}
	
	
	public function setDescripcion($descripcion): self {
		$this->descripcion = $descripcion;
		return $this;
	}
	
	/**
	 * @return mixed
	 */
	public function getFechaInicio() {
		return $this->fechaInicio;
	}
	
	/**
	 * @param mixed $fechaInicio 
	 * @return self
	 */
	public function setFechaInicio($fechaInicio): self {
		$this->fechaInicio = $fechaInicio;
		return $this;
	}
	
	
	public function getFechaFinalizacion() {
		return $this->fechaFinalizacion;
	}
	
	
	public function setFechaFinalizacion($fechaFinalizacion): self {
		$this->fechaFinalizacion = $fechaFinalizacion;
		return $this;
	}


}



?>