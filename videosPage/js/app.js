//Variables

const btnEnviar = document.querySelector('#boton-enviar');
const formulario = document.querySelector('#formulario');
const contenidoNoticia = document.querySelector('#content-notice');

//Variables para campos
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const email = document.querySelector('#email')
const nroTelefono = document.querySelector('#nro-telefono')
const mensaje = document.querySelector('#mensaje')
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;










//Event Listeners
eventListeners();
function eventListeners() {
    //Cuando la pagina arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    nombre.addEventListener('blur', validarFormulario);
    apellido.addEventListener('blur', validarFormulario);
    nroTelefono.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //Enviar Email
    
}










//Funciones

function iniciarApp() {
    btnEnviar.classList.add('btn-disable');
    btnEnviar.disabled = true;
}

function validarFormulario(e) {
    if (e.target.value.length > 0) {

        //Eliminar los errores
        const mensajeErrorParrafo = document.querySelector('p.error-parrafo');
        if (mensajeErrorParrafo) {
            mensajeErrorParrafo.remove();
            contenidoNoticia.style.gridTemplateRows = ('625px 390px 1fr 1fr');
        }
        e.target.classList.remove('error');
        e.target.classList.add('error-none');
    } else {
        e.target.classList.remove('error-none');
        e.target.classList.add('error');
        mostrarError('Todos lo campos son obligatorios');
    }
    if (e.target.type === 'email') {

        if (er.test(e.target.value)) {
            const mensajeErrorParrafo = document.querySelector('p.error-parrafo');
            if (mensajeErrorParrafo) {
                mensajeErrorParrafo.remove();
                contenidoNoticia.style.gridTemplateRows = ('625px 390px 1fr 1fr');
            }
            e.target.classList.remove('error');
            e.target.classList.add('error-none');
        } else {
            e.target.classList.remove('error-none');
            e.target.classList.add('error');
            mostrarError('Email no válido');
        }
    }
    if (er.test(email.value) && apellido.value !== '' && nroTelefono.value !== '' && nombre.value !== '' && mensaje.value !== '') {
        btnEnviar.classList.remove('btn-disable');
        btnEnviar.classList.add('btn-enable');
        btnEnviar.disabled = false;
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('resultado-p', 'error-parrafo');
    const resultado = document.querySelector('#resultado');
    const errores = document.querySelectorAll('.error-parrafo');
    if (errores.length === 0) {
        contenidoNoticia.style.gridTemplateRows = ('700px 390px 1fr 1fr');
        resultado.appendChild(mensajeError);
    }
}