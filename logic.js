const openbtn = document.querySelector(".resp-ico");
const closebtn = document.querySelector(".clo-ico");
const ulc = document.querySelector('.NAVBAR');

openbtn.addEventListener("click",()=>{
    ulc.style.right = "0"; 
})
closebtn.addEventListener("click",()=>{
    ulc.style.right = "-100%"; 
})

const allmenu =document.getElementById("categorie-all");
const dishes =document.getElementById("catgorie-dishes");
const drinks =document.getElementById("catgorie-drinks");
const salad =document.getElementById("catgorie-salad");
const alldishes =document.querySelectorAll(".men-content");


dishes.addEventListener("click",()=> {
    dishes.classList.add("active");
    allmenu.classList.remove("active");
    drinks.classList.remove("active");
    salad.classList.remove("active");
   
        alldishes.forEach(element =>{
            element.style.display = "block";
            if(!element.classList.contains("dishes")){
                element.style.display = "none";
            }
        });
     }
 )


drinks.addEventListener("click",()=>{
    drinks.classList.add("active");
    allmenu.classList.remove("active");
    salad.classList.remove("active");
    dishes.classList.remove("active");

    alldishes.forEach(element =>{
        element.style.display = "block";
        if(!element.classList.contains("drink")){
            element.style.display = "none";
        }
    });
 }
)



salad.addEventListener("click",()=>{
    salad.classList.add("active");
    allmenu.classList.remove("active");
    dishes.classList.remove("active");
    drinks.classList.remove("active");

    alldishes.forEach(element =>{
        element.style.display = "block";
        if(!element.classList.contains("salad")){
            element.style.display = "none";
        }
    });
 }
)


allmenu.addEventListener("click",()=>{
    allmenu.classList.add("active");
    drinks.classList.remove("active");
    dishes.classList.remove("active");
    salad.classList.remove("active");

    alldishes.forEach(element =>{
        element.style.display = "block";
    });
 }
)
