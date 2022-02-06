// マルチラインモード無効(^は文字列の先頭を表す)
// var p = /^[0-9]{1,}/g;

// マルチラインモード有効(^は行頭を表す)
var p = /^[0-9]{1,}/gm;
var str = '101匹ワンちゃん。\n7人の小人';
var result = str.match(p);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}