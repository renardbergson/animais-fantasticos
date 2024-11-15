function handleScrollToSection() {
  const internalLinks = document.querySelectorAll(
    "[data-element='menu'] a[href^='#']"
  );

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
      });
    });
  }
}

export default handleScrollToSection;
