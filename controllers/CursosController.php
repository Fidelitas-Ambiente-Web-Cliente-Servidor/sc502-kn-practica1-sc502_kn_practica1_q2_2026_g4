<?php
require_once __DIR__ . '/../models/CursosModel.php';

class CursosController
{
    private CursosModel $model;

    public function __construct()
    {
        $this->model = new CursosModel();
    }

    public function index(): void
    {

        $categoria = $_GET['categoria'] ?? 'Todos';

        if ($categoria === 'Todos' || $categoria === '') {
            $cursos = $this->model->getAll();
        } else {
           
            $categoriaLimpia = htmlspecialchars(trim($categoria), ENT_QUOTES, 'UTF-8');
            $cursos = $this->model->getByCategory($categoriaLimpia);
        }

        
        require __DIR__ . '/../views/cursos.php';
    }
}