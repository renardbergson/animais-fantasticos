import className from "../script.js";

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

export default handleAnimalDescription;