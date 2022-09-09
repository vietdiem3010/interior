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
    $(".menu_type_2").toggleClass("menu_open");
    $(".h_type_2").toggleClass("h_fixed_super");
  });
  $("#nav_about, #nav_about span").hover(function () {
    $('.menu__bg[data-id="about"]').addClass("menu__bg_active");
  });
  $("#nav_about").mouseout(function () {
    $('.menu__bg[data-id="about"]').removeClass("menu__bg_active");
  });

  $("#nav_projects, #nav_projects span").hover(function () {
    $('.menu__bg[data-id="projects"]').addClass("menu__bg_active");
  });
  $("#nav_projects").mouseout(function () {
    $('.menu__bg[data-id="projects"]').removeClass("menu__bg_active");
  });

  $("#nav_services, #nav_services span").hover(function () {
    $('.menu__bg[data-id="services"]').addClass("menu__bg_active");
  });
  $("#nav_services").mouseout(function () {
    $('.menu__bg[data-id="services"]').removeClass("menu__bg_active");
  });

  $("#nav_contact, #nav_contact span").hover(function () {
    $('.menu__bg[data-id="contact"]').addClass("menu__bg_active");
  });
  $("#nav_contact").mouseout(function () {
    $('.menu__bg[data-id="contact"]').removeClass("menu__bg_active");
  });
});
