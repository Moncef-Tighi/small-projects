'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const buttonScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




buttonScrollTo.addEventListener("click", function(event){
  //Old way :
  //let sectionCoord= section1.getBoundingClientRect();
  //window.scrollTo({left: sectionCoord.left, top : sectionCoord.top+window.pageYOffset, behavior : "smooth"});
  //New Way :
  section1.scrollIntoView({behavior : 'smooth'});
});


/*
 Inefficient : 

document.querySelectorAll(".nav__link").forEach(function(element) {
    element.addEventListener("click",function(event){
        event.preventDefault();
        let destination = document.querySelector(element.getAttribute("href"));

        destination.scrollIntoView({behavior : 'smooth'});
  });
});

*/ 
document.querySelector(".nav__links").addEventListener("click", function(event){
  event.preventDefault();
  let element = event.target;
  if (element.classList.contains("nav__link")){  
    let destination = document.querySelector(element.getAttribute("href"));
    destination.scrollIntoView({behavior : 'smooth'});
  }

})

//Tabbed components

const tabs= document.querySelectorAll(".operations__tab");
const tabsContainer=document.querySelector(".operations__tab-container");
const tabsContent =document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function(event){
  event.preventDefault();
  let element = event.target.closest("button");
  //On peut aussi remplacer la condition par un element!=null parce que si on ne vise pas button ça va return null
  if (element.classList.contains("operations__tab")) {
    /*
    À la base j'avais sélectionné le numéro de tab en sliçant le numéro de .
    C'était pas nécessaire en l'occurence parce que l'élément html avait un attribut "data" qui contenait ce nombre.
    J'aurais pu remplacer par : let number = element.getAttribute("data-tab");*/
    //let number = element.classList[2].slice(-1);
    let number = element.getAttribute("data-tab") ;
    tabsContent.forEach(function(tab,i){
        /*J'aurais pu coder ça mieux :
          Dans la boucle, enlever la class dans tout les élément et ENSUITE ajouter au bon élément.
          C'est un peu plus propre à coder.
        */
        if (i==number-1){
          tabs[i].classList.add("operations__tab--active");
          tab.classList.add("operations__content--active");
        } else {
          tabs[i].classList.remove("operations__tab--active");
          tab.classList.remove("operations__content--active");
        }
    })
  }
})


function blurHover(event){
    let element=event.target;
    if (element.classList.contains("nav__link")) {
      const links = element.closest(".nav").querySelectorAll(".nav__link");
      const logo = element.closest(".nav").querySelector("img");
      links.forEach(link => {
        //Attention, les function normales ont un this undefined. Il faut utiliser une arrow function pour utiliser le this normal dans ce cas-ci
        if (link!==element){
          link.style.opacity=this;
        }
      })
     logo.style.opacity=this;
    }
}


const nav = document.querySelector(".nav");
/*
nav.addEventListener("mouseover", function(event){
  blurHover(0.4,event.target);
})

Appeler cette fonction de cette manière c'est bien mais c'est un peu moche, c'est mieux d'utiliser BIND
Théoriquement mieux parce que dans ce cas faut faire pas mal de this shenanigans...*/
nav.addEventListener("mouseover", blurHover.bind(0.4));



nav.addEventListener("mouseout", blurHover.bind(1));


//Sticky navigation bar il y a deux manières de le faire :
//l'event scroll appartient à la page et il est activé à chaque fois qu'on scroll
//On l'utilise peu parce qu'il est TRES INEFFICIENT. L'event se déclenche 6 fois à chaque miniscroll de la souris.

/*window.addEventListener("scroll", function(event){
  if (window.scrollY>section1.getBoundingClientRect().top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
})*/


//Manière plus optimisée avec Intersection observer API
nav.classList.add("sticky");
let stickyNav= function(entrie, observer){
  const entry= entrie[0];
  //nav.classList.toggle("sticky");
  // moins bon mais plus commun :
  if(!entry.isIntersecting) {  //<-- C'est la condtion qui est importante
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky")
  }
  //Finalement utiliser le toggle cause un bug si la page commence en bas parce ça devient l'inverse de ce qu'on veut
}

