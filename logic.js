   // NAVBAR MOBIL
    const openbtn = document.querySelector(".resp-ico"); 
    const closebtn = document.querySelector(".clo-ico");
    const navbarmobil = document.querySelector('.NAVBAR');

    openbtn.addEventListener("click",()=>{
        navbarmobil.style.right = "0"; 
    })
    closebtn.addEventListener("click",()=>{
        navbarmobil.style.right = "-100%"; 
    })



    // CHANGE COLOR WHEN SELECT A TYPE 
    // SELECT TYPE BY CLICK
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





    //ADD ELEMENT TO PANIER AND CALCUL TOTAL PRICE
    const order_btn = document.querySelectorAll(".order");
    const orderNum =document.querySelector(".orderNum");
    
    let count =0;
    let total = 0;

        order_btn.forEach((element)=>{
            element.addEventListener("click",()=>{
                count++;
                orderNum.innerText = count; 
                
                let temp = element.parentElement.childNodes[5].innerText;
                const DIV =document.createElement("div")
                DIV.classList.add("panier-row")
                DIV.innerHTML = `            
                    <img src="${element.parentElement.childNodes[1].src}" alt="menu image">
                    <h5>${element.parentElement.childNodes[3].childNodes[0].nodeValue}</h5>
                    <P>${Number(temp.substring(temp.length-3,temp.length-1))}$</P>                   
                ` 
              
                panier.appendChild(DIV)

                const total_price = document.querySelector('.total')
                
                let priceItem = Number(temp.substring(temp.length-3,temp.length-1))
                total += priceItem
                total_price.innerText = total + '$'
        
            })           

        })

            // SHOW THE CARD
            const btn_cart = document.querySelector(".cart");
            const panier = document.querySelector(".panier")
            
            btn_cart.addEventListener("click",()=>{
                panier.classList.toggle("tgl")
            })

          // ORDER COMPLETED SUCCESFULY
          const order_final = document.querySelector(".order-final")

            order_final.addEventListener("click",()=>{
                alert("Your order completed successfully");
                document.querySelector('.total').remove();
                document.querySelector(".orderNum").remove();
                document.querySelectorAll(".panier-row").forEach((elm)=>{
                    elm.remove();
                })
            })
         
        



    


        

