<?php

function imprimirSalida($data)
{
    die(json_encode($data));
}

function imprimirSalida2($data)
{
    echo "<pre>";
    print_r($data);
    echo "</pre>";
    die();
}

function respuesta($cod, $msj, $data = [])
{
    $respuesta['cod'] = $cod;
    $respuesta['msj'] = $msj;
    if (! empty($data)) {
        $respuesta['data'] = $data;
    }
    return json_encode($respuesta);
}

function nombreUsuario($datos)
{
    $nombre = $datos['primerNombre'];
    if (! empty($datos['segundoNombre'])) {
        $nombre .= ' ' . $datos['segundoNombre'];
    }
    if (! empty($datos['segundoNombre'])) {
        $nombre .= ' ' . $datos['segundoNombre'];
    }
    if (! empty($datos['primerApellido'])) {
        $nombre .= ' ' . $datos['primerApellido'];
    }
    if (! empty($datos['segundoApellido'])) {
        $nombre .= ' ' . $datos['segundoApellido'];
    }
    return $nombre;
}

function nombreUsuarioO($datos)
{
    $nombre = $datos->primerNombre;
    if (! empty($datos->segundoNombre)) {
        $nombre .= ' ' . $datos->segundoNombre;
    }
    if (! empty($datos->segundoNombre)) {
        $nombre .= ' ' . $datos->segundoNombre;
    }
    if (! empty($datos->primerApellido)) {
        $nombre .= ' ' . $datos->primerApellido;
    }
    if (! empty($datos->segundoApellido)) {
        $nombre .= ' ' . $datos->segundoApellido;
    }
    return $nombre;
}

function menuEstudiantes()
{
    return [
        'nombre' => 'Estudiantes',
        'icono' => 'bx bxs-notepad icon',
        'z' => 'vistaEstudiantes'
    ];
}

function menuDocentes()
{
    return [
        'nombre' => 'Docente',
        'icono' => 'bx bxs-notepad icon',
        'z' => 'vistaDocentes'
    ];
}

function menuAsignatura()
{
    return [
        'nombre' => 'Asignaturas',
        'icono' => 'bx bxs-inbox icon',
        'z' => 'vistaAsignaturas'
    ];
}

function menuHorario()
{
    return [
        'nombre' => 'Horarios',
        'icono' => 'bx bxs-inbox icon',
        'z' => 'vistaHorarios'
    ];
}

function menuPlan()
{
    return [
        'nombre' => 'Plan de Estudios ',
        'icono' => 'bx bxs-widget icon',
        'z' => 'vistaPlanEstudios'
    ];
}

function menuCalificaciones()
{
    return [
        'nombre' => 'Calificaciones',
        'icono' => 'bx bxs-widget icon',
        'z' => 'vistaCalificaciones'
    ];
}


function menuCiclo()
{
    return [
        'nombre' => 'Ciclo ',
        'icono' => 'bx bxs-widget icon',
        'z' => 'vistaCiclo'
    ];
}



//Esta función es para el menú de calificaciones que vera el estudiante
function menuNota()
{
    return [
        'nombre' => 'Notas',
        'icono' => 'bx bxs-widget icon',
        'z' => 'vistaNotas'
    ];
}









// function menuLibro(){
// return ['nombre' =>'Calificaciones', 'icono' => 'bx bxs-widget icon', 'z' => 'vistaCalificaciones'];
// }
function generarLogAuditoria($db, $usuario, $tabla, $id, $modificacion)
{
    date_default_timezone_set('America/Bogota');
    $campos['fechaModificacion'] = date('d-m-Y');
    $campos['usuarioModificacion'] = $usuario;
    $campos['tabla'] = $tabla;
    $campos['idRegistro'] = $id;
    $campos['tipoModificacion'] = $modificacion;
    $campos['horaModificacion'] = date('h:i:s');
    $db->crudRegistro('INSERT INTO log (fechaModificacion, usuarioModificacion, tabla, idRegistro, tipoModificacion, horaModificacion) VALUES (:fechaModificacion, :usuarioModificacion, :tabla, :idRegistro, :tipoModificacion, :horaModificacion)', $campos);
}