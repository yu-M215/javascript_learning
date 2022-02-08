function getTriangle(base = 1, height = 1) {
  return base * height / 2;
}

console.log(getTriangle(5));
// nullが明示的に渡されている場合、デフォルト値は適用されない
console.log(getTriangle(5, null));
// undefinedの場合はデフォルト値が適用される
console.log(getTriangle(5, undefined));