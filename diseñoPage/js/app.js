const fullImgBox=document.getElementById("fullImgBox");
const fullimg=document.getElementById("fullimg");

function openFullImg(reference,valor){
    if(valor){
        fullImgBox.style.display="flex";
        fullimg.src=reference;
    }else{
        fullImgBox.style.display="flex";
        fullimg.src=reference;
        fullimg.style.width='500px';
        fullimg.style.marginLeft='35%';
        
    }
    
}

function closeImg(){
    fullImgBox.style.display="none";

}
//variable para el boton ver mas
const fullImgVert=document.querySelector('.bottom-verMas');

//variable para el segundo div de imagenes
const divMore=document.querySelector('#imgMore');

//variable para seleccionar el cuerpo
const cuerpoPrincipal=document.querySelector('#body');

//variable para el boton de aun mas
const fullFullImg=document.querySelector('.bottom-aunMas');

//variable para el tercer div de imagenes
const divMoreMore=document.querySelector('#imgMoreImg');



//funcion para el aun mas
fullFullImg.addEventListener('click',mostrarMasImagenes);

function mostrarMasImagenes(){
    if(divMoreMore.classList.contains('activo')){
        divMoreMore.classList.remove('activo');
        this.textContent='Aun más';
        divMoreMore.style.display='none';
        fullImgVert.style.display='block';
        this.style.marginTop='-57%';
        this.style.marginLeft='25%';
        cuerpoPrincipal.style.gridTemplateRows=('1825px 2500px');
    }else{
        divMoreMore.classList.add('activo');
        divMoreMore.style.display='block';
        fullImgVert.style.display='none';
        this.textContent='Ver menos...';
        this.style.marginTop='10%';
        this.style.marginLeft='43%';
        cuerpoPrincipal.style.gridTemplateRows=('2800px 2500px');
    }
}

















//Funcion para el ver mas
fullImgVert.addEventListener('click',funcionVerMas);

console.log(divMore.style.display.contains());

function funcionVerMas(){
    if(divMore.classList.contains('activo')){
        divMore.classList.remove('activo');
        divMore.style.display='none';
        this.textContent='Ver Más...';
        this.style.marginLeft='43%';
        fullFullImg.style.display='none';
        cuerpoPrincipal.style.gridTemplateRows=('820px 2500px');
    }else{
        divMore.classList.add('activo');
        divMore.style.display='block';
        this.textContent='Ver Menos...';
        this.style.marginLeft='55%';
        fullFullImg.style.display='block';
        fullFullImg.style.marginTop='-57%';
        fullFullImg.style.marginLeft='25%';
        cuerpoPrincipal.style.gridTemplateRows=('1810px 2500px');
    }
}
