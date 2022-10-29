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






    const order_btn = document.querySelectorAll(".order");
    const orderNum =document.querySelector(".orderNum");
    let count =0;
    // const foodname = document.querySelectorAll(".food-name")

   
        order_btn.forEach((element)=>{
            element.addEventListener("click",()=>{
                count++;
                orderNum.innerText = count;

                // console.log(element.parentElement.childNodes[3].childNodes[0].nodeValue, foodname);
                // console.log(element.parentElement.childNodes[1].src);
                let temp = element.parentElement.childNodes[5].innerText;
                const DIV =document.createElement("div")
                DIV.classList.add("panier-row")
                DIV.innerHTML = `
                <div class="panier-row">
                    <img src="${element.parentElement.childNodes[1].src}" alt="menu image">
                    <h5>${element.parentElement.childNodes[3].childNodes[0].nodeValue}</h5>
                    <P>${Number.parseInt(temp.substring(temp.length-3,temp.length-1))}$</P>
                </div> 
                `

                console.log(DIV);
                panier.appendChild(DIV)
                console.log(panier);
           
            // console.log(Number.parseInt(temp.substring(temp.length-3,temp.length-1)))

            }) 
         

        })


    const btn_cart = document.querySelector(".cart");
    const panier = document.querySelector(".panier")
    btn_cart.addEventListener("click",()=>{
        panier.classList.toggle("tgl")
    })



    
