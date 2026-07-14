<?php
require_once __DIR__ . "/../models/ContactoModel.php";

class ContactoController
{
    private $modelo;

    public function __construct()
    {
        $this->modelo = new ContactoModel();
    }

    // Muestra el formulario de contacto
    public function index()
    {
        require __DIR__ . "/../views/layout/header.php";
        require __DIR__ . "/../views/contacto.php";
        require __DIR__ . "/../views/layout/footer.php";
    }

    // Recibe el POST y guarda el mensaje en la base de datos
    public function store()
    {
        if ($_SERVER["REQUEST_METHOD"] === "POST") {

            $datos = [
                "nombre_completo" => $_POST["nombre"]   ?? "",
                "correo"          => $_POST["correo"]   ?? "",
                "telefono"        => $_POST["telefono"] ?? "",
                "asunto"          => $_POST["asunto"]   ?? "",
                "mensaje"         => $_POST["mensaje"]  ?? ""
            ];

            $this->modelo->create($datos);
        }

        header("Location: index.php?controller=contacto&action=index");
        exit;
    }
}