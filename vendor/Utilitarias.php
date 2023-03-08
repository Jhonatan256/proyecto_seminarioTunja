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
function menuEstudiantes(){
    $opciones = $modulo = [];
    $opciones[] = [
        'nombre' => 'Registrar Estudiante',
        'z' => 'registrarEstudiante'
    ];
    $opciones[] = [
        'nombre' => 'Actualizar Estudiante',
        'z' => 'actualizarEstudiante'
    ];
    $modulo = [
        'nombre' => 'Estudiantes',
        'icono' => 'bx bxs-notepad icon',
        'opciones' => $opciones
    ];
    return $modulo;
}
function menuDocente(){
    $opciones = $modulo = [];
    $opciones[] = [
        'nombre' => 'Registrar Estudiante',
        'z' => 'registrarEstudiante'
    ];
    $opciones[] = [
        'nombre' => 'Actualizar Estudiante',
        'z' => 'actualizarEstudiante'
    ];
    $modulo = [
        'nombre' => 'Estudiantes',
        'icono' => 'bx bxs-notepad icon',
        'opciones' => $opciones
    ];
    return $modulo;
}