document.addEventListener('DOMContentLoaded', function() {
  // タイマーを設置
  var timer = window.setInterval(
    // 現在の時刻を<div id="result">要素に表示（5990ミリ秒ごとに更新）
    function() {
      var dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 5000);

    // ボタンクリック時にタイマー処理を中止
    document.getElementById('btn').addEventListener('click', function() {
      window.clearInterval(timer);
    }, false);
}, false);