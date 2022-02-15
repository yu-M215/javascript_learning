document.addEventListener('DOMContentLoaded', function() {
  var books = [
    { title: '独習PHP 第3版', price: 3200 },
    { title: 'Javaポケットリファレンス', price: 2680 },
    { title: 'アプリを作ろう！Android入門', price: 2000 }
  ];

  var list = document.getElementById('list');

  // コンテンツを貯めるためのDocumentFragmentオブジェクトを作成
  var frag = document.createDocumentFragment();

  // 配列booksの内容を順番に<li>要素に整形
  for(var i = 0, len = books.length; i < len; i++) {
    var b = books[i];
    var li = document.createElement('li');
    var text = document.createTextNode(b.title + '：' + b.price + '円');
    li.appendChild(text);
    frag.appendChild(li);
  }

  // <li>要素群をまとめて文書ツリーに追加
  document.getElementById('list').appendChild(frag);
}, false);