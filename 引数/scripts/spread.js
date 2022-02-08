// Math.maxメソッドは可変長引数を受け取る
console.log(Math.max(15, -3, 78, 1));

// 配列を渡すと認識することができず、結果はNaNになる
console.log(Math.max([15, -3, 78, 1]));

// applyメソッドを利用することで配列も利用できる
console.log(Math.max.apply(null, [15, -3, 78, 1]));

// 「...」演算子を使うことで配列を個々の値に展開できる
console.log(Math.max(...[15, -3, 78, 1]));