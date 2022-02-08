// 関数定義における注意点：function命令は静的な構造を宣言する

console.log('三角形の面積：' + getTriangle(5, 2));

function getTriangle(base, height) {
  return base * height / 2;
}