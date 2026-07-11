<?php

class Database
{
    private static $instancia = null;
    private $conexion;

    private function __construct()
    {
        $host = "db";
        $dbname = "academia_novatech";
        $usuario = "root";
        $password = "root";

        try {
            $this->conexion = new PDO(
                "mysql:host=$host;dbname=$dbname;charset=utf8",
                $usuario,
                $password
            );

            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch (PDOException $e) {
            die("Error de conexión a la base de datos: " . $e->getMessage());
        }
    }

    public static function getInstancia()
    {
        if (self::$instancia === null) {
            self::$instancia = new Database();
        }

        return self::$instancia;
    }

    public function getConexion()
    {
        return $this->conexion;
    }
}