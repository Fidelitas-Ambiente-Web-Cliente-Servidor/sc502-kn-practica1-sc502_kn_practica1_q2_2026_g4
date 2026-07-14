/* document.addEventListener("DOMContentLoaded", function () {
    
    const cursos = [
        {
            nombre: "HTML5 y CSS3",
            descripcion: "Aprende a crear sitios web desde cero.",
            categoria: "Frontend",
            duracion: "40 horas",
            precio: "₡50.000",
            imagen: "img/html-css.jpg"
        },
        {
            nombre: "JavaScript Básico",
            descripcion: "Agrega interactividad a tus sitios.",
            categoria: "Frontend",
            duracion: "50 horas",
            precio: "₡60.000",
            imagen: "img/js.jpg"
        },
        {
            nombre: "PHP y MySQL",
            descripcion: "Conecta tu web a bases de datos y servidores.",
            categoria: "Backend",
            duracion: "60 horas",
            precio: "₡70.000",
            imagen: "img/php.jpg"
        },
        {
            nombre: "Diseño de Interfaces (UI)",
            descripcion: "Crea interfaces minimalistas y atractivas.",
            categoria: "Diseño",
            duracion: "30 horas",
            precio: "₡45.000",
            imagen: "img/ui.jpg"
        },
        {
            nombre: "Experiencia de Usuario (UX)",
            descripcion: "Mejora la navegación de tus usuarios en la web.",
            categoria: "Diseño",
            duracion: "35 horas",
            precio: "₡55.000",
            imagen: "img/ux.jpg"
        },
        {
            nombre: "Photoshop para Web",
            descripcion: "Edición de imágenes para tus proyectos digitales.",
            categoria: "Herramientas",
            duracion: "20 horas",
            precio: "₡40.000",
            imagen: "img/photoshop.jpg"
        }
    ];

    const contenedor = document.getElementById("contenedor-cursos");
    const buscador = document.getElementById("buscador");
    const filtroCategoria = document.getElementById("filtro-categoria");
    const tituloCategoria = document.getElementById("titulo-categoria");

    function renderizarCursos(listaCursos) {
        contenedor.innerHTML = "";

        if (listaCursos.length === 0) {
            contenedor.innerHTML = "<p>No se encontraron cursos con esos criterios.</p>";
            return;
        }

        listaCursos.forEach(curso => {
            const tarjetaHTML = `
                <article class="tarjeta-curso">
                    <img src="${curso.imagen}" alt="Curso ${curso.nombre}" class="img-curso">
                    <h3>${curso.nombre}</h3>
                    <p><strong>Categoría:</strong> ${curso.categoria}</p>
                    <p>${curso.descripcion}</p>
                    <p><em>Duración: ${curso.duracion}</em> | Precio: ${curso.precio}</p>
                </article>
            `;
            contenedor.innerHTML += tarjetaHTML;
        });
    }

    function filtrarCursos() {
        const textoBusqueda = buscador.value.toLowerCase();
        const categoriaSeleccionada = filtroCategoria.value;

        const cursosFiltrados = cursos.filter(curso => {
            const coincideTexto = curso.nombre.toLowerCase().includes(textoBusqueda) || 
                                  curso.descripcion.toLowerCase().includes(textoBusqueda);
            
            const coincideCategoria = categoriaSeleccionada === "Todos" || curso.categoria === categoriaSeleccionada;

            return coincideTexto && coincideCategoria;
        });

        if (categoriaSeleccionada === "Todos") {
            tituloCategoria.innerText = "Todos los Cursos";
        } else {
            tituloCategoria.innerText = `Cursos de ${categoriaSeleccionada}`;
        }

        renderizarCursos(cursosFiltrados);
    }


    buscador.addEventListener("input", filtrarCursos);
    
    filtroCategoria.addEventListener("change", filtrarCursos);

    renderizarCursos(cursos);
});
*/