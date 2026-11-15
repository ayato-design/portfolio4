// スムーススクロール(元：WEBデザインMATOME)
$(function() {
  $('a[href^="#"]').on('click', function(e) {
    const href = $(this).attr('href');
    // 空の # は無視
    if (href === "#") return;
    // 対象要素が存在しない場合も無視
    const $target = $(href);
    if ($target.length === 0) return;
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 500, 'linear');
  });
});

// 戻るボタン(元：SACOCHAN-DESIGN.COM)
$(document).ready(function () {
    const pagetopBtn = $(".back_button");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) { // 100pxスクロールしたら表示
            pagetopBtn.addClass("is-show"); // 100px以上スクロールしたらボタンをフェードイン
        } else {
            pagetopBtn.removeClass("is-show"); // 100px以下になったらボタンをフェードアウト
        }
    });

    pagetopBtn.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800); //500ミリ秒かけて戻る
        return false;
    });
});

// News絞り込み(元：Claude生成)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter_btn');
    const items = document.querySelectorAll('.news_item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // ボタンの見た目切り替え
            buttons.forEach(b => b.classList.remove('is-active'));
            button.classList.add('is-active');

            // カードの表示切り替え
            items.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('is-hidden');
                } else {
                    item.classList.add('is-hidden');
                }
            });
        });
    });
});

// header呼び出し(元：Claude生成)
(function () {
  // このJSファイル自身のURLから、サイトのルートを割り出す
  const scriptSrc = document.currentScript.src;
  // 例: https://ユーザー名.github.io/リポジトリ名/material/include.js
  //  → https://ユーザー名.github.io/リポジトリ名/
  const root = scriptSrc.replace(/material\/[^\/]*$/, '');

  document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('header');
    if (!target) return;

    fetch(root + 'header.html')
      .then(res => {
        if (!res.ok) throw new Error('読み込み失敗: ' + res.status);
        return res.text();
      })
      .then(html => {
        target.innerHTML = html;
        // ハンバーガーメニューの初期化はここで呼ぶ
        // initMenu();
        target.innerHTML = html;
        target.querySelectorAll('a[href]').forEach(a => {
        const href = a.getAttribute('href');
        // 外部リンクやページ内リンクは触らない
        if (/^(https?:|#|mailto:)/.test(href)) return;
        a.setAttribute('href', root + href);
        });
      })
      .catch(err => console.error(err));
  });
})();

// footer呼び出し(元：Web Drawer)
function footer(){
var html = "";
html += '<footer>';
html += '<p>© 2026 Portfolio Study & Practice Project<br>This site is a personal learning project.</p>';
html += '</footer>';
document.write(html);
}