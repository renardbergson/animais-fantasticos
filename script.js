const animalsMenu = document.querySelectorAll(".js-animalsMenu li");
const animalsDescription = document.querySelectorAll(".js-animalsDescription section");
const accordionList = document.querySelectorAll(".js-accordion dt");
const internalLinks = document.querySelectorAll(".js-menu a[href^='#']");
const className = "active";

function handleAnimalDescrition() {
  if (animalsMenu.length && animalsDescription.length) {
    animalsDescription[0].classList.add("active");
    
    function showDescription(index) {
      animalsDescription.forEach((item) => {
        item.classList.remove(className);
      })
      animalsDescription[index].classList.add(className);
    }
    
    animalsMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        showDescription(index);
      })
    })
  }
}

function handleAccordion() {
  if (accordionList.length) {
    accordionList[0].classList.add("active");
    accordionList[0].nextElementSibling.classList.add("active");
  
    accordionList.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.toggle(className);
        item.nextElementSibling.classList.toggle(className);
      })
    })
  }
}

function smoothScroll() {
  if (internalLinks.length) {
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        let topo = section.offsetTop;
  
        window.scrollTo({
          top: topo + 70,
          behavior: "smooth",
        });
  
        // ALTERNATIVA
        /*  
          section.scrollIntoView({
            block: "start",
            behavior: "smooth"
          });
        */
      })
    })
  }
}

handleAnimalDescrition();
handleAccordion();
smoothScroll();