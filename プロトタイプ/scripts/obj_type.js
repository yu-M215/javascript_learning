// Animalクラスと、これを継承したHamsterクラスを準備
var Animal = function() {};
var Hamster = function() {};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();

// 元となるコンストラクターを確認
// constructorプロパティを利用することで
// オブジェクトの元となったコンストラクターを取得できる
console.log(a.constructor === Animal);
console.log(h.constructor === Animal);
console.log(h.constructor === Hamster);

// 元となるコンストラクターを判定
// 「オブジェクト instanceof コンストラクター」で
// 「オブジェクトが特定のコンストラクターによって生成されたインスタンスであるか」を判定する
console.log(h instanceof Animal);
console.log(h instanceof Hamster);

// isPrototypeOfメソッドはオブジェクトが参照しているプロトタイプを確認するために利用する
console.log(Hamster.prototype.isPrototypeOf(h));
console.log(Animal.prototype.isPrototypeOf(h));