const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const word ="Hello my name is" ;
const typed= document.querySelector(".typed")
let stack =[] ;
const quote =document.querySelector(".quote")
const quotebtn = document.querySelector(".quotebtn")
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-item a").forEach(n=>n.addEventListener("click",()=>{
  hamburger.classList.remove("active")

  navMenu.classList.remove("active")
}))


window.addEventListener("DOMContentLoaded",()=>{
  setTimeout(() => {
    var typed = document.querySelector(".typed");
    typed.classList.add("onload");
  }, 600); 
})


quotebtn.addEventListener("click",()=>{

  var category = 'inspirational'
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 'X-Api-Key': 'M3sUEFul/FZI1ZI19N9oag==q12b7duE5vXpvM8q'},
      contentType: 'application/json',
      success: function(result) {
          quote.textContent=`"${(result[0].quote)}-${(result[0].author)}"`;
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });





})
