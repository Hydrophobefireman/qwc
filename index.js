import { arrFrom, EMPTY_OBJ } from "./util.js";
import { makeCE } from "./makeCE.js";
const REQUIRED_SELECTOR = "template[is='custom']";
export const init = (protoData, props, templateArray) => {
  protoData = protoData || {};
  /**
   * @type {HTMLTemplateElement[]}
   */
  let c;
  if (templateArray) {
    if (!Array.isArray(templateArray)) c = [templateArray];
    else c = templateArray;
  } else c = arrFrom(document.querySelectorAll(REQUIRED_SELECTOR));
  for (const i of c) {
    makeCE(
      i,
      protoData[i.getAttribute("custom-element")] || EMPTY_OBJ,
      props || EMPTY_OBJ
    );
  }
};
export const HTMLImport = async function(pd, props, url) {
  const data = await fetch(url);
  const text = await data.text();
  const tpl = document.createElement("template");
  tpl.innerHTML = text;
  const node = tpl.content;
  const nodeArr = arrFrom(node.querySelectorAll(REQUIRED_SELECTOR));
  return init(pd, props, nodeArr);
};
