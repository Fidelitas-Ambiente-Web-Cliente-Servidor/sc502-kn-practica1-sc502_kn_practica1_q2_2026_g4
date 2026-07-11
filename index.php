<?php


ini_set('display_errors', 1);
error_reporting(E_ALL);



$controller = isset($_GET["controller"]) ? $_GET["controller"] : "profesores";
$action = isset($_GET["action"]) ? $_GET["action"] : "index";


switch ($controller) {
    case "profesores":
        require_once "controllers/ProfesoresController.php";
        $controlador = new ProfesoresController();
        break;

    default:
        require_once "controllers/ProfesoresController.php";
        $controlador = new ProfesoresController();
        break;
}


if (method_exists($controlador, $action)) {
    $controlador->$action();
} else {
    echo "La acción solicitada no existe.";
}