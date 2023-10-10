const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const word ="Hello my name is" ;
const typed= document.querySelector(".typed")
let stack =[] ;
const quote =document.querySelector(".quotetext")
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
  fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const randomQuote = data[Math.floor(Math.random() * data.length)];
      const [author, source] = randomQuote.author.split(','); // Splitting the author and source
      quote.textContent = `"${randomQuote.text}" - ${author.trim()}`; // Using only the author
    })
    .catch(function(error) {
      console.error('Error: ', error);
    });
});


window.addEventListener('load', function() {
  const loader = document.querySelector('.loading-screen');
  
  // Simulate a delay (you can replace this with actual loading)
  setTimeout(function() {
    loader.style.display = 'none';
  }, 1000); // Change 2000 to your desired loading time in milliseconds
});