//Variables

const btnEnviar = document.querySelector('#boton-enviar');
const formulario = document.querySelector('#formulario');
const contenidoNoticia = document.querySelector('#content-notice');
const form=document.querySelector('.form');

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
    //Cuando la pagina arranca, convoca a la funcion iniciarApp
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del formulario
    //Para campo, valida si no esta vacio
    nombre.addEventListener('blur', validarFormulario);
    apellido.addEventListener('blur', validarFormulario);
    nroTelefono.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    //Enviar Email, cuando precione el boton enviar
    formulario.addEventListener('submit', enviarEmail);
}


//Funciones

//Esta funcion desabilita el boton de enviar y le da estilos de desabilitado, que estan
//reflejados en el CSS
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('btn-disable');
}

//Esta funcion valida los formularios, si esta vacio muestra el mensaje, o si el email
//no tiene la composicion correcta muestra el mensaje de error
function validarFormulario(e) {
    if (e.target.value.length > 0) {

        //Elimina el mensaje de error cuando se coloca bien el campo
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
    //Pregunta si el campo es de email
    if (e.target.type === 'email') {
        //luego verifica a traves de validaciones
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
    //Si todo esta correcto habilita el boton enviar 
    if (er.test(email.value) && apellido.value !== '' && nroTelefono.value !== '' && nombre.value !== '' && mensaje.value !== '') {
        btnEnviar.classList.remove('btn-disable');
        btnEnviar.classList.add('btn-enable');
        btnEnviar.disabled = false;
    }
}
//Muestra un mensaje de error, ya sea por campo vacio o por falta de formato del email, recibe por parametro el mensaje
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

//Envia el email, muestra el spinner por 3 segundos y cuando desaparece el spinner
//Aparece el mensaje de enviado correctamente
function enviarEmail(e) {
    e.preventDefault();
    //mostrar el spinner
    const spinner = document.querySelector('#spinner');
    contenidoNoticia.style.gridTemplateRows = ('725px 390px 1fr 1fr');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none';
        //Despues de tres segundos ocultar el spinner y mostrar el mensaje
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envio correctamente';
        parrafo.classList.add('resultado-p','logrado-parrafo');
        const resultado = document.querySelector('#resultado');
        contenidoNoticia.style.gridTemplateRows = ('700px 390px 1fr 1fr');
        resultado.appendChild(parrafo);
        setTimeout(()=>{
            parrafo.remove();
            contenidoNoticia.style.gridTemplateRows = ('625px 390px 1fr 1fr');
            resetearFormulario();
        },5000);
    },3000);
}

//Funcion que resetea el formulario
function resetearFormulario(){
    form.reset();
    iniciarApp();
}