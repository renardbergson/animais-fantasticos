const className = "active";

function handleAnimalDescription() {
  const animalsMenu = document.querySelectorAll("[data-element='animals-menu'] li");
  const animalsDescription = document.querySelectorAll("[data-element='animals-description'] section");

  if (animalsMenu.length && animalsDescription.length) {
    animalsDescription[0].classList.add("active");
    
    function showDescription(index) {
      animalsDescription.forEach((item) => {
        item.classList.remove(className);
      })
      const direction = animalsDescription[index].dataset.anime;
      animalsDescription[index].classList.add(className, direction);
    }
    
    animalsMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        showDescription(index);
      })
    })
  }
}

function handleAccordion() {
  const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");

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
  const internalLinks = document.querySelectorAll("[data-element='menu'] a[href^='#']");
  
  if (internalLinks.length) {
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        let topo = section.offsetTop;
  
        window.scrollTo({
          top: topo,
          behavior: "smooth",
        });
  
        // ALTERNATIVE
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

function startAnimationToScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    const screenHeightPercentage = window.innerHeight * 0.7; // 70% inner screen height
    
    function animation() {
      sections.forEach((item, index) => {
        const top = item.getBoundingClientRect().top;
        const desiredDistance = (top - screenHeightPercentage) < 0; 
        // distance to element top - 70% inner screen height is = to zero?
        
        if (desiredDistance) {
          item.classList.add(className);
        } else {
          item.classList.remove(className);
        }
      })
    }
    
    window.addEventListener("scroll", animation);
    animation(); // animate the first section, even before scrolling
  }
}

handleAnimalDescription();
handleAccordion();
smoothScroll();
startAnimationToScroll();