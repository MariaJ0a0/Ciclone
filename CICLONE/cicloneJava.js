// CSS do site Ciclone
//--------------------------------------------------------------

//Trabalho de grupo para a cadeira de Web Design
//Fbaup ano letivo 2023/2024

//Grupo:
//Luciano Silva
//-
//-
//-

//Criação do Css - 13/11/2023
//Ultima ediçao- 17/11/2023


//
//   
//
//
//---------------------- menu hamburguer------------------------------------------------------------------------

//
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})



document.querySelectorAll(".nav-link").forEach(n =>n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))

//------------------------------------------------------------------------

// ------------------- Bolhas-----------------------------------------------------------------------------------------------

// Obtém todas as bolhas
var bubbles = document.querySelectorAll('.bubbles img');

// Adiciona tamanhos aleatórios às bolhas
bubbles.forEach(function (bubble) {
  var randomSize = Math.random() * (25 - 3) + 3; // Gera um número aleatório entre 10 e 20
  bubble.style.maxWidth = randomSize + '%';
});



//----------------------------------------------------------------------

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var bubblesDiv = document.querySelector(".bubbles");

    // Verificar o tamanho da tela usando matchMedia
    var isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    // Ajuste os valores conforme necessário
    var scrollThreshold = isSmallScreen ? 100 : 400;

    if (scrollPosition > scrollThreshold) {
        bubblesDiv.classList.add("show");
    } else {
        bubblesDiv.classList.remove("show");
    }
});

//----------------------------------------------------------------------------------------------------

//---------------------- pagina do sobre ---------------------------------------------------------------------

// -------------------------------------- animacao do read more---------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
        var textosobre = document.getElementById("textosobre");
        var readMoreBtn = document.getElementById("readMoreBtn");

        readMoreBtn.addEventListener("click", function () {
            if (textosobre.classList.contains("collapsed")) {
                textosobre.classList.remove("collapsed");
                readMoreBtn.innerHTML = "Ler menos";
            } else {
                textosobre.classList.add("collapsed");
                readMoreBtn.innerHTML = "Ler mais";
            }
        });

        // Adiciona a classe "collapsed" inicialmente para começar com o texto cortado
        textosobre.classList.add("collapsed");
    });

//---------------- carrosel do grupo--------------------------------------------

const carousel = document.getElementById('image-carousel');
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 4;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + 4) % 4;
    updateCarousel();
  }

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
  }

//------------------------------------------------------------------------

// ------------------- transicao in e out cap 1-------------------------------------------------------------------------------------------

//----------------------------------------------------------------------

let lastScrollTop = 0;

const fadeElements = document.querySelectorAll('.fade-in-out');


function handleScroll() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
  
    fadeElements.forEach((element) => {
      let opacity = parseFloat(element.style.opacity) || 1;
      if (opacity > 0) {
        opacity -= 0.01; 
        element.style.opacity = opacity;
      }
    });
  } else {
    
    fadeElements.forEach((element) => {
      let opacity = parseFloat(element.style.opacity) || 1;
      if (opacity < 1) {
        opacity += 0.01; 
        element.style.opacity = opacity;
      }
    });
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}

window.addEventListener('scroll', handleScroll);

//---------------------------------------------------------------------------

//------------------------------------------------------------------------------

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

