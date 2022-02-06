// 関数定義における注意点：return命令の直後で改行しない
var getTriangle = function(base, height) {
  return
  base * height / 2;
};

console.log('三角形の面積：' + getTriangle(5, 2));