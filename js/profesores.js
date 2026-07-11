// Array de profesores.
// Cada objeto guarda la información que se va a mostrar en la tarjeta y en el modal.
const profesores = [
    {
        nombre: "Maria Fernandez",
        especialidad: "Desarrollo Web",
        descripcion: "Profesora con experiencia en HTML, CSS y creación de sitios web modernos. Se enfoca en enseñar buenas prácticas para desarrollar páginas ordenadas, funcionales y atractivas.",
        foto: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg",
        correo: "maria.fernandez@auratec.com",
        cursosQueImparte: ["HTML5 desde cero", "CSS3 moderno", "Diseño web responsive"]
    },
    {
        nombre: "Carlos Ramirez",
        especialidad: "Programación",
        descripcion: "Instructor especializado en lógica de programación, JavaScript y resolución de problemas. Su objetivo es que los estudiantes aprendan paso a paso desde las bases.",
        foto: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
        correo: "carlos.ramirez@auratec.com",
        cursosQueImparte: ["Lógica de programación", "JavaScript básico", "Introducción a algoritmos"]
    },
    {
        nombre: "Laura Méndez",
        especialidad: "Bases de Datos",
        descripcion: "Docente con conocimientos en modelado de datos, consultas SQL y administración básica de bases de datos. Promueve el aprendizaje práctico mediante ejercicios reales.",
        foto: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        correo: "laura.mendez@auratec.com",
        cursosQueImparte: ["SQL básico", "Modelado de bases de datos", "Consultas relacionales"]
    },
    {
        nombre: "Andrés Vargas",
        especialidad: "Diseño Digital",
        descripcion: "Profesor orientado al diseño visual, experiencia de usuario y creación de interfaces limpias. Ayuda a los estudiantes a mejorar la presentación de sus proyectos web.",
        foto: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        correo: "andres.vargas@auratec.com",
        cursosQueImparte: ["Diseño de interfaces", "UX básico", "Prototipado digital"]
    }
];

// Se obtienen los elementos principales del HTML.
const contenedorProfesores = document.getElementById("contenedorProfesores");
const modalProfesor = document.getElementById("modalProfesor");
const btnCerrarModal = document.getElementById("btnCerrarModal");

const modalFoto = document.getElementById("modalFoto");
const modalNombre = document.getElementById("modalNombre");
const modalEspecialidad = document.getElementById("modalEspecialidad");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalCorreo = document.getElementById("modalCorreo");
const modalCursos = document.getElementById("modalCursos");

// Esta función crea las tarjetas de profesores usando JavaScript.
function renderizarProfesores() {
    contenedorProfesores.innerHTML = "";

    profesores.forEach(function(profesor, indice) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("profesor-card");

        // Se usa data-* para identificar cuál profesor fue seleccionado.
        tarjeta.setAttribute("data-indice", indice);

        const imagen = document.createElement("img");
        imagen.src = profesor.foto;
        imagen.alt = "Foto de " + profesor.nombre;

        const informacion = document.createElement("div");
        informacion.classList.add("profesor-info");

        const nombre = document.createElement("h3");
        nombre.textContent = profesor.nombre;

        const especialidad = document.createElement("h4");
        especialidad.textContent = "Especialidad: " + profesor.especialidad;

        const descripcion = document.createElement("p");
        descripcion.textContent = profesor.descripcion;

        const textoClick = document.createElement("p");
        textoClick.classList.add("texto-click");
        textoClick.textContent = "Haz clic para ver más información";

        informacion.appendChild(nombre);
        informacion.appendChild(especialidad);
        informacion.appendChild(descripcion);
        informacion.appendChild(textoClick);

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(informacion);

        // Al dar clic en la tarjeta, se abre el modal.
        tarjeta.addEventListener("click", abrirModalProfesor);

        contenedorProfesores.appendChild(tarjeta);
    });
}

// Esta función abre el modal y coloca la información del profesor seleccionado.
function abrirModalProfesor(evento) {
    const tarjetaSeleccionada = evento.currentTarget;
    const indiceProfesor = tarjetaSeleccionada.getAttribute("data-indice");
    const profesor = profesores[indiceProfesor];

    modalFoto.src = profesor.foto;
    modalFoto.alt = "Foto de " + profesor.nombre;

    modalNombre.textContent = profesor.nombre;
    modalEspecialidad.textContent = profesor.especialidad;
    modalDescripcion.textContent = profesor.descripcion;
    modalCorreo.textContent = profesor.correo;

    modalCursos.innerHTML = "";

    profesor.cursosQueImparte.forEach(function(curso) {
        const item = document.createElement("li");
        item.textContent = curso;
        modalCursos.appendChild(item);
    });

    modalProfesor.classList.add("modal-activo");
}

// Esta función cierra el modal.
function cerrarModalProfesor() {
    modalProfesor.classList.remove("modal-activo");
}

// Cierra el modal al presionar el botón X.
btnCerrarModal.addEventListener("click", cerrarModalProfesor);

// Cierra el modal al hacer clic fuera del contenido.
modalProfesor.addEventListener("click", function(evento) {
    if (evento.target === modalProfesor) {
        cerrarModalProfesor();
    }
});

// Se ejecuta la función para mostrar los profesores cuando carga la página.
renderizarProfesores();
/*
Aquí queda comentado el código de la Tarea 2.

En la Tarea 2 las tarjetas de profesores se renderizaban dinámicamente
desde JavaScript y se abría un modal al hacer clic.

Para la Tarea 3 este código no se elimina, solo se comenta, porque ahora
la información debe venir desde la base de datos usando PHP, MySQL y MVC.
*/