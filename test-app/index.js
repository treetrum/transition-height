import TransitionHeight from "../dist/TransitionHeight";

TransitionHeight.init({ transitionSpeed: "200ms" });

class Accordion {
    constructor(el) {
        this.el = el;
        this.cta = this.el.querySelector(".accordion__title button");
        this.body = this.el.querySelector(".accordion__body");
        this.cta.addEventListener("click", () => {
            this.body.classList.toggle("active");
        });
    }
}

const els = document.querySelectorAll(".accordion");
for (const el of els) {
    new Accordion(el);
}
