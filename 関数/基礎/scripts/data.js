// 関数定義における注意点：関数はデータ型の一種
var getTriangle = function(base, height) {
  return base * height / 2;
};

console.log(getTriangle);
console.log(getTriangle(5, 2));
getTriangle = 0;
console.log(getTriangle);