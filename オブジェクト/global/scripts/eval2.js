var obj = { hoge: 1, foo: 2 };
var prop = 'hoge';
eval('console.log(obj.'+ prop + ')');

// ブラケット構文の利用(こちらの方がシンプルかつ安全)
console.log(obj[prop]);
