// Obtener los elementos del formulario y el mensaje de error
var formulario = document.getElementById('formularioContacto'),
    Nombre = formulario.Nombre,
    Apellido = formulario.Apellido,
    NúmeroCelular = formulario.NúmeroCelular,
    CorreoElectrónico = formulario.CorreoElectrónico,
    Mensaje = formulario.Mensaje,
    Tipo = formulario.Tipo,
    Terminos = formulario.Terminos,
    error = document.getElementById('error');

// Función para validar el nombre
function validarNombre(e){
    var mensajeError = '';
    if (Nombre.value == '' || Nombre.value == null){
        mensajeError = 'Ingresa un Nombre válido';
    }
    return mensajeError;
}

// Función para validar el apellido
function validarApellido(e){
    var mensajeError = '';
    if (Apellido.value == '' || Apellido.value == null){
        mensajeError = 'Ingresa un Apellido válido';
    }
    return mensajeError;
}

// Función para validar el número de celular
function validarCelular(e){
    var mensajeError = '';
    if (NúmeroCelular.value == '' || NúmeroCelular.value == null){
        mensajeError = 'Ingresa un Número de Celular válido';
    }
    return mensajeError;
}

// Función para validar el correo electrónico
function validarEmail(e){
    var mensajeError = '';
    if (CorreoElectrónico.value == '' || CorreoElectrónico.value == null){
        mensajeError = 'Ingresa un Email válido';
    }
    return mensajeError;
}

// Función para validar el mensaje
function validarMensaje(e){
    var mensajeError = '';
    if (Mensaje.value == '' || Mensaje.value == null){
        mensajeError = 'No puedes mandar un Mensaje en blanco';
    }
    return mensajeError;
}

// Función para validar el usuario
function validarUsuario(e){
    var mensajeError = '';
    if (Tipo.value == '' || Tipo.value == null){
        mensajeError = 'Selecciona un Tipo de Usuario';
    }
    return mensajeError;
}

// Función para validar la aceptación de términos y condiciones
function validarTerms(e){
    var mensajeError = '';
    if (Terminos.checked == false){
        mensajeError = 'Es necesario aceptar los Términos & Condiciones';
    }
    return mensajeError;
}

// Función principal para validar el formulario
function validarForm(e){
    // Reiniciamos el mensaje de error para que inicie sin mensaje.
    error.innerHTML = '';

    // Ejecutar todas las funciones de validación y acumular los mensajes de error
    var mensajesError = [];
    mensajesError.push(validarNombre(e));
    mensajesError.push(validarApellido(e));
    mensajesError.push(validarCelular(e));
    mensajesError.push(validarEmail(e));
    mensajesError.push(validarMensaje(e));
    mensajesError.push(validarUsuario(e));
    mensajesError.push(validarTerms(e));

    // Filtrar los mensajes de error para eliminar los vacíos
    mensajesError = mensajesError.filter(function(mensaje) {
        return mensaje !== '';
    });

    // Si hay mensajes de error, mostrarlos y detener la ejecución del formulario
    if (mensajesError.length > 0) {
        error.style.display = 'block';
        mensajesError.forEach(function(mensaje) {
            error.innerHTML += '<li>' + mensaje + '</li>';
        });
        e.preventDefault();
    } else {
        error.style.display = 'none';
        console.log(`Nuevo Mensaje\nNombre: ${Nombre.value} ${Apellido.value}\nCelular: ${NúmeroCelular.value}\nE-Mail: ${CorreoElectrónico.value}\nTipo de Usuario: ${Tipo.value}`);
        alert("Mensaje enviado " + Nombre.value + " " + Apellido.value + ".\n¡Gracias!");
    }
}

// Evento que escucha el envío del formulario y llama a la función principal de validación
formulario.addEventListener('submit', validarForm);

// Hora y fecha
function mostrarFechaHoraActual(){
 // Crear un nuevo objeto Date
 var fechaHoraActual = new Date();

 // Obtener la fecha y hora actual
 var fecha = fechaHoraActual.toLocaleDateString();
 var hora = fechaHoraActual.toLocaleTimeString();
 var fechaYHora = fecha + " " + hora;

 // Mostrar la fecha y hora actual en el párrafo con id="fechaHora"
 document.getElementById("fechaHora").innerHTML = fechaYHora;
}    

// Llamar a la función inicialmente para mostrar la fecha y hora actual
mostrarFechaHoraActual();

// Actualizar la fecha y hora cada segundo
setInterval(mostrarFechaHoraActual, 1000);

//Para el Slider
$(document).ready(function(){
    $(".slider").bxSlider({
        mode: 'fade',
        auto: true,
        pause: 2500
    });
});

//Para el botón del footer
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
