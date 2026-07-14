<?php
require_once __DIR__ . '/../config/database.php';

class CursosModel
{
    private $db;

    public function __construct()
    {
      
        $this->db = Database::getInstancia()->getConexion();
    } 

    public function getAll(): array
    {
        $stmt = $this->db->query('SELECT * FROM cursos ORDER BY id ASC');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByCategory(string $categoria): array
    {
        $stmt = $this->db->prepare('SELECT * FROM cursos WHERE categoria = :categoria ORDER BY id ASC');
        $stmt->execute([':categoria' => $categoria]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}