<?php
require_once __DIR__ . "/../config/database.php";

class ContactoModel
{
    private $conexion;

    public function __construct()
    {
        $this->conexion = Database::getInstancia()->getConexion();
    }

    public function create($datos)
    {
        $sql = "INSERT INTO contacto (nombre_completo, correo, telefono, asunto, mensaje)
                VALUES (:nombre_completo, :correo, :telefono, :asunto, :mensaje)";

        $stmt = $this->conexion->prepare($sql);

        $stmt->bindParam(":nombre_completo",    $datos["nombre_completo"]);
        $stmt->bindParam(":correo",             $datos["correo"]);
        $stmt->bindParam(":telefono",           $datos["telefono"]);
        $stmt->bindParam(":asunto",             $datos["asunto"]);
        $stmt->bindParam(":mensaje",            $datos["mensaje"]);

        return $stmt->execute();
    }
}
