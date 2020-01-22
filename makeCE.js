import { recursivelyApplyProps } from "./applyProps.js";
import { getGlobal } from "./util.js";

const installStringReflection = (obj, attrName, propName = attrName) => {
  Object.defineProperty(obj, propName, {
    enumerable: true,
    get() {
      const value = this.getAttribute(attrName);
      return value === null ? "" : value;
    },
    set(v) {
      this.setAttribute(attrName, v);
    }
  });
};

const installBoolReflection = (obj, attrName, propName = attrName) => {
  Object.defineProperty(obj, propName, {
    enumerable: true,
    get() {
      return this.hasAttribute(attrName);
    },
    set(v) {
      if (v) {
        this.setAttribute(attrName, "");
      } else {
        this.removeAttribute(attrName);
      }
    }
  });
};
const gl = getGlobal();
function setupAttrChangedCallBack(proto) {
  Object.defineProperty(proto, "attributeChangedCallback", {
    value(prop, oldVal, newVal) {
      const fn = this.__attrListeners[prop]
	return fn && fn.call(this, oldVal, newVal);
    }
  });
}
/**
 *
 * @param {HTMLTemplateElement} t
 * @param {{[key:string]:any}} pr
 * @param {{}} opts
 */
export function makeCE(t, pr, opts) {
  const name = t.getAttribute("custom-element");
  const cls = class extends HTMLElement {
    constructor() {
      super();
      this.s = this.attachShadow({
        mode: "open"
      });
      this.s.appendChild(t.content.cloneNode(!0));
      this.config = Object.assign({}, name in opts ? opts[name] : opts);
      recursivelyApplyProps(this.s, this.config, false, this);
      this.update = () =>
        recursivelyApplyProps(this.s, this.config, true, this);
    }
  };
  const { modifyConstructor, modifyPrototype, observedAttributes } = pr;
  const clsProto = cls.prototype;
  modifyConstructor && modifyConstructor(cls);
  modifyPrototype && modifyPrototype(clsProto);
  if (observedAttributes) {
    generateAttrObservers(observedAttributes, cls, clsProto);
  }
  gl.customElements.define(name, cls);
}

function generateAttrObservers(observedAttributes, cls, clsProto) {
  const data = {};
  const obs = [];
  setupAttrChangedCallBack(clsProto);
  for (const attr of observedAttributes) {
    const n = attr.type;
    const cb = attr.listener;
    const prop = attr.prop;
    data[prop] = cb;
    obs.push(prop);
    if (typeof attr === "string" || n == null || n === "string") {
      installStringReflection(clsProto, prop);
    } else {
      if (n === "bool") {
        installBoolReflection(clsProto, prop);
      }
    }
  }
  cls.observedAttributes = obs;
  Object.defineProperty(clsProto, "__attrListeners", {
    value: data
  });
}
