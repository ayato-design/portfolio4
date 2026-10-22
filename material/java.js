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