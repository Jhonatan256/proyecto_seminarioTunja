<?php

class DocenteController extends LoginController
{

    const ERROR_USUARIO = 'Usuario no permitido';

    public function vistaCalififaciones()
    {
        $msj = '';
        if (self::getUser('tipoUsuario') == '2') {
            $db = new Conexion();
            $query = "SELECT c.idclase, CONCAT(d.primerapellido, ' ', d.segundoapellido, ' ', d.primernombre, ' ', d.segundonombre, ' ')  as docente, concat(e.primerapellido, ' ', e.segundoapellido, ' ', e.primernombre, ' ', e.segundonombre, ' ') as estudiante, e.numerodocumento,  a.nombreasignatura, c.notahabilitacion, c.notatutoria, c.notafinal ";
            $query .= "FROM clases c ";
            $query .= "JOIN asignatura a ON c.idasignatura = a.idasignatura ";
            $query .= "JOIN usuario d ON d.idusuario = c.iddocente ";
            $query .= "JOIN usuario e ON e.idusuario = c.idestudiante ";
            $query .= "JOIN horario h ON h.idhorario = c.idhorario  ";
            $clases = $db->consultarRegistros($query);
            if ($clases) {
                $salida = [];
                foreach ($clases as $key) {
                    $data = [];
                    $data['idclase'] = $key->idclase;
                    $data['docente'] = str_replace('  ', ' ', $key->docente);
                    $data['estudiante'] = str_replace('  ', ' ', $key->estudiante);
                    $data['numerodocumento'] = $key->numerodocumento;
                    $data['nombreasignatura'] = $key->nombreasignatura;
                    $data['numeroDocumento'] = $key->numeroDocumento;
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
            imprimirSalida($clases);
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function consultaDocente()
    {
        $db = new Conexion();
        $query = "SELECT c.idclase, CONCAT(d.primerapellido, ' ', d.segundoapellido, ' ', d.primernombre, ' ', d.segundonombre, ' ')  as docente, concat(e.primerapellido, ' ', e.segundoapellido, ' ', e.primernombre, ' ', e.segundonombre, ' ') as estudiante, e.numerodocumento,  a.nombreasignatura, c.notahabilitacion, c.notatutoria, c.notafinal ";
        $query .= "FROM clases c ";
        $query .= "JOIN asignatura a ON c.idasignatura = a.idasignatura ";
        $query .= "JOIN usuario d ON d.idusuario = c.iddocente ";
        $query .= "JOIN usuario e ON e.idusuario = c.idestudiante ";
        $query .= "JOIN horario h ON h.idhorario = c.idhorario  ";
        $clases = $db->consultarRegistros($query);
        if ($clases) {
            $salida = [];
            foreach ($clases as $key) {
                $data = [];
                $data['idclase'] = $key->idclase;
                $data['docente'] = str_replace('  ', ' ', $key->docente);
                $data['estudiante'] = str_replace('  ', ' ', $key->estudiante);
                $data['numerodocumento'] = $key->numerodocumento;
                $data['nombreasignatura'] = $key->nombreasignatura;
                $data['numeroDocumento'] = $key->numeroDocumento;
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
        imprimirSalida($clases);
    }
}


