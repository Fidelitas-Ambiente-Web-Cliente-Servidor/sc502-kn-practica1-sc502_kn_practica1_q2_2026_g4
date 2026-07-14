<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);


$controller = isset($_GET["controller"]) ? $_GET["controller"] : "index";
$action = isset($_GET["action"]) ? $_GET["action"] : "index";

switch ($controller) {
    case "profesores": // Módulo del Estudiante 3
        require_once "controllers/ProfesoresController.php";
        $controlador = new ProfesoresController();
        break;

    case "cursos": // ¡ESTE ES TU MÓDULO (Estudiante 2)!
        require_once "controllers/CursosController.php";
        $controlador = new CursosController();
        break;
    
    case "contacto":
        require_once "controllers/ContactoController.php";
        $controlador = new ContactoController();
        break;

    default:

        require_once "controllers/ProfesoresController.php";
        $controlador = new ProfesoresController();
        break;
}

if (isset($controlador) && method_exists($controlador, $action)) {
    $controlador->$action();
} else {
    echo "La acción solicitada no existe.";
}
