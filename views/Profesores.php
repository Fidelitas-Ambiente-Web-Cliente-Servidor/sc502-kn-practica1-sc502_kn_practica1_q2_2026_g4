<main>

    <section class="profesores-header">
        <h2>Equipo de Profesores</h2>
        <p>
            En Academia NovaTech contamos con un equipo de profesionales capacitados,
            comprometidos con la enseñanza y el desarrollo de habilidades tecnológicas
            en nuestros estudiantes.
        </p>
    </section>

    <section class="profesores-contenedor">

        <?php foreach ($profesores as $profesor): ?>

            <article class="profesor-card">
                <img src="<?php echo htmlspecialchars($profesor["foto"]); ?>" 
                     alt="Foto de <?php echo htmlspecialchars($profesor["nombre"]); ?>">

                <div class="profesor-info">
                    <h3><?php echo htmlspecialchars($profesor["nombre"]); ?></h3>

                    <h4>
                        Especialidad:
                        <?php echo htmlspecialchars($profesor["especialidad"]); ?>
                    </h4>

                    <p>
                        <?php echo htmlspecialchars($profesor["descripcion"]); ?>
                    </p>

                    <a class="btn-detalle" 
                       href="index.php?controller=profesores&action=show&id=<?php echo $profesor["id"]; ?>">
                        Ver detalle
                    </a>
                </div>
            </article>

        <?php endforeach; ?>

    </section>

    <section class="mision-vision">
        <div class="bloque-info">
            <h3>Misión</h3>
            <p>
                Formar estudiantes capaces de desarrollar habilidades tecnológicas mediante
                una educación práctica, accesible y actualizada, fortaleciendo su creatividad,
                pensamiento lógico y capacidad para resolver problemas.
            </p>
        </div>

        <div class="bloque-info">
            <h3>Visión</h3>
            <p>
                Ser una academia reconocida por impulsar el aprendizaje tecnológico de calidad,
                preparando a los estudiantes para enfrentar los retos del mundo digital y
                contribuir positivamente en su entorno profesional.
            </p>
        </div>
    </section>

</main>