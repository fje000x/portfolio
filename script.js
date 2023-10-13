const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const typed= document.querySelector(".typed")

const quote =document.querySelector(".quotetext")
const quotebtn = document.querySelector(".quotebtn")
const lightmode = document.querySelector(".lightmode")
const darkmode = document.querySelector(".darkmode")
const home = document.querySelector(".griditemhome")
const homep = document.querySelector(".griditemhome p")
const socials = document.querySelectorAll(".socials")
const griditem1 = document.querySelector(".grid-item1")
const griditem3 = document.querySelector(".grid-item3")
const hello= document.querySelector(".hello")
const about= document.querySelector(".aboutme")
const img= document.querySelector(".profileimg img")
const projects = document.querySelectorAll(".project");
const projecth1 = document.querySelector(".projecth1");
const griditem4 = document.querySelector(".grid-item4")
const formContainer =document.querySelector(".formcontainer")
const footer = document.querySelector(".footer")
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


lightmode.addEventListener("click",()=>{
  home.style.background="#edf2f4"
  typed.style.color="#023047"
  hello.style.color="#2b2d42"
  homep.style.color="#023047"
  
  socials.forEach(element=>{
    element.style.color="#2b2d42"
  })
  //grid item 1 styles for lightmode 
  griditem1.style.background="#edf2f4"
  about.style.color="#2b2d42";
  img.style.border="1px solid #2b2d42";
  img.style.boxShadow =" 0 0 10px 5px rgba(112, 128, 144, 0.5)"
  quote.style.color="#2b2d42"
  quotebtn.style.background="#2b2d42"

  

  //grid item 3 styles for lightmode 
  griditem3.style.background="#edf2f4"
projects.forEach(project=>{
  project.style.border="1px solid #2b2d42"
  project.style.boxShadow="0 0 10px 5px rgba(112, 128, 144, 0.5)"
  projecth1.style.color="#2b2d42"
})
//grid item 4 styles for lightmode
griditem4.style.background="#edf2f4"
formContainer.style.border="1px solid #2b242"
formContainer.style.boxShadow="0 0 10px 5px rgba(112, 128, 144, 0.5)"
formContainer.style.background="#023047"


footer.style.color="#023047"
  lightmode.style.display="none"
  darkmode.style.display="block"

})

darkmode.addEventListener("click",()=>{
  home.style.background="linear-gradient(to bottom, #023047, #000000)"
  typed.style.color="aliceblue"
  hello.style.color="salmon"
  homep.style.color="aliceblue"
  
  
  
  socials.forEach(element=>{
    element.style.color="salmon"
  })
  //grid item 1 styles for darkmode
  griditem1.style.background="linear-gradient(to top, #023047, #000000)"
  about.style.color="aliceblue";
  img.style.border="none";
  img.style.boxShadow =" 0 0 20px rgba(173, 216, 230, 0.7)"
  quote.style.color="aliceblue"
  quotebtn.style.background="salmon"

  

  //grid item 3 styles for darkmode
  griditem3.style.background="linear-gradient(to bottom, #023047, #000000)"
projects.forEach(project=>{
  project.style.border="1px solid salmon"
  project.style.boxShadow="0px 0px 20px rgba(255, 255, 255, 0.4)"
  projecth1.style.color="salmon"
})
//grid item 4 styles for darkmode
 griditem4.style.background="linear-gradient(to top, #023047, #000000)"
 formContainer.style.border="1px solid salmon"
 formContainer.style.boxShadow="0px 0px 20px rgba(255, 255, 255, 0.4)"
  
 
 lightmode.style.display="block"
  darkmode.style.display="none"


})

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href')//.substring(1);
      const targetElement = document.getElementById(targetId);

      let offset = -105; 
      if (targetId==="projects"){
        offset = 0;
      }
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});

(function() {
  emailjs.init('1jwR6NqB2hLTpGDFk'); // Replace with your EmailJS public key
})();

window.onload = function() {
  document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();
      emailjs.sendForm('service_3iai4li', 'template_3aa12k4', this)
          .then(function() {
              console.log('SUCCESS!');
              window.alert("Message Sent")
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}