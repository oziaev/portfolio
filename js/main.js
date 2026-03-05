$(function () {

  // header
  // ----------------------------------------------
  const $header = $("header");
  const $toggle = $(".toggle");
  const $mask = $(".mask");
  const $hamburgerMenu = $(".hamburger-menu");

  const closeMenu = () => {
    $header.removeClass("active");
    $("body").removeClass("no-scroll");
  };

  // ハンバーガークリック
  if ($toggle.length) {
    $toggle.on("click", function() {
      $header.toggleClass("active");
      $("body").toggleClass("no-scroll");
    });
  }

  // (mask)クリック → 閉じる
  if ($mask.length) $mask.on("click", closeMenu);

  // （メニュー外側）クリック → 閉じる
  if ($hamburgerMenu.length) $hamburgerMenu.on("click", closeMenu);
  // ----------------------------------------------

  const links = document.querySelectorAll('.link a');
  links.forEach(link => {
    if (link.href === location.href) {
      link.classList.add('is-active');
    }
  });

  // ----------------------------------------------
$(window).on('load', function() {
  $('.introduction, .supplement, .fv-btn').each(function() {
    $(this).addClass('is-visible');
  });
});
  // ----------------------------------------------

  // ----------------------------------------------

    function fadeInOnScroll() {
    $(".fadein").each(function () {
      const elemTop = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > elemTop - windowHeight + 100) {
        $(this).addClass("active");
      }
    });
  }

  // 最初の実行
  fadeInOnScroll();

  // スクロールごとに実行
  $(window).on("scroll", function () {
    fadeInOnScroll();
  });

  // ----------------------------------------------

});