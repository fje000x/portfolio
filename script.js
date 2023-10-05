const hamburger = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const lightmode = document.querySelector("#lightmode");
const darkmode = document.querySelector("#darkmode");
const about = document.querySelector(".about p");
const icons = document.querySelector(".seperator")
const hello= document.querySelector("#hello")
const container = document.querySelector(".container")
const lightmodecontainer2 = document.querySelector(".inner-wrapper2")
const tech = document.querySelector(".tech h1")
const learning = document.querySelector(".learning-goals h1")
const learningP = document.querySelector(".learning-goals p")
let clicked = false;
const typed =document.querySelector("#typed")
let stack = []
const word ="Welcome!!"
//makes hamburger functional
document.addEventListener("DOMContentLoaded", function () {
  hamburger.addEventListener("click", () => {
    if (!clicked) {
      navList.style.display = "block";
      
        if (window.innerWidth>=1000){
          container.style.height="110vh"
        }
      
     
      
      clicked = true;

    } else {
      navList.style.display = "none";
      if (window.innerWidth>=1000){
        container.style.height="100vh"
      }
  
  
      
      clicked = false;
    }
  })
});
//checks window size 
function checkWindowSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1050) {
    hamburger.style.display = "none";
    navList.style.display = "block";
  } else {
    hamburger.style.display = "block";
    navList.style.display = "none";

  }
}

checkWindowSize();

window.addEventListener("resize", checkWindowSize);

// DARK MODE / LightMode 

lightmode.addEventListener("click", () => {
  //document.body.style.background = "linear-gradient(to bottom, #253439, white) no-repeat";
  document.body.style.background = "linear-gradient(to bottom, lightblue, white) no-repeat";
  lightmode.style.display = "none";
  darkmode.style.display = "inline-block";
  about.style.color="#253439"
  typed.style.color="hotpink"
  lightmodecontainer2.style.background="lightpink"
  tech.style.color="#253439"
  learning.style.color="#253439"
  learningP.style.color="#253439"

})


darkmode.addEventListener("click", () => {
  document.body.style.background = "#253439";
  lightmode.style.display = "inline-block";
  darkmode.style.display = "none";
  about.style.color = "white";
  typed.style.color="lightskyblue"
  //chnage here
  lightmodecontainer2.style.background="darkslategrey"
  tech.style.color="lightskyblue"
  learning.style.color="lightskyblue"
  learningP.style.color="lightskyblue"


})

//type animation 

function typeText(){
  if(stack.length<word.length){
      stack.push(word[stack.length]);
      
      typed.textContent = stack.join("");
      
      setTimeout(typeText,500) ;
  }
  else{
      setTimeout(removetext);
  }
}

function removetext(){

  if (stack.length >0){
      stack.pop(typed[stack.length]);
      typed.textContent = stack.join("");
      setTimeout(removetext,500);
  }
  else{
      setTimeout(typeText,100);
  }
}



typeText()

