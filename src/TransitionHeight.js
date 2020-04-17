import wrapEl from "./utils/wrapEl";

class TransitionHeight {
    constructor(el) {
        this.height = null;
        this.el = el;
        this.outer = document.createElement("div");
        this.inner = document.createElement("div");
        this.init();
        requestAnimationFrame(this.tick);
    }

    init = () => {
        this.outer.classList.add("transition-height-outer");
        this.inner.classList.add("transition-height-inner");
        this.outer.style.transition = "200ms ease all";
        this.outer.style.position = "relative";
        this.outer.style.overflow = "hidden";
        wrapEl(this.el, this.inner);
        wrapEl(this.inner, this.outer);
    };

    tick = () => {
        const outerHeight = this.outer.clientHeight;
        const innerHeight = this.inner.clientHeight;
        if (this.height === null || outerHeight !== innerHeight) {
            this.height = innerHeight;
            this.outer.style.height = `${innerHeight}px`;
        }
        requestAnimationFrame(this.tick);
    };
}

export const init = (selector = "[data-transition-height]") => {
    const els = document.querySelectorAll(selector);
    for (const el of els) {
        new TransitionHeight(el);
    }
};

export default {
    init: init,
};
