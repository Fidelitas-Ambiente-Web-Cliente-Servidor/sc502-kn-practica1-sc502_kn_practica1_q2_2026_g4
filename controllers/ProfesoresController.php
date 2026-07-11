<?php

require_once __DIR__ . "/../models/ProfesorModel.php";

// Esta clase controla las acciones relacionadas con profesores.
class ProfesoresController
{
    private $modelo;

    public function __construct()
    {
        $this->modelo = new ProfesorModel();
    }

    // Muestra la lista completa de profesores.
    public function index()
    {
        $profesores = $this->modelo->getAll();

        require __DIR__ . "/../views/layout/header.php";
        require __DIR__ . "/../views/profesores.php";
        require __DIR__ . "/../views/layout/footer.php";
    }

    // Muestra el detalle de un profesor por medio del id.
    public function show()
    {
        $id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;

        if ($id <= 0) {
            header("Location: index.php?controller=profesores&action=index");
            exit;
        }

        $profesor = $this->modelo->getById($id);

        require __DIR__ . "/../views/layout/header.php";
        require __DIR__ . "/../views/profesor_detalle.php";
        require __DIR__ . "/../views/layout/footer.php";
    }
}