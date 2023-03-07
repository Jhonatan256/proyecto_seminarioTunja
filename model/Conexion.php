<?php

class Conexion
{

    private $handleDB;

    public function __construct($include = 'S')
    {
        if ($include == 'S') {
            require_once './config/config.php';
        }
        $this->host = DB_HOST;
        $this->db = DB_TABLE;
        $this->user = DB_USER;
        $this->password = DB_PASSWORD;
        $this->charset = 'utf8mb4';
        $this->port = DB_PORT;
    }

    public function conectar()
    {
        try {

            $connection = "mysql:host=" . DB_HOST . ";dbname=" . DB_TABLE . ";charset=" . $this->charset;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false
            ];
            $this->handleDB = new PDO($connection, $this->user, $this->password, $options);
            return $this->handleDB;
        } catch (PDOException $e) {
            print_r('Error connection: ' . $e->getMessage());
            die();
        }
    }

    public function consultarRegistros($query, $campos = [])
    {
        $resdb = self::conectar()->prepare($query);
        $resdb->execute($campos);
        $respuesta = [];
        if ($resdb->rowCount() > 0) {
            foreach ($resdb->fetchAll(PDO::FETCH_OBJ) as $key => $value) {
                $respuesta[$key] = $value;
            }
            return $respuesta;
        } else {
            return false;
        }
    }

    public function consultarRegistro($query, $campos = [])
    {
        $resdb = self::conectar()->prepare($query);
        $resdb->execute($campos);
        $respuesta = [];
        if ($resdb->rowCount() > 0) {
            foreach ($resdb->fetch(PDO::FETCH_OBJ) as $key => $value) {
                $respuesta[$key] = $value;
            }
            return $respuesta;
        } else {
            return false;
        }
    }

    public function consultar($query, $campos)
    {
        $resdb = self::conectar()->prepare($query);
        $resdb->execute($campos);
        if ($resdb->rowCount() > 0) {
            return $resdb;
        } else {
            return false;
        }
    }

    public function crudRegistro($query, $campos)
    {
        $resdb = self::conectar()->prepare($query);
        return $resdb->execute($campos);
    }

    public function lastInsertId()
    {
        return $this->handleDB->lastInsertId();
    }
}
