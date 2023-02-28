<?php
class Asignatura{
//Declaración de variables
    private $idAsignatura;
    private $nombreAsignatura;
    private $intensidadHorariaSemanal;
    private $descripcion;

    //Método constructor
    public function __construct()
    {
        $this->idAsignatura = 0;
        $this->nombreAsignatura = "";
        $this->intensidadHorariaSemanal = 0;
        $this->descripcion= "";

    }

    //Métodos GETTERS and SETTERS

    public function setIdAsignatura($idAsignatura)
    {
        $this->idAsignatura = $idAsignatura;
    }

    public function getIdAsignatura(): int
    {
        return $this->idAsignatura;
    }

    public function setNombreAsignatura($nombreAsignatura)
    {
        $this->nombreAsignatura = $nombreAsignatura;
    }

    public function getNombreAsignatura(): string
    {
        return $this->nombreAsignatura;
    }


    public function setIntensidadHorariaSemanal($intensidadHorariaSemanal)
    {
        $this->intensidadHorariaSemanal = $intensidadHorariaSemanal;
    }

    public function getIntensidadHorariaSemanal(): int
    {
        return $this->intensidadHorariaSemanal;
    }


    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }

    public function getDescripcion(): string
    {
        return $this->descripcion;
    }



    //Método para crear una asignatura


    //Método para actualizar una Asignatura

    //Método para listar asignaturas
    public function obtenerAsigaturas(): array
    {
        //Instanciar 
        require '../config/db.php';

        
        $queryAsignatura = "SELECT * FROM asignatura";

        return $db->get_data($queryAsignatura);
    }

    //Método para borrar asignatura
}
