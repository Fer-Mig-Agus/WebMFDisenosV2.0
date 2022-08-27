//Variables para el carrousel
//la variable imagenes guarda las rutas de las imagenes
let imagenes = ['img/foto1.png', 'img/foto2.png', 'img/foto3.png'];
const buttomBox = document.querySelector('.buttom-box');
const img = document.querySelector('#imagen-carrusel');


addEvenlistener();

//Add evenlisteners
function addEvenlistener() {
    buttomBox.addEventListener('click', carrousel);
}

//Funciones
//Esta funcion hace que cuando precionan las flechas cambie la imagen
let cont = 0;
function carrousel(e) {
    if (e.target.classList.contains('atras-img')){
        if (cont > 0) {
            img.src = imagenes[cont-1];
            cont--;
        } else {
            img.src = imagenes[imagenes.length - 1];
            cont = imagenes.length-1;
        }
    } else if (e.target.classList.contains('adelante-img')) {
        if (cont < imagenes.length - 1) {
            img.src = imagenes[cont+1];
            cont++;
        } else {
            img.src = imagenes[0];
            cont = 0;
        }
    }
}

//Variables para la ventana que se ejecuta cuando se hace un click en la imagen
const fullImgBox=document.getElementById("fullImgBox");
const fullimg=document.getElementById("fullimg");
//Funcion que abre la imagen cuando la hacen click
function openFullImg(reference){
    if(reference){
        fullImgBox.style.display="flex";
        fullimg.src=reference;
        fullimg.style.width='900px';
        fullimg.style.marginLeft='15%';
        buttomBox.style.display="none";
    }
}
//Funcion que cierra la ventana que se ejecuta cuando le hacen click a la imagen
function closeImg(){
    fullImgBox.style.display="none";
    buttomBox.style.display="grid";

}