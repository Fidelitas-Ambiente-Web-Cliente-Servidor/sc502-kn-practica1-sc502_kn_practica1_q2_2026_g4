// Array de cursos

const cursos = [
    {
        nombre: "Diseño de Interfaces (UI)",
        descripcion: "Crea interfaces minimalistas",
        imagen: "img/ui.jpg",
        categoria: "Diseño UI"
    },
    {
        nombre: "Experiencia de Usuario (UX)",
        descripcion: "Mejora la navegación de tus usuarios",
        imagen: "img/ux.jpg",
        categoria: "Diseño UX"
    },
    {
        nombre: "Photoshop para Web",
        descripcion: "Edición de imágenes para tus proyectos web",
        imagen: "img/photoshop.jpg",
        categoria: "Diseño Gráfico"
    }
];

// Contenedor donde se insertarán las tarjetas

const contenedor = document.getElementById("cursos-container");



cursos.forEach(curso => {

    // Tarjeta principal
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("curso-card");

    // Imagen
    const imagen = document.createElement("img");
    imagen.src = curso.imagen;
    imagen.alt = curso.nombre;

    // Categoría
    const categoria = document.createElement("span");
    categoria.classList.add("categoria");
    categoria.textContent = curso.categoria;

    // Nombre
    const titulo = document.createElement("h3");
    titulo.textContent = curso.nombre;

    // Descripción
    const descripcion = document.createElement("p");
    descripcion.textContent = curso.descripcion;

    // Botón
    const boton = document.createElement("a");
    boton.href = "cursos.html";
    boton.classList.add("btn-card");
    boton.textContent = "Ver más";

    // Agregar elementos a la tarjeta
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(categoria);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(boton);

    // Agregar tarjeta al DOM
    contenedor.appendChild(tarjeta);
});