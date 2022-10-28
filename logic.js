const openbtn = document.querySelector(".resp-ico");
const closebtn = document.querySelector(".clo-ico");

const ulc = document.querySelector('.NAVBAR');



openbtn.addEventListener("click",()=>{
    ulc.style.right = "0"; 
})
closebtn.addEventListener("click",()=>{
    ulc.style.right = "-100%"; 
})