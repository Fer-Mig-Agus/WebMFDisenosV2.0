
//Estas son variables para la imagen que se abre en otra ventana
const fullImgBox=document.getElementById("fullImgBox");
const fullimg=document.getElementById("fullimg");

//Esta funcion abre y modifica el tamaño de la imagen, dependiendo si es vertical u Horizontal
function openFullImg(reference,valor){
    if(valor){
        fullImgBox.style.display="flex";
        fullimg.src=reference;
        fullimg.style.width='900px';
        fullimg.style.marginLeft='15%';
    }else{
        fullImgBox.style.display="flex";
        fullimg.src=reference;
        fullimg.style.width='500px';
        fullimg.style.marginLeft='35%';
        
    }
    
}
//Cierra la ventana en donde se muestra las imagenes

function closeImg(){
    fullImgBox.style.display="none";

}

//Estas variables son para el boton ver mas
const fullImgVert=document.querySelector('.bottom-verMas');
const masInfo=document.querySelector('#mas-info-tarjetas');
const divMore=document.querySelector('#imgMore');
const divNosotros=document.querySelector('#nosotros');
const cuerpoPrincipal=document.querySelector('#cuerpo');
//este es un evento click, que llama a la funcion ver mas
fullImgVert.addEventListener('click',funcionVerMas);
//Funcion ver mas que modifica el tamaño de la seccion del cuerpo
//para que se muestren mas imagenes de los trabajos realizados
function funcionVerMas(){
    if(divMore.classList.contains('activo')){
        divMore.classList.remove('activo');
        divMore.style.display='none';
        masInfo.style.display='none';
        this.textContent='Ver Más...';
        cuerpoPrincipal.style.gridTemplateRows=('820px 1250px');
    }else{
        divMore.classList.add('activo');
        divMore.style.display='block';
        masInfo.style.display='block';
        this.textContent='Ver Menos...';
        cuerpoPrincipal.style.gridTemplateRows=('1810px 1250px');
    }
}

