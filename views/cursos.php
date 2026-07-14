<?php require_once __DIR__ . '/layout/header.php'; ?>


<link rel="stylesheet" href="css/cursos.css">

<main>
    <header class="header-cursos">
        <h1>Catálogo de Cursos</h1>
        <p>Encuentra el curso ideal para ti.</p>

        <form method="GET" action="index.php" style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
            <input type="hidden" name="controller" value="cursos">
            <input type="hidden" name="action" value="index">
            
            <input type="text" id="buscador" class="buscador" style="margin-top: 0; width: 40%;" placeholder="Buscar por nombre... (Usa JS)">
            
            <select name="categoria" id="filtro-categoria" class="buscador" style="margin-top: 0; width: 30%;" onchange="this.form.submit()">
                <option value="Todos" <?php echo ($categoria === 'Todos') ? 'selected' : ''; ?>>Todas las Categorías</option>
                <option value="Desarrollo Web" <?php echo ($categoria === 'Desarrollo Web') ? 'selected' : ''; ?>>Desarrollo Web</option>
                <option value="Diseño Web" <?php echo ($categoria === 'Diseño Web') ? 'selected' : ''; ?>>Diseño Web</option>
                <option value="Programación" <?php echo ($categoria === 'Programación') ? 'selected' : ''; ?>>Programación</option>
                <option value="Bases de Datos" <?php echo ($categoria === 'Bases de Datos') ? 'selected' : ''; ?>>Bases de Datos</option>
                <option value="Diseño Digital" <?php echo ($categoria === 'Diseño Digital') ? 'selected' : ''; ?>>Diseño Digital</option>
            </select>
        </form>
    </header>

    <section class="categoria">
        <h2 id="titulo-categoria">
            <?php echo ($categoria === 'Todos') ? 'Todos los Cursos' : 'Cursos de ' . htmlspecialchars($categoria); ?>
        </h2>
        
        <div id="contenedor-cursos" class="contenedor-cursos">
            <?php if (!empty($cursos)): ?>
                <?php foreach ($cursos as $curso): ?>
                    <div class="tarjeta-curso">
                        <img src="<?php echo htmlspecialchars($curso['imagen']); ?>" alt="<?php echo htmlspecialchars($curso['nombre']); ?>" class="img-curso">
                        <h3><?php echo htmlspecialchars($curso['nombre']); ?></h3>
                        <p><?php echo htmlspecialchars($curso['descripcion']); ?></p>
                        
                        <p style="font-size: 0.9rem; color: #555;">
                            <strong>Categoría:</strong> <?php echo htmlspecialchars($curso['categoria']); ?><br>
                            <strong>Duración:</strong> <?php echo htmlspecialchars($curso['duracion']); ?>
                        </p>
                        
                        <p class="precio">₡<?php echo number_format($curso['precio'], 2); ?></p>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <p>No se encontraron cursos en esta categoría.</p>
            <?php endif; ?>
        </div>
    </section>
</main>


<script src="js/cursos.js"></script>

<?php require_once __DIR__ . '/layout/footer.php'; ?>