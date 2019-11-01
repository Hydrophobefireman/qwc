const config = {
  "paper-input-demo": {
    value: "",
    placeholder: "",
    handleInput() {
      const val = this.value || "";
      this.customElement.config.value = val;
      this.customElement.value = val;
    }
  },
  "app-disclaimer": { spinner: "<loading-spinner/>", video: "<video-player/>" },
  "animated-link": {
    href: null,
    animate(e) {
      e.preventDefault();
      const el = document.createElement("animate-text");
      const div = document.createElement("div");
      const url = this.customElement.config.href;
      div.textContent = "Loading " + url;
      el.appendChild(div);
      document.body.appendChild(el);
      setTimeout(() => (location = url), 500);
    }
  },
  "button-counter-demo": {
    count: 0,
    val: "Not Clicked Yet",
    handleClick() {
      const cfg = this.customElement.config;
      const c = ++cfg.count;
      cfg.val = "Clicked " + c + " time" + (c === 1 ? "" : "s");
    },
    currentDate: new Date().toString()
  }
};
const mods = {
  "button-counter-demo": {
    modifyPrototype(p) {
      Object.defineProperties(p, {
        connectedCallback: {
          value() {
            this.__interval = setInterval(() => {
              this.config.currentDate = new Date().toString();
              this.update();
            }, 1000);
          }
        },
        disconnectedCallback: {
          value() {
            clearInterval(this.__interval);
          }
        }
      });
    }
  },
  "paper-input-demo": {
    observedAttributes: [
      { prop: "value", listener() {} },
      {
        prop: "placeholder",
        listener(old, newV) {
          this.config.placeholder = newV;
          this.shadowRoot.querySelector("input").placeholder = newV || "";
        }
      }
    ]
  },
  "animate-text": {
    modifyPrototype(p) {
      p.reanimate = function() {
        document.body.appendChild(this);
      };
    }
  },
  "animated-link": {
    observedAttributes: [
      {
        prop: "unstyled",
        type: "bool",
        listener(o, n) {
          const a = this.shadowRoot.querySelector("a");
          const div = this.shadowRoot.querySelector("div");
          if (n !== null) {
            a.className = div.className = "unstyled";
          } else {
            a.className = div.className = "styled";
          }
        }
      },
      {
        prop: "href",
        listener(ov, nv) {
          this.config.href = nv;
          this.update();
        }
      }
    ]
  }
};
