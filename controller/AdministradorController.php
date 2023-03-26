<?php
require_once 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';

class AdministradorController extends LoginController
{

    const ERROR_USUARIO = 'Usuario no permitido';

    # Método de listar estudiantes
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
                    $data['primerNombre'] = $value->primerNombre;
                    $data['segundoNombre'] = $value->segundoNombre;
                    $data['primerApellido'] = $value->primerApellido;
                    $data['segundoApellido'] = $value->segundoApellido;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="editarUsuario(\'' . base64_encode($value->idUsuario) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar estudiante" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarEstudiante(\'' . base64_encode($value->idUsuario) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar estudiante" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '</div>';
                    $data['identificacion'] = $value->numeroDocumento;
                    $data['tipoDocumento'] = $value->tipoDocumento;
                    $data['telefono'] = $value->telefono;
                    $data['email'] = $value->email;
                    $data['direccion'] = $value->direccion;
                    $data['estado'] = strtoupper($value->estado);
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

    # Método de buscar estudiante
    public function buscarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE idUsuario = :ide', [
                'ide' => base64_decode($_POST['ide'])
            ]);
            if ($estudiante) {
                return respuesta('00', '', $estudiante);
            } else {
                $msj = 'No existe el estudiante.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    # Método de actualizar estudiante
    public function actualizarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE idUsuario = :ide', [
                'ide' => $_POST['idUsuario']
            ]);
            unset($_POST['m']);
            unset($_POST['c']);
            if ($estudiante) {
                $db->crudRegistro("UPDATE usuario SET tipoDocumento = :tipoDocumento, numeroDocumento = :numeroDocumento, primerNombre = :primerNombre, segundoNombre = :segundoNombre, primerApellido = :primerApellido, segundoApellido = :segundoApellido, telefono = :telefono, direccion = :direccion, email = :email WHERE idUsuario = :idUsuario", $_POST);
                generarLogAuditoria($db, self::getUser('idUsuario'), 'estudiante', $_POST['idUsuario'], 'Actualizar');
                return respuesta('00', '');
            } else {
                $msj = 'No existe el estudiante.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    # Método de registrar estudiante
    public function registrarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $usuario = $db->consultarRegistro('SELECT idUsuario FROM usuario WHERE numeroDocumento = :numeroDocumento', [
                'numeroDocumento' => $_POST['numeroDocumento']
            ]);
            if ($usuario) {
                return respuesta('99', 'El usuario ya existe.');
            }
            unset($_POST['m']);
            unset($_POST['c']);

            $_POST['password'] = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $_POST['primerNombre'] = strtoupper($_POST['primerNombre']);
            $_POST['segundoNombre'] = strtoupper($_POST['segundoNombre']);
            $_POST['primerApellido'] = strtoupper($_POST['primerApellido']);
            $_POST['segundoApellido'] = strtoupper($_POST['segundoApellido']);

            $db->crudRegistro("INSERT INTO usuario (tipoDocumento, numeroDocumento, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, password, estado, codRol) VALUES (:tipoDocumento, :numeroDocumento, :primerNombre, :segundoNombre, :primerApellido, :segundoApellido, :telefono, :direccion, :email, :password, 'activo', 3)", $_POST);
            generarLogAuditoria($db, self::getUser('idUsuario'), 'estudiante', $db->lastInsertId(), 'Registrar');
            return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    # Método de eliminar estudiante
    public function eliminarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $_POST['ide'] = base64_decode($_POST['ide']);
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE idUsuario = :ide', [
                'ide' => $_POST['ide']
            ]);
            if ($estudiante) {
                $db->crudRegistro("DELETE FROM usuario WHERE idUsuario = :ide", [
                    'ide' => $_POST['ide']
                ]);
                generarLogAuditoria($db, self::getUser('idUsuario'), $_POST['modulo'], $_POST['ide'], 'Eliminar');
                return respuesta('00', '');
            } else {
                $msj = 'No existe el estudiante.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    /**
     * ******************************************************************************************
     */

    # Método de listar docentes
    public function listarDocente()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $docentes = $db->consultarRegistros('SELECT * FROM usuario WHERE codRol = 2');
            if ($docentes) {

                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($docentes as $value) {
                    $data = [];
                    $data['primerNombre'] = $value->primerNombre;
                    $data['segundoNombre'] = $value->segundoNombre;
                    $data['primerApellido'] = $value->primerApellido;
                    $data['segundoApellido'] = $value->segundoApellido;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="editarUsuario(\'' . base64_encode($value->idUsuario) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar docente" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarDocente(\'' . base64_encode($value->idUsuario) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar docente" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '</div>';
                    $data['identificacion'] = $value->numeroDocumento;
                    $data['tipoDocumento'] = $value->tipoDocumento;
                    $data['telefono'] = $value->telefono;
                    $data['email'] = $value->email;
                    $data['direccion'] = $value->direccion;
                    $data['estado'] = strtoupper($value->estado);
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

    # Método de buscar docente
    public function buscarDocente()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $docente = $db->consultarRegistro('SELECT * FROM usuario WHERE numeroDocumento = :ide', [
                'ide' => base64_decode($_POST['ide'])
            ]);
            if ($docente) {
                return respuesta('00', '', $docente);
            } else {
                $msj = 'No existe el docente.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    # Método de actualizar docente
    public function actualizarDocente()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $docente = $db->consultarRegistro('SELECT * FROM usuario WHERE numeroDocumento = :ide', [
                'ide' => $_POST['numeroDocumento']
            ]);
            unset($_POST['m']);
            unset($_POST['c']);
            $_POST['ide'] = $_POST['numeroDocumento'];
            if ($docente) {
                $db->crudRegistro("UPDATE usuario SET tipoDocumento = :tipoDocumento, numeroDocumento = :numeroDocumento, primerNombre = :primerNombre, segundoNombre = :segundoNombre, primerApellido = :primerApellido, segundoApellido = :segundoApellido, telefono = :telefono, direccion = :direccion, email = :email WHERE numeroDocumento = :ide", $_POST);
                // Excepcion de auditoria
                try {
                    generarLogAuditoria($db, self::getUser('idUsuario'), 'docente', $db->lastInsertId(), 'Actualizar');
                    return respuesta('00', '');
                } catch (Exception $e) {
                    return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
                }

                // return respuesta('00', '');
            } else {
                $msj = 'No existe el docente.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    # Método de docente
    public function registrarDocente()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $usuario = $db->consultarRegistro('SELECT idUsuario FROM usuario WHERE numeroDocumento = :numeroDocumento', [
                'numeroDocumento' => $_POST['numeroDocumento']
            ]);
            if ($usuario) {
                return respuesta('99', 'El usuario ya existe.');
            }
            //
            unset($_POST['m']);
            unset($_POST['c']);
            //
            $_POST['password'] = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $_POST['primerNombre'] = strtoupper($_POST['primerNombre']);
            $_POST['segundoNombre'] = strtoupper($_POST['segundoNombre']);
            $_POST['primerApellido'] = strtoupper($_POST['primerApellido']);
            $_POST['segundoApellido'] = strtoupper($_POST['segundoApellido']);
            //
            $db->crudRegistro("INSERT INTO usuario (tipoDocumento, numeroDocumento, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, password, estado, codRol) VALUES (:tipoDocumento, :numeroDocumento, :primerNombre, :segundoNombre, :primerApellido, :segundoApellido, :telefono, :direccion, :email, :password, 'activo', 2)", $_POST);
            generarLogAuditoria($db, self::getUser('idUsuario'), 'docente', $db->lastInsertId(), 'Registrar');
            return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    # Metodo de listar asignaturas
    public function listarAsignatura()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistros('SELECT a.*, c.nombreCiclo FROM asignatura a LEFT JOIN ciclo c ON a.idCiclo = c.idCiclo');
            if ($asignatura) {
                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($asignatura as $value) {
                    $data = [];
                    $data['idAsignatura'] = $value->idAsignatura;
                    $data['nombreAsignatura'] = $value->nombreAsignatura;
                    $data['intensidadHorariaSemanal'] = $value->intensidadHorariaSemanal;
                    $data['descripcion'] = $value->descripcion;
                    $data['ciclo'] = $value->nombreCiclo;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="buscarAsignatura(\'' . base64_encode($value->idAsignatura) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar asignatura" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarAsignatura(\'' . base64_encode($value->idAsignatura) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar asignatura" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
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

    public function selectGruposAsignatura($tipoSalida = true)
    {
        $db = new Conexion();
        $salida = $db->consultarRegistros('SELECT * FROM grupo');
        if ($tipoSalida) {
            return respuesta('00', '', $salida);
        } else {
            return $salida;
        }
    }

    public function buscarAsignatura()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistro('SELECT * FROM asignatura WHERE idAsignatura =:id', [
                'id' => base64_decode($_POST['id'])
            ]);
            if ($asignatura) {
                $asignatura['select'] = self::selectGruposHorarios(false);
                return respuesta('00', '', $asignatura);
            } else {
                $msj = 'No existen registros.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function registrarAsignatura()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            unset($_POST['m']);
            unset($_POST['c']);
            $db->crudRegistro("INSERT INTO asignatura (nombreAsignatura, descripcion, intensidadHorariaSemanal, cod_Grupo) VALUES (:nombreAsignatura, :descripcion, :intensidadHorariaSemanal , :cod_Grupo)", $_POST);
            // Excepcion de Auditoria
            try {
                generarLogAuditoria($db, self::getUser('idUsuario'), 'Asignatura', $db->lastInsertId(), 'Registrar');
                return respuesta('00', '');
            } catch (Exception $e) {
                return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
            }

            // return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function actualizarAsignatura()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistro('SELECT * FROM asignatura WHERE idAsignatura = :ide', [
                'ide' => $_POST['idAsignatura']
            ]);
            unset($_POST['m']);
            unset($_POST['c']);
            if ($asignatura) {
                $db->crudRegistro("UPDATE asignatura SET nombreAsignatura = :nombreAsignatura, descripcion = :descripcion, intensidadHorariaSemanal = :intensidadHorariaSemanal, cod_Grupo = :cod_Grupo WHERE idAsignatura = :idAsignatura", $_POST);
                // Excepcion de Auditoria
                try {
                    generarLogAuditoria($db, self::getUser('idUsuario'), 'Asignatura', $db->lastInsertId(), 'Actualizar');
                    return respuesta('00', '');
                } catch (Exception $e) {
                    return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
                }

                // return respuesta('00', '');
            } else {
                $msj = 'No existe la asignatura.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function eliminarAsignatura()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistro('SELECT * FROM asignatura WHERE idAsignatura = :ide', [
                'ide' => base64_decode($_POST['ide'])
            ]);
            if ($asignatura) {
                $db->crudRegistro("DELETE FROM asignatura WHERE idAsignatura = :ide", [
                    'ide' => base64_decode($_POST['ide'])
                ]);

                // Excepcion de Auditoria
                try {
                    generarLogAuditoria($db, self::getUser('idUsuario'), 'Asignatura', $db->lastInsertId(), 'Eliminar');
                    return respuesta('00', '');
                } catch (Exception $e) {
                    return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
                }

                // return respuesta('00', '');
            } else {
                $msj = 'No existe la asignatura.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    # HORARIOS
    public function listarHorarios()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $horario = $db->consultarRegistros('SELECT * FROM horario');
            if ($horario) {
                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($horario as $value) {
                    $data = [];
                    $data['idHorario'] = $value->idHorario;
                    $data['dia'] = $value->dia;
                    $data['horaInicio'] = $value->horaInicio;
                    $data['horaFin'] = $value->horaFin;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="buscarHorario(\'' . base64_encode($value->idHorario) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar horario" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarHorario(\'' . base64_encode($value->idHorario) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar horario" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
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

    public function registrarHorario()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            unset($_POST['m']);
            unset($_POST['c']);
            $db->crudRegistro("INSERT INTO horario (dia, horaInicio, horaFin) VALUES (:dia, :horaInicio, horaFin)", $_POST);

            // Excepcion de Auditoria
            try {
                generarLogAuditoria($db, self::getUser('idUsuario'), 'Horario', $db->lastInsertId(), 'Registrar');
                return respuesta('00', '');
            } catch (Exception $e) {
                return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
            }

            // return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function actualizarHorario()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistro('SELECT * FROM asignatura WHERE idAsignatura = :ide', [
                'ide' => $_POST['idAsignatura']
            ]);
            unset($_POST['m']);
            unset($_POST['c']);
            if ($asignatura) {
                $db->crudRegistro("UPDATE asignatura SET nombreAsignatura = :nombreAsignatura, descripcion = :descripcion, intensidadHorariaSemanal = :intensidadHorariaSemanal, cod_Grupo = :cod_Grupo WHERE idAsignatura = :idAsignatura", $_POST);
                // Excepcion de Auditoria
                try {
                    generarLogAuditoria($db, self::getUser('idUsuario'), 'Horario', $db->lastInsertId(), 'Actualizar');
                    return respuesta('00', '');
                } catch (Exception $e) {
                    return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
                }

                // return respuesta('00', '');
            } else {
                $msj = 'No existe la asignatura.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function eliminarHorario()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistro('SELECT * FROM asignatura WHERE idAsignatura = :ide', [
                'ide' => base64_decode($_POST['ide'])
            ]);
            if ($asignatura) {
                $db->crudRegistro("DELETE FROM asignatura WHERE idAsignatura = :ide", [
                    'ide' => base64_decode($_POST['ide'])
                ]);
                // Excepcion de Auditoria
                try {
                    generarLogAuditoria($db, self::getUser('idUsuario'), 'Horario', $db->lastInsertId(), 'Eliminar');
                    return respuesta('00', '');
                } catch (Exception $e) {
                    return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
                }

                // return respuesta('00', '');
            } else {
                $msj = 'No existe la asignatura.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function selectGruposHorarios($tipoSalida = true)
    {
        $db = new Conexion();
        $salida = $db->consultarRegistros('SELECT * FROM ciclo');
        // $salida['asiganturas'] = self::selectGruposAsignatura(false);
        if ($tipoSalida) {
            return respuesta('00', '', $salida);
        } else {
            return $salida;
        }
    }

    public function buscarHorario()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $horario = $db->consultarRegistro('SELECT * FROM ciclo WHERE idCiclo =:id', [
                'id' => base64_decode($_POST['id'])
            ]);
            if ($horario) {
                $horario['select'] = self::selectGruposHorarios(false);
                return respuesta('00', '', $horario);
            } else {
                $msj = 'No existen registros.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function listarCiclo()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $ciclo = $db->consultarRegistros('SELECT c.*, g.nombreGrupo FROM ciclo c LEFT JOIN grupo g ON c.idGrupo = g.idGrupo; ');
            if ($ciclo) {
                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($ciclo as $value) {
                    $data = [];
                    $data['idCiclo'] = $value->idCiclo;
                    $data['nombreCiclo'] = $value->nombreCiclo;
                    $data['semestre'] = $value->semestre;
                    $data['descripcion'] = $value->descripcion;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="buscarCiclo(\'' . base64_encode($value->idCiclo) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar ciclo" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarCiclo(\'' . base64_encode($value->idCiclo) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar ciclo" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '</div>';
                    $data['fechaInicio'] = $value->fechaInicio;
                    $data['fechaFinalizacion'] = $value->fechaFinalizacion;
                    $data['nombreGrupo'] = $value->nombreGrupo;
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

    public function registrarCiclo()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            unset($_POST['m']);
            unset($_POST['c']);
            // imprimirSalida($_POST);
            $db->crudRegistro("INSERT INTO ciclo (nombreCiclo, idGrupo, semestre, descripcion, fechaInicio, fechaFinalizacion) VALUES (:nombreCiclo, :idGrupo, :semestre, :descripcion, :fechaInicio, :fechaFin)", $_POST);
            // Excepcion de Auditoria
            try {
                generarLogAuditoria($db, self::getUser('idUsuario'), 'Ciclo', $db->lastInsertId(), 'Registrar');
                return respuesta('00', '');
            } catch (Exception $e) {
                return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
            }

            // return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function buscarCiclo()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistro('SELECT * FROM ciclo WHERE idCiclo =:id', [
                'id' => base64_decode($_POST['id'])
            ]);
            if ($asignatura) {
                $asignatura['select'] = self::selectGruposAsignatura(false);
                return respuesta('00', '', $asignatura);
            } else {
                $msj = 'No existen registros.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function actualizarCiclo()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $ciclo = $db->consultarRegistro('SELECT * FROM ciclo WHERE idCiclo = :ide', [
                'ide' => $_POST['idCiclo']
            ]);
            unset($_POST['m']);
            unset($_POST['c']);
            if ($ciclo) {
                $db->crudRegistro("UPDATE ciclo SET nombreCiclo = :nombreCiclo, idGrupo = :idGrupo, semestre = :semestre, descripcion = :descripcion, fechaInicio = :fechaInicio, fechaFinalizacion = :fechaFin WHERE idCiclo = :idCiclo", $_POST);
                // Excepcion de Auditoria
                try {
                    generarLogAuditoria($db, self::getUser('idUsuario'), 'Ciclo', $db->lastInsertId(), 'Actualizar');
                    return respuesta('00', '');
                } catch (Exception $e) {
                    return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
                }
                // return respuesta('00', '');
            } else {
                $msj = 'No existe el ciclo.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function eliminarCiclo()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $ciclo = $db->consultarRegistro('SELECT * FROM ciclo WHERE idCiclo = :ide', [
                'ide' => base64_decode($_POST['ide'])
            ]);
            if ($ciclo) {
                $db->crudRegistro("DELETE FROM ciclo WHERE idCiclo = :ide", [
                    'ide' => base64_decode($_POST['ide'])
                ]);
                // Excepcion de Auditoria
                try {
                    generarLogAuditoria($db, self::getUser('idUsuario'), 'Ciclo', $db->lastInsertId(), 'Eliminar');
                    return respuesta('00', '');
                } catch (Exception $e) {
                    return respuesta('99', 'Excepción capturada: ' . $e->getMessage() . "\n");
                }
                // return respuesta('00', '');
            } else {
                $msj = 'No existe el ciclo.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }
    
}
