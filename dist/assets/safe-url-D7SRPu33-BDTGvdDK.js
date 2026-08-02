let t = /* @__PURE__ */ new Set(["https:", "mailto:"]);
function n(n2) {
  if (!n2) return null;
  try {
    if (t.has(new URL(n2).protocol)) return n2;
  } catch {
  }
  return null;
}
export {
  n
};
