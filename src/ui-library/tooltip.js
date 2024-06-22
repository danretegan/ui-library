import "./styles/tooltip.css";

class Tooltip {
  constructor(span) {
    this.span = span;
    this.message = span.getAttribute("data-message");
  }
  init() {
    //! Creează elementul bubble și adaugă clasa și textul:
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.textContent = this.message;
    this.span.appendChild(bubble);

    //! Adaugă evenimentele pentru a afișa și ascunde bubble-ul:
    this.span.addEventListener("mouseenter", () => {
      bubble.classList.add("active");
    });
    this.span.addEventListener("mouseleave", () => {
      bubble.classList.remove("active");
    });
  }
}

export { Tooltip as default };
