function showAnimalDescrition() {
  const animalsMenu = document.querySelectorAll(".js-animalsMenu li");
  const animalsDescription = document.querySelectorAll(".js-animalsDescription section");
  const className = "active";

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

showAnimalDescrition()