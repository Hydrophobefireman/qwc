!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).qwc={})}(this,(function(t){var e="from"in Array;function r(t){if(e)return Array.from(t);for(var r=t.length,n=Array(r),o=0;o<r;o++)n[o]=t[o];return n}var n="create"in Object?Object.create(null):{};function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&i(o,r.prototype),o}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return u(t,arguments,o(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)})(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e,n,o){var i=r(t.children),u=Array.isArray(i),c=0;for(i=u?i:i[Symbol.iterator]();;){var a;if(u){if(c>=i.length)break;a=i[c++]}else{if((c=i.next()).done)break;a=c.value}var l=a;l.customElement=o;var p=l.dataset,y=function(i){var u=e[p[i]];if("o"===(i="class"===i?"className":i)[0]&&"n"===i[1]){var c;if(u=u.bind(l),l.hasAttribute("updates-reactively")){if(n)return b=i,"continue";c=function(){var n=r(arguments);u.apply(null,n),f(t,e,!0,o)}}else c=u;var a=i.substr(2);l._events||(l._events={}),l._events[a]||l.addEventListener(a,s),l._events[a]=c}else l[i]=u;b=i};for(var b in p)y(b);f(l,e,!1,o)}}function s(t){this._events[t.type](t)}var l=function(t,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){var t=this.getAttribute(e);return null===t?"":t},set:function(t){this.setAttribute(e,t)}})},p=function(t,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return this.hasAttribute(e)},set:function(t){t?this.setAttribute(e,""):this.removeAttribute(e)}})},y=function(){if("undefined"!=typeof globalThis)return globalThis;Object.defineProperty(Object.prototype,"__this",{enumerable:!0,configurable:!0,get:function(){return this}});var t=__this;return delete Object.prototype.__this,t}();function b(t,e,r){var n=t.getAttribute("custom-element"),o=function(e){var o,i;function u(){var o;return(o=e.call(this)||this).s=o.attachShadow({mode:"open"}),o.s.appendChild(t.content.cloneNode(!0)),o.config=Object.assign({},n in r?r[n]:r),f(o.s,o.config,!1,a(o)),o.update=function(){return f(o.s,o.config,!0,a(o))},o}return i=e,(o=u).prototype=Object.create(i.prototype),o.prototype.constructor=o,o.__proto__=i,u}(c(HTMLElement)),i=e.modifyConstructor,u=e.modifyPrototype,s=e.observedAttributes,b=o.prototype;i&&i(o),u&&u(b),s&&function(t,e,r){var n={},o=[];Object.defineProperty(r,"attributeChangedCallback",{value:function(t,e,r){return this.__attrListeners[t].call(this,e,r)}});var i=t,u=Array.isArray(i),c=0;for(i=u?i:i[Symbol.iterator]();;){var a;if(u){if(c>=i.length)break;a=i[c++]}else{if((c=i.next()).done)break;a=c.value}var f=a,s=f.type,y=f.prop;n[y]=f.listener,o.push(y),"string"==typeof f||null==s||"string"===s?l(r,y):"bool"===s&&p(r,y)}e.observedAttributes=o,Object.defineProperty(r,"__attrListeners",{value:n})}(s,o,b),y.customElements.define(n,o)}var v=function(t,e,o){t=t||{};var i=o?Array.isArray(o)?o:[o]:r(document.querySelectorAll("template[is='custom']")),u=Array.isArray(i),c=0;for(i=u?i:i[Symbol.iterator]();;){var a;if(u){if(c>=i.length)break;a=i[c++]}else{if((c=i.next()).done)break;a=c.value}b(a,t[a.getAttribute("custom-element")]||n,e||n)}};t.HTMLImport=function(t,e,n){try{return Promise.resolve(fetch(n)).then((function(n){return Promise.resolve(n.text()).then((function(n){var o=document.createElement("template");o.innerHTML=n;var i=r(o.content.cloneNode(!0).querySelectorAll("template[is='custom']"));return v(t,e,i)}))}))}catch(t){return Promise.reject(t)}},t.init=v}));
//# sourceMappingURL=index.umd.js.map