const options = {
  root : null,
  threshold : 0,
  rootMargin: `-${nav.getBoundingClientRect().height}px`

}
const observer= new IntersectionObserver(stickyNav, options)
let header= document.querySelector(".header")
observer.observe(header);




//Révéler des éléments lorsqu'on scroll

const sections=document.querySelectorAll(".section");
const options2 = {
  root : null,
  threshold : 0.12
}
let revealSection = function(entries, observer){
  const entrie=entries[0];
  if (entrie.isIntersecting) {
    entrie.target.classList.remove("section--hidden")
  } else {
    entrie.target.classList.add("section--hidden")
  }
  /*
  if (!entrie.isIntersecting) {
    section.classList.add("");
    section.classList.remove("")
  }*/
}
let sectionObserver = new IntersectionObserver(revealSection, options2)
sections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
})






//Lazy Loaded images

const loadImages= function(entries){
  const entrie=entries[0];
  if (!entrie.isIntersecting) return
  entrie.target.src=entrie.target.dataset.src;
  entrie.target.addEventListener("load", function(){
    this.classList.remove("lazy-img")
  })
  imgObserver.unobserve(entrie.target);
}

const options3 = {
  root : null,
  threshold : 0.2,
}
const images = document.querySelectorAll("img[data-src]") //Select all images with the CSS PROPERTY data-src

const imgObserver= new IntersectionObserver(loadImages, options3);

images.forEach(image=>imgObserver.observe(image));


//Sliding buttons ma version :  

const sliders = document.querySelectorAll(".slide");

//Les slides sont de base hors de leur container. Et l'overflow est désactivé sur le container.

const btnLeft=document.querySelector(".slider__btn--left");
const btnRight=document.querySelector(".slider__btn--right");


const numberOfSlides=sliders.length-1;

const slide = function(movement){
  if (movement>0 && rightMostSlide>=(numberOfSlides*100)) {
    movement= -(numberOfSlides*100);
  } else if (movement<0 && rightMostSlide<=0) {
    movement= numberOfSlides*100;
  }
  rightMostSlide+=movement;

  switchDots(rightMostSlide/100);
  let current=0
   sliders.forEach(function(slider){
    current= Number(slider.style.getPropertyValue("transform").slice(11,-2));
    current+=movement;
    slider.style.setProperty("transform", `translateX(${current}%)`);
  })
}
btnLeft.addEventListener("click", function(){
  slide(+100);
});
btnRight.addEventListener("click", function(){
  slide(-100);
});
document.addEventListener("keydown", function(event){
  //ça c'est juste pour qu'on puisse déplacer les slide avec le clavier
  if (event.key==="ArrowLeft"){
    slide(+100);
  } else if (event.key==="ArrowRight"){
    slide(-100);
  }
});

//Maintenant on crée les dots en dessous du slider.

const dotsContainer= document.querySelector(".dots");
let rightMostSlide=-100;

const createDots= function(){
  sliders.forEach(function(slider,i){
    dotsContainer.insertAdjacentHTML("afterbegin",`<button class='dots__dot' data-slide='${i}'></button>`)
  })
}

const switchDots= function(currentDot=sliders.length-1) {

  dotsContainer.childNodes.forEach(function(dot,i){

    if (currentDot===Number(dot.getAttribute("data-slide")) ) {
      dot.classList.add("dots__dot--active");
    } else {
      dot.classList.remove("dots__dot--active");
    }
  })
}

const init= function(){
  //Cette fonction ne fait que tout lancer.
  createDots();
  switchDots();
  sliders.forEach(function(slider){
    rightMostSlide+=100;
    slider.style.setProperty("transform", `translateX(${rightMostSlide}%)`)
  })
}
init();

/* Impossible de faire fonctionner ce code avec ce que j'ai fait moi...
Le problème était clairement un mauvais planning au début, j'aurais du garder en tête plus de trucs

*/



/* CORRECTION :


///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();
*/

document.addEventListener("DOMContentLoaded", function(event){
  console.log(event);
})

window.addEventListener("load", function(event){
  console.log(event);
})