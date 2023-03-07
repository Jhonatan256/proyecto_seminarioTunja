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