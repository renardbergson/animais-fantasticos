import className from "../script.js";

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

export default handleAccordion;