<?php

class StudentController extends LoginController
{

    const ERROR_USUARIO = 'Usuario no permitido';

    public function listarCalificacionesEstudiante ()
    {
        $msj = '';    
        if (self::getUser('tipoUsuario') == '2') {
            $db = new Conexion();
            //GUARDO EL NUMERO DE DOCUMENTO DLE USUARIO QUE SE ESTÁ AUTENTICANDO
            $numeroDocumento = self::getUser('numeroDocumento');
            $query = "SELECT u.numeroDocumento,u.primerNombre,u.primerApellido,a.nombreAsignatura,c.notaHabilitacion,c.notaTutoria,c.notaFinal
                FROM usuario u
                INNER JOIN clases c ON u.idUsuario = c.idEstudiante
                INNER JOIN asignatura a  ON c.idAsignatura = a.idAsignatura
                WHERE u.numeroDocumento = $numeroDocumento;";
               
            $notas = $db->consultarRegistros($query);
            if ($notas) {
                $salida = [];
                foreach ($notas as $key) {
                    $data = [];
                    $data['numerodocumento'] = $key->numerodocumento;
                    $data['primerNombre'] = $key->primerNombre;
                    $data['primerApellido'] = $key->primerApellido;
                    $data['notahabilitacion'] = $key->notahabilitacion;
                    $data['notatutoria'] = $key->notatutoria;
                    $data['notafinal'] = $key->notafinal;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="modificarNota(\'' . base64_encode($key->idclase) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar nota estudiante" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '</div>';
                    $salida['registros'][] = $data;
                }
                return respuesta('00', $msj, $salida);
            } else {
                $msj = 'No existen registros actuales.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    
}


