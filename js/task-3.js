function getElementWidth(content, padding, border) {
  const a = Number.parseInt(content);
  const b = Number.parseInt(padding);
  const c = Number.parseFloat(border);
  const result = a + (b + c) * 2;
  return result;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
