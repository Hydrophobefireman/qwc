var t="from"in Array;function e(e){if(t)return Array.from(e);for(var r=e.length,n=Array(r),o=0;o<r;o++)n[o]=e[o];return n}var r="create"in Object?Object.create(null):{};function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e,r){return(i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var i=new(Function.bind.apply(t,n));return r&&o(i,r.prototype),i}).apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return i(t,arguments,n(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,r,n,o){var i=e(t.children),u=Array.isArray(i),c=0;for(i=u?i:i[Symbol.iterator]();;){var f;if(u){if(c>=i.length)break;f=i[c++]}else{if((c=i.next()).done)break;f=c.value}var l=f;l.customElement=o;var p=l.dataset,b=function(i){var u=r[p[i]];if("o"===(i="class"===i?"className":i)[0]&&"n"===i[1]){var c;if(u=u.bind(l),l.hasAttribute("updates-reactively")){if(n)return y=i,"continue";c=function(){var n=e(arguments);u.apply(null,n),a(t,r,!0,o)}}else c=u;var f=i.substr(2);l._events||(l._events={}),l._events[f]||l.addEventListener(f,s),l._events[f]=c}else l[i]=u;y=i};for(var y in p)b(y);a(l,r,!1,o)}}function s(t){this._events[t.type](t)}var f=function(t,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){var t=this.getAttribute(e);return null===t?"":t},set:function(t){this.setAttribute(e,t)}})},l=function(t,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return this.hasAttribute(e)},set:function(t){t?this.setAttribute(e,""):this.removeAttribute(e)}})},p=function(){if("undefined"!=typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"__this",{enumerable:!0,configurable:!0,get:function(){return this}});var t=__this;return delete Object.prototype.__this,t}();function b(t,e,r){var n=t.getAttribute("custom-element"),o=function(e){var o,i;function u(){var o;return(o=e.call(this)||this).s=o.attachShadow({mode:"open"}),o.s.appendChild(t.content.cloneNode(!0)),o.config=Object.assign({},n in r?r[n]:r),a(o.s,o.config,!1,c(o)),o.update=function(){return a(o.s,o.config,!0,c(o))},o}return i=e,(o=u).prototype=Object.create(i.prototype),o.prototype.constructor=o,o.__proto__=i,u}(u(HTMLElement)),i=e.modifyConstructor,s=e.modifyPrototype,b=e.observedAttributes,y=o.prototype;i&&i(o),s&&s(y),b&&function(t,e,r){var n={},o=[];Object.defineProperty(r,"attributeChangedCallback",{value:function(t,e,r){return this.__attrListeners[t].call(this,e,r)}});var i=t,u=Array.isArray(i),c=0;for(i=u?i:i[Symbol.iterator]();;){var a;if(u){if(c>=i.length)break;a=i[c++]}else{if((c=i.next()).done)break;a=c.value}var s=a,p=s.type,b=s.prop;n[b]=s.listener,o.push(b),"string"==typeof s||null==p||"string"===p?f(r,b):"bool"===p&&l(r,b)}e.observedAttributes=o,Object.defineProperty(r,"__attrListeners",{value:n})}(b,o,y),p.customElements.define(n,o)}var y=function(t,n,o){t=t||{};var i=o?Array.isArray(o)?o:[o]:e(document.querySelectorAll("template[is='custom']")),u=Array.isArray(i),c=0;for(i=u?i:i[Symbol.iterator]();;){var a;if(u){if(c>=i.length)break;a=i[c++]}else{if((c=i.next()).done)break;a=c.value}b(a,t[a.getAttribute("custom-element")]||r,n||r)}};exports.HTMLImport=function(t,r,n){try{return Promise.resolve(fetch(n)).then((function(n){return Promise.resolve(n.text()).then((function(n){var o=document.createElement("template");o.innerHTML=n;var i=e(o.content.querySelectorAll("template[is='custom']"));return y(t,r,i)}))}))}catch(t){return Promise.reject(t)}},exports.init=y;
//# sourceMappingURL=index.js.map
