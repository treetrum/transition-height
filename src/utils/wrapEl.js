/**
 * @param {HTMLElement} el Inner element
 * @param {HTMLElement} wrapper Out element
 */

const wrapEl = (el, wrapper) => {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
};

export default wrapEl;
