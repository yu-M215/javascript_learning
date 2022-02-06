let getTriangle = (base, height) => {
  return base * height / 2;
};

// 上記は以下のように書き換えも可能
// let getTriangle = (base, height) => base * height / 2;

// 引数が１つなら引数をくくるカッコも省略可能(以下は円の面積を求める関数の例)
// let getCircle = radius => radius * radius * Math.PI;

// 引数がない場合は、カッコの省略は不可
// let show = () => console.log('こんにちは、世界！');

console.log('三角形の面積：' + getTriangle(5, 2));