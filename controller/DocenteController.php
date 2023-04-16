<?php
require_once 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';

class DocenteController extends LoginController
{

    const ERROR_USUARIO = 'Usuario no permitido';

    public function listarCalificacion()
    {
        $msj = '';
        if (self::getUser('tipoUsuario') == '2') {
            $db = new Conexion();
            $query = "SELECT c.idclase, CONCAT(d.primerapellido, ' ', d.segundoapellido, ' ', d.primernombre, ' ', d.segundonombre, ' ')  as docente, concat(e.primerapellido, ' ', e.segundoapellido, ' ', e.primernombre, ' ', e.segundonombre, ' ') as estudiante, e.numerodocumento,  a.nombreasignatura, c.notahabilitacion, c.notatutoria, c.notafinal FROM clases c 
            JOIN asignatura a ON c.idasignatura = a.idasignatura 
            JOIN usuario d ON d.idusuario = c.iddocente
            JOIN usuario e ON e.idusuario = c.idestudiante
            JOIN horario h ON h.idhorario = c.idhorario;";
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
            return respuesta('00', '$msj', $salida);
        } else {
            $msj = 'No existen registros actuales.';
        }
        imprimirSalida($clases);
    }

    public function registrarCalificacion()
    {
        if (self::getUser('tipoUsuario') == '2') {
            $db = new Conexion();
            unset($_POST['m']);
            unset($_POST['c']);
            $db->crudRegistro("INSERT INTO asignatura (nombreAsignatura, descripcion, intensidadHorariaSemanal, idCiclo) VALUES (:nombreAsignatura, :descripcion, :intensidadHorariaSemanal , :idCiclo)", $_POST);
            generarLogAuditoria($db, self::getUser('idUsuario'), 'Asignatura', $db->lastInsertId(), 'Registrar');
            return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }
    public function selectAsignatura($tipoSalida = true)
    {
        $db = new Conexion();
        $salida = $db->consultarRegistros('SELECT * FROM asignatura');
        if ($tipoSalida) {
            return respuesta('00', '', $salida);
        } else {
            return $salida;
        }
    }

}


