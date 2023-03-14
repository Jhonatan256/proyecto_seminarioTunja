<?php
require_once 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';

class AdministradorController extends LoginController
{

    const ERROR_USUARIO = 'Usuario no permitido';

    #Método de listar estudiantes
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
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="editarUsuario(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar estudiante" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarEstudiante(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar estudiante" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
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
    
    #Método de buscar estudiante
    public function buscarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE numeroDocumento = :ide', [
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

    #Método de actualizar estudiante
    public function actualizarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE numeroDocumento = :ide', [
                'ide' => $_POST['numeroDocumento']
            ]);
            unset($_POST['m']);
            unset($_POST['c']);
            $_POST['ide'] = $_POST['numeroDocumento'];
            if ($estudiante) {
                $db->crudRegistro("UPDATE usuario SET tipoDocumento = :tipoDocumento, numeroDocumento = :numeroDocumento, primerNombre = :primerNombre, segundoNombre = :segundoNombre, primerApellido = :primerApellido, segundoApellido = :segundoApellido, telefono = :telefono, direccion = :direccion, email = :email WHERE numeroDocumento = :ide", $_POST);
                return respuesta('00', '');
            } else {
                $msj = 'No existe el estudiante.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    #Método de registrar estudiante
    public function registrarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            unset($_POST['m']);
            unset($_POST['c']);
            $db->crudRegistro("INSERT INTO usuario (tipoDocumento, numeroDocumento, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, password, estado, codRol) VALUES (:tipoDocumento, :numeroDocumento, :primerNombre, :segundoNombre, :primerApellido, :segundoApellido, :telefono, :direccion, :email, :password, 'activo', 3)", $_POST);
            return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    #Método de eliminar estudiante
    public function eliminarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE numeroDocumento = :ide', [
                'ide' => base64_decode($_POST['ide'])
            ]);
            if ($estudiante) {
                $db->crudRegistro("DELETE FROM usuario WHERE numeroDocumento = :ide", ['ide' =>base64_decode($_POST['ide'])]);
                return respuesta('00', '');
            } else {
                $msj = 'No existe el estudiante.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
        
    }


    /******************************************************************************************** */

    #Método de listar docentes
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
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="editarUsuario(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar docente" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarEstudiante(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar docente" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
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



    #Método de buscar docente
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

    #Método de actualizar docente
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
                return respuesta('00', '');
            } else {
                $msj = 'No existe el docente.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }


    #Método de docente
    public function registrarDocente()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            unset($_POST['m']);
            unset($_POST['c']);
            $db->crudRegistro("INSERT INTO usuario (tipoDocumento, numeroDocumento, primerNombre, segundoNombre, primerApellido, segundoApellido, telefono, direccion, email, password, estado, codRol) VALUES (:tipoDocumento, :numeroDocumento, :primerNombre, :segundoNombre, :primerApellido, :segundoApellido, :telefono, :direccion, :email, :password, 'activo', 2)", $_POST);
            return respuesta('00', '');
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }


   
    #Metodo de listar asignaturas
    public function listarAsignatura()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $asignatura = $db->consultarRegistros('SELECT * FROM asignatura');
            if ($asignatura) {
                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($asignatura as $value) {
                    $data = [];
                    $data['idAsignatura'] = $value->idAsignatura;
                    $data['nombreAsignatura'] = $value->nombreAsignatura;
                    $data['intensidadHorariaSemanal'] = $value->intensidadHorariaSemanal;
                    $data['descripcion'] = $value->descripcion;
                    $data['cod_Grupo'] = $value->cod_Grupo;
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="editarUsuario(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar asignatura" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarEstudiante(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar asignatura" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
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




