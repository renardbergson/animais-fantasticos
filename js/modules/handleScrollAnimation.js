import className from "../script.js";

function handleScrollAnimation() {
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

export default handleScrollAnimation;