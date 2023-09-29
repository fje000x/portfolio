
    const hamburger = document.querySelector(".menu");
    const navList = document.querySelector(".nav-list");
    
    

    let clicked =  false;

    hamburger.addEventListener("click",()=>{

        if (!clicked){
        navList.style.display="block" ;
        clicked=true;
        }
        else{
            navList.style.display="none" ;
            clicked=false ;

        }
        
        
    })
    


    function checkWindowSize(){
        const screenWidth= window.innerWidth ;
        if (screenWidth > 1000){
            hamburger.style.display="none"
            navList.style.display="block"
        }
        else{
            hamburger.style.display="block"
            navList.style.display="none"
            
        }
        
    }

checkWindowSize()

window.addEventListener("resize",checkWindowSize)