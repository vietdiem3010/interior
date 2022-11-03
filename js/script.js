$(document).ready(function () {
  $(".poster .slider").slick({
    prevArrow: $(".arrow_left"),
    nextArrow: $(".arrow_right"),
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  });

  $(".slider-photos .slider").on(
    "init reInit afterChange",
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $(".slider__info .slider__active").text(i);
    }
  );
  $(".slider-photos .slider").slick({
    prevArrow: $(".arrow_left_slider"),
    nextArrow: $(".arrow_right_slider"),
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  });
  $(".clients__slider").slick({
    rows: 4,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
  });

  AOS.init({
    offset: 0,
    duration: 1000,
    easing: "ease-in-sine",
  });

  $('button[aria-label="Menu"]').on("click", function () {
    $(this).toggleClass("b_active");
    $(".menu_type_2, .menu_type_1, .menu_type_0").toggleClass("menu_open");
    $(".h_type_2, .h_type_1, .h_type_0").toggleClass("h_fixed_super");
  });


  $('.cont__btn').on('click', function () {
    $('.calc').addClass('calc_active');
  });
  $('.calc__close, .modal__close').on('click', function () {
    $('.calc').removeClass('calc_active');
  });

  $('.form__line input').blur(function () {
    if (!$(this).val()) {
      $(this).closest('.form__line label').removeClass('full');
    }
  });
  $('.form__line input').each(function () {
    var text_value = $(this).val();
    if (text_value != "" || $(this).is(':focus')) {
      $(this).closest('.form__line label').addClass('full');
    }
  });
  $('.form__line input').focus(function () {
    $(this).parent().find('label').addClass('full');
  });
});
