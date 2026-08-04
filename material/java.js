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
