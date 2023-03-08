<?php
require_once 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';

class AdministradorController extends LoginController
{

    public function listarEstudiantes()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiantes = $db->consultarRegistros('SELECT * FROM usuario WHERE codRol = 3');
            if ($estudiantes) {

                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($estudiantes as $value) {
                    $data = [];
                    $data['nombre'] = nombreUsuarioO($value);
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .='<a href="javascript:void(0);" onclick="editarUsuario(\'' . base64_encode($value->identificacion) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar estudiante" data-placement="top">' . '<i class="bx bxs-notepad icon" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '</div>';
                    $data['identificacion'] = $value->numeroDocumento;
                    $data['tipoDocumento'] = $value->tipoDocumento;
                    $data['telefono'] = $value->telefono;
                    $data['email'] = $value->email;
                    $data['direccion'] = $value->direccion;
                    $data['estado'] = $value->estado;
                    $salida['registros'][] = $data;
                }
                return respuesta('00', '', $salida);
            } else {
                $msj = 'No existen registros.';
            }
        } else {
            $msj = 'Usuario no permitido';
        }
        return respuesta('99', $msj);
    }
}