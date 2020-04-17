import wrapEl from "./utils/wrapEl";

const DEFAULT_OPTIONS = {
    selector: "[data-transition-height]",
    transitionSpeed: "500ms",
};

class TransitionHeight {
    constructor(el, options) {
        this.height = null;
        this.el = el;
        this.options = {
            ...DEFAULT_OPTIONS,
            ...options,
        };
        this.outer = document.createElement("div");
        this.inner = document.createElement("div");
        this.init();
        requestAnimationFrame(this.tick);
    }

    init = () => {
        this.outer.classList.add("transition-height-outer");
        this.inner.classList.add("transition-height-inner");
        this.outer.style.transition = `${this.options.transitionSpeed} ease all`;
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

export const init = (options = DEFAULT_OPTIONS) => {
    const settings = {
        ...DEFAULT_OPTIONS,
        ...options,
    };
    const els = document.querySelectorAll(settings.selector);
    for (const el of els) {
        new TransitionHeight(el, settings);
    }
};

export default {
    init: init,
};
