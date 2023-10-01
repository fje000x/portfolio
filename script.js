const hamburger = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const lightmode = document.querySelector("#lightmode") ;
const darkmode = document.querySelector("#darkmode") ;
let clicked = false;
//makes hamburger functional
hamburger.addEventListener("click", () => {
  if (!clicked) {
    navList.style.display = "block";

    clicked = true;
  } else {
    navList.style.display = "none";

    clicked = false;
  }
});
//checks window size 
function checkWindowSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1000) {
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
lightmode.addEventListener("click",()=>{
    document.body.style.backgroundColor = "#fff" ;
    lightmode.style.display="none" ;
    darkmode.style.display="inline-block";

})

darkmode.addEventListener("click",()=>{
    document.body.style.backgroundColor = "#253439" ;
    lightmode.style.display="inline-block" ;
    darkmode.style.display="none";

})