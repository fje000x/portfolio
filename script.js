const hamburger = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");
const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo");
const lightmode = document.querySelector("#lightmode");
const darkmode = document.querySelector("#darkmode");
const about = document.querySelector(".about p");
const icons = document.querySelector(".seperator")
let clicked = false;
//makes hamburger functional
document.addEventListener("DOMContentLoaded", function () {
  hamburger.addEventListener("click", () => {
    if (!clicked) {
      navList.style.display = "block";

      clicked = true;
    } else {
      navList.style.display = "none";

      clicked = false;
    }
  })
});
//checks window size 
function checkWindowSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1020) {
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
  document.body.style.background = "linear-gradient(to bottom, #253439, white) no-repeat";

  lightmode.style.display = "none";
  darkmode.style.display = "inline-block";
  about.style.color="black"
  icons.style.backgroundColor="white"



})


darkmode.addEventListener("click", () => {
  document.body.style.background = "#253439";
  lightmode.style.display = "inline-block";
  darkmode.style.display = "none";
  about.style.color = "white";



})

