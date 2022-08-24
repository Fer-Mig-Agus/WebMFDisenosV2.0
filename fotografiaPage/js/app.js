//Variables
let imagenes = ['img/foto1.png', 'img/foto2.png', 'img/foto3.png'];
const buttomBox = document.querySelector('.buttom-box');
const img = document.querySelector('#imagen-carrusel');


addEvenlistener();

//Add evenlisteners
function addEvenlistener() {
    buttomBox.addEventListener('click', carrousel);
}

//Funciones
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


const fullImgBox=document.getElementById("fullImgBox");
const fullimg=document.getElementById("fullimg");

function openFullImg(reference){
    if(reference){
        fullImgBox.style.display="flex";
        fullimg.src=reference;
        fullimg.style.width='900px';
        fullimg.style.marginLeft='15%';
        buttomBox.style.display="none";
    }
}

function closeImg(){
    fullImgBox.style.display="none";
    buttomBox.style.display="grid";

}