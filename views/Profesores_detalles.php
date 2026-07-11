<main>

    <section class="profesores-header">
        <h2>Detalle del Profesor</h2>
        <p>
            Información completa del profesor seleccionado.
        </p>
    </section>

    <?php if ($profesor): ?>

        <section class="detalle-profesor">

            <div class="detalle-card">
                <img src="<?php echo htmlspecialchars($profesor["foto"]); ?>" 
                     alt="Foto de <?php echo htmlspecialchars($profesor["nombre"]); ?>">

                <h3><?php echo htmlspecialchars($profesor["nombre"]); ?></h3>

                <h4>
                    Especialidad:
                    <?php echo htmlspecialchars($profesor["especialidad"]); ?>
                </h4>

                <p>
                    <?php echo htmlspecialchars($profesor["descripcion"]); ?>
                </p>

                <p>
                    <strong>Correo:</strong>
                    <?php echo htmlspecialchars($profesor["correo"]); ?>
                </p>

                <p>
                    <strong>Cursos que imparte:</strong>
                    <?php echo htmlspecialchars($profesor["cursos_que_imparte"]); ?>
                </p>

                <a class="btn-detalle" href="index.php?controller=profesores&action=index">
                    Volver a profesores
                </a>
            </div>

        </section>

    <?php else: ?>

        <section class="detalle-profesor">
            <p>No se encontró el profesor solicitado.</p>

            <a class="btn-detalle" href="index.php?controller=profesores&action=index">
                Volver a profesores
            </a>
        </section>

    <?php endif; ?>

</main>