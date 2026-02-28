const originalWarn = console.warn;

console.warn = (...args) => {
  const first = args[0];
  if (
    typeof first === "string" &&
    first.includes("[baseline-browser-mapping] The data in this module is over two months old")
  ) {
    return;
  }

  originalWarn(...args);
};
