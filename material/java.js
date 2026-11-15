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

// ハンバーガーメニュー(元：Claude生成)
function initMenu(scope = document) {
  const btn = scope.querySelector('.sm_nav_open');
  const nav = scope.querySelector('#sm_nav_box');
  if (!btn || !nav) return;           // 無ければ何もしない

  const FADE_MS = 400; // CSSの opacity .4s と合わせる

  const setOpen = (open) => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  btn.addEventListener('click', () =>
    setOpen(btn.getAttribute('aria-expanded') !== 'true'));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  // 項目タップ → フェードアウトしてから遷移
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#') || link.target === '_blank' ||
          e.metaKey || e.ctrlKey || e.shiftKey) {
        setOpen(false);
        return;
      }
      e.preventDefault();
      nav.classList.add('is-fading');
      setTimeout(() => { location.href = link.href; }, FADE_MS);
    });
  });

  // 「戻る」で復元されたときの後始末
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      nav.classList.remove('is-fading');
      setOpen(false);
    }
  });
}

// header呼び出し(元：Claude生成)
(function () {
  const scriptSrc = document.currentScript.src;
  const root = scriptSrc.replace(/material\/[^\/]*$/, '');

  document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('header');

    // index.html など、共通ヘッダーを使わないページはそのままメニューだけ初期化
    if (!target) {
      initMenu();
      return;
    }

    fetch(root + 'header.html')
      .then(res => {
        if (!res.ok) throw new Error('読み込み失敗: ' + res.status);
        return res.text();
      })
      .then(html => {
        target.innerHTML = html;

        target.querySelectorAll('a[href]').forEach(a => {
          const href = a.getAttribute('href');
          // 外部リンクやページ内リンクは触らない
          if (/^(https?:|#|mailto:)/.test(href)) return;
          a.setAttribute('href', root + href);
        });

        // ヘッダーが挿入された「後」でメニューを初期化
        initMenu();
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