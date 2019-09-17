$(function () {
    // headerクリック時に赤線
    var red = $('header a');
    red.click(function () {
        $(this).addClass('red-border');
        red.not(this).removeClass('red-border');
        // 変数redに$('.header-right a')コレを代入.
        // 変数redがクリックされた時、
        // そのクリックされた要素にred - borderクラスを付与し、
        // red全ての要素の中の、これ(クリックされた要素)以外の要素から,
        // red - borderクラスを外す
    });

    // ドロワーメニューの使用宣言 
    $(document).ready(function () {
        $('.drawer').drawer();
    });

    // #で始まるアンカーをクリックした場合に処理
    $('a[href^="#"]').click(function () {
        // スクロールの速度
        var speed = 400; // ミリ秒
        // アンカーの値取得
        var href = $(this).attr("href");
        // 移動先を取得
        var target = $(href == "#" || href == "" ? 'html' : href);
        // 移動先を数値で取得
        var position = target.offset().top;
        // スムーススクロール
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });


    // フェード コレ入れると何故か３枚目から始まってしまう
    // var mySwiper = new Swiper('.swiper-container', {
    //     fadeEffect: {
    //         crossFade: true
    //     }
    // });

});


// スライドショーswierの使用宣言 swiperはjqueryではないJavascriptのライブラリ！
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 自動再生
    loop: true,
    autoplay: {
        delay: 2800,
        disableOnInteraction: true
    },
});



