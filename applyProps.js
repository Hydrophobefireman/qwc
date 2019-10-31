import { arrFrom } from "./util.js";
/**
 *
 * @param {HTMLElement} el
 * @param {{[key:string]:any}} props
 */
export function recursivelyApplyProps(el, props, recursive, customElement) {
  /**
   * @type {HTMLElement[]}
   */
  const children = arrFrom(el.children);
  for (const child of children) {
    child.customElement = customElement;
    const ds = child.dataset;
    for (let prop in ds) {
      const val = ds[prop];
      let v = props[val];
      prop = prop === "class" ? "className" : prop;
      if (prop[0] === "o" && prop[1] === "n") {
        v = v.bind(child);
        let fn;
        if (!child.hasAttribute("updates-reactively")) {
          fn = v;
        } else {
          if (recursive) continue;
          fn = function() {
            const args = arrFrom(arguments);
            v.apply(null, args);
            recursivelyApplyProps(el, props, true, customElement);
          };
        }
        const evt = prop.substr(2);
        child._events || (child._events = {});
        if (!child._events[evt]) {
          child.addEventListener(evt, eventListenerProxy);
        }
        child._events[evt] = fn;
      } else {
        child[prop] = v;
      }
    }
    recursivelyApplyProps(child, props, false, customElement);
  }
}

function eventListenerProxy(e) {
  this._events[e.type](e);
}
