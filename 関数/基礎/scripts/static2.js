// 関数定義における注意点：関数リテラル/Functionコンストラクターは実行時に評価される
// 関数リテラル/Functionコンストラクターで関数を定義する場合、呼び出し元のコードよりも先に記述すること

console.log('三角形の面積：' + getTriangle(5, 2));

var getTriangle = function(base, height) {
  return base * height / 2;
};