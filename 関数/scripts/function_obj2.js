var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('ひし形の面積：' + diamond(5, 2));