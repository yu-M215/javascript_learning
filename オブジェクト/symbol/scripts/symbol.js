let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());
console.log(sym1 === sym2);

// シンボルでは文字列/数値への暗黙的な型変換はできない
// console.log(sym1 + '');
// console.log(sym1 - 0);

//boolean型への変換は可能
console.log(typeof !!sym1);