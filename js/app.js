const fullImgBox=document.getElementById("fullImgBox");
const fullimg=document.getElementById("fullimg");

function openFullImg(reference){
    fullImgBox.style.display="flex";
    fullimg.src=reference;
}

function closeImg(){
    fullImgBox.style.display="none";

}

