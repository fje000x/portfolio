
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav__list');
    const header =document.querySelector(".header")
    //const body = document.querySelector(body);
    let clicked = false ;
    hamburger.addEventListener('click', () => {
        if (!clicked){
        navList.style.display="block";
        clicked=true 
        //header.style.backgroundColor="black" ;
        
       
        
                   
        }
        else {
            navList.style.display="none";
            clicked=false
            
        }

    });
