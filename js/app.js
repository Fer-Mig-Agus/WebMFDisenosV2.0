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

const fullImgVert=document.querySelector('.bottom-verMas');
const masInfo=document.querySelector('#mas-info-tarjetas');
const divMore=document.querySelector('#imgMore');

fullImgVert.addEventListener('click',funcionVerMas);

console.log(divMore.style.display.contains());

function funcionVerMas(){
    if(divMore.classList.contains('activo')){
        divMore.classList.remove('activo');
        divMore.style.display='none';
        masInfo.style.display='none';
        this.textContent='Ver Mas...'
    }else{
        divMore.classList.add('activo');
        divMore.style.display='block';
        masInfo.style.display='block';
        this.textContent='Ver Menos...'
    }
}

