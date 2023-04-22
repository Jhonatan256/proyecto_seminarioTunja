<?php

require_once 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';
class StudentController extends LoginController
{

    const ERROR_USUARIO = 'Usuario no permitido';

    public function listarNotas()
    {
        if (self::getUser('tipoUsuario') == '3') {
            $db = new Conexion();
            $planEstudio = $db->consultarRegistros('SELECT  a.nombreAsignatura, a.intensidadHorariaSemanal, c.nombreCiclo FROM asignatura a LEFT JOIN ciclo c ON a.idCiclo  = c.idCiclo; ');
            if ($planEstudio) {
                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($planEstudio as $value) {
                    $data = [];
                    $data['nombreCiclo'] = $value->nombreCiclo;
                    $data['nombreAsignatura'] = $value->nombreAsignatura;
                    $data['intensidadHorariaSemanal'] = $value->intensidadHorariaSemanal;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="buscarNota(\'' . base64_encode($value->idAsignatura) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar plan" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '</div>';
                    $salida['registros'][] = $data;
                }
                return respuesta('00', '', $salida);
            } else {
                $msj = 'No existen registros.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }
}
