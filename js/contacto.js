// Se espera a que el HTML cargue completamente antes de ejecutar el codigo
document.addEventListener("DOMContentLoaded", function () {

    // Se obtienen los campos del formulario usando getElementById
    let campoNombre   = document.getElementById("nombre");
    let campoCorroo   = document.getElementById("correo");
    let campoTelefono = document.getElementById("telefono");
    let campoAsunto   = document.getElementById("asunto");
    let campoMensaje  = document.getElementById("mensaje");
    let btnEnviar     = document.getElementById("btnEnviar");
    let formulario    = document.getElementById("formularioContacto");

    // Estas variables guardan si cada campo esta bien o no
    // Empiezan en false porque el formulario esta vacio al inicio
    let nombreValido   = false;
    let correoValido   = false;
    let telefonoValido = false;
    let asuntoValido   = false;
    let mensajeValido  = false;

    // Esta funcion revisa si todos los campos son validos
    // Si todos son true, habilita el boton, si no, lo deshabilita
    function revisarBoton() {
        if (nombreValido && correoValido && telefonoValido && asuntoValido && mensajeValido) {
            btnEnviar.disabled = false;
        } else {
            btnEnviar.disabled = true;
        }
    }

    // Esta funcion muestra el mensaje de error debajo del campo
    // Si el mensaje esta vacio significa que el campo esta bien
    function mostrarError(idError, mensaje) {
        let elementoError = document.getElementById(idError);
        elementoError.textContent = mensaje;
    }

    // Validacion del nombre
    // Debe tener minimo 5 caracteres y solo letras y espacios
    function validarNombre() {
        let valor = campoNombre.value.trim();
        let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(valor);

        if (valor.length < 5) {
            mostrarError("error-nombre", "El nombre debe tener al menos 5 caracteres.");
            campoNombre.style.borderColor = "#e74c3c";
            nombreValido = false;
        } else if (!soloLetras) {
            mostrarError("error-nombre", "El nombre solo puede tener letras y espacios.");
            campoNombre.style.borderColor = "#e74c3c";
            nombreValido = false;
        } else {
            mostrarError("error-nombre", "");
            campoNombre.style.borderColor = "#457b9d";
            nombreValido = true;
        }

        revisarBoton();
    }

    // Validacion del correo electronico
    // Se usa una expresion regular para verificar que tenga el formato correcto
    function validarCorreo() {
        let valor = campoCorroo.value.trim();
        let formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

        if (!formatoValido) {
            mostrarError("error-correo", "Ingresa un correo válido. Ejemplo: nombre@correo.com");
            campoCorroo.style.borderColor = "#e74c3c";
            correoValido = false;
        } else {
            mostrarError("error-correo", "");
            campoCorroo.style.borderColor = "#457b9d";
            correoValido = true;
        }

        revisarBoton();
    }

    // Validacion del telefono
    // Solo se permiten numeros y debe tener al menos 8 digitos
    function validarTelefono() {
        let valor = campoTelefono.value.trim();
        let soloNumeros = /^\d+$/.test(valor);

        if (!soloNumeros) {
            mostrarError("error-telefono", "El teléfono solo puede tener números.");
            campoTelefono.style.borderColor = "#e74c3c";
            telefonoValido = false;
        } else if (valor.length < 8) {
            mostrarError("error-telefono", "El teléfono debe tener al menos 8 dígitos.");
            campoTelefono.style.borderColor = "#e74c3c";
            telefonoValido = false;
        } else {
            mostrarError("error-telefono", "");
            campoTelefono.style.borderColor = "#457b9d";
            telefonoValido = true;
        }

        revisarBoton();
    }

    // Validacion del asunto
    // Debe tener al menos 3 caracteres
    function validarAsunto() {
        let valor = campoAsunto.value.trim();

        if (valor.length < 3) {
            mostrarError("error-asunto", "El asunto debe tener al menos 3 caracteres.");
            campoAsunto.style.borderColor = "#e74c3c";
            asuntoValido = false;
        } else {
            mostrarError("error-asunto", "");
            campoAsunto.style.borderColor = "#457b9d";
            asuntoValido = true;
        }

        revisarBoton();
    }

    // Validacion del mensaje
    // Debe tener al menos 20 caracteres
    function validarMensaje() {
        let valor = campoMensaje.value.trim();

        if (valor.length < 20) {
            mostrarError("error-mensaje", "El mensaje debe tener al menos 20 caracteres. Llevas " + valor.length + " hasta ahora.");
            campoMensaje.style.borderColor = "#e74c3c";
            mensajeValido = false;
        } else {
            mostrarError("error-mensaje", "");
            campoMensaje.style.borderColor = "#457b9d";
            mensajeValido = true;
        }

        revisarBoton();
    }

    // Se asignan los eventos a cada campo
    // "input" valida mientras el usuario escribe
    // "blur" valida cuando el usuario sale del campo
    campoNombre.addEventListener("input", validarNombre);
    campoNombre.addEventListener("blur",  validarNombre);

    campoCorroo.addEventListener("input", validarCorreo);
    campoCorroo.addEventListener("blur",  validarCorreo);

    campoTelefono.addEventListener("input", validarTelefono);
    campoTelefono.addEventListener("blur",  validarTelefono);

    campoAsunto.addEventListener("input", validarAsunto);
    campoAsunto.addEventListener("blur",  validarAsunto);

    campoMensaje.addEventListener("input", validarMensaje);
    campoMensaje.addEventListener("blur",  validarMensaje);

    // Cuando el formulario es valido se envia el POST al servidor (ContactoController@store)
    formulario.addEventListener("submit", function () {
        nombreValido   = false;
        correoValido   = false;
        telefonoValido = false;
        asuntoValido   = false;
        mensajeValido  = false;
        btnEnviar.disabled = true;
    });

});
