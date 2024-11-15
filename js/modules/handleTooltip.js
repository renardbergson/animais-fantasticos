const handleTooltip = () => {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  if (tooltips) {
    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    this.addEventListener("mousemove", onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;
    onMouseMove.element = this;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  const onMouseMove = {
    tooltipBox: null,
    element: null,
    handleEvent(e) {
      this.tooltipBox.style.top = e.pageY + 20 + "px";
      this.tooltipBox.style.left = e.pageX + 20 + "px";
    },
  };

  const onMouseLeave = {
    tooltipBox: null,
    element: null,
    handleEvent(e) {
      this.tooltipBox.remove();
      this.element.removeEventListener("mousemove", onMouseMove);
      this.element.removeEventListener("mouseleave", onMouseLeave);
    },
  };
};

export default handleTooltip;
