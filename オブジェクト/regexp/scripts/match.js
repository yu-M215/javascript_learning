// gオプションとiオプションを利用
// var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;

// iオプションのみ利用
// var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/i;

// gオプションのみ利用
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;

var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトはHTTP://www.web-deli.com/もよろしく！';
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}