const fullImgBox=document.getElementById("fullImgBox");
const fullimg=document.getElementById("fullimg");

function openFullImg(reference,valor){
    if(valor){
        fullImgBox.style.display="flex";
        fullimg.src=reference;
    }else{
        fullImgBox.style.display="flex";
        fullimg.src=reference;
        fullimg.style.width=400;
        fullimg.style.height=auto;
    }
    
}

function closeImg(){
    fullImgBox.style.display="none";

}

