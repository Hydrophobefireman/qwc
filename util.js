export function getGlobal() {
  if (typeof globalThis !== "undefined") return globalThis;
  Object.defineProperty(Object.prototype, "__this", {
    enumerable: true,
    configurable: true,
    get: function() {
      return this;
    }
  });
  const a = __this;
  delete Object.prototype.__this;
  return a;
}
const supportsFrom = "from" in Array;
const supportsCreate = "create" in Object;

function create(type) {
  if (supportsCreate) return Object.create(type);
  return {};
}

/**
 * @template T
 * @param {Array<T>} arrLike
 * @returns {Array<T>}
 */
export function arrFrom(arrLike) {
  if (supportsFrom) {
    return Array.from(arrLike);
  }
  const len = arrLike.length;
  const ret = Array(len);
  for (let i = 0; i < len; i++) {
    ret[i] = arrLike[i];
  }
  return ret;
}
export const EMPTY_OBJ = create(null);
