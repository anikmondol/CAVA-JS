const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

if (bar) {
    bar.addEventListener("click", e =>{
        nav.classList.add("active");
    } )
}

if (close) {
    close.addEventListener("click", e =>{
        nav.classList.remove("active");
    } )
}


function changeMainImage(thumbnail) {

    const mainImage = document.getElementById('mainImage');

    mainImage.src = thumbnail.src;
}


// Animations

ScrollReveal().reveal("#header", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 200,
  });

  ScrollReveal().reveal("nav", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 100,
  });
  
 
  
  ScrollReveal().reveal("section", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
  });
  
  ScrollReveal().reveal("footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
  });
  