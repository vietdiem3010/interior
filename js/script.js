$(document).ready(function(){
    $('.poster .slider').slick({
      prevArrow: $('.arrow_left'),
      nextArrow: $('.arrow_right'),
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true
    });
    $('.slider-photos .slider').slick({
      prevArrow: $('.arrow_left_slider'),
      nextArrow: $('.arrow_right_slider'),
    });
    $('.clients__slider').slick();

    
  AOS.init({ 
    offset: 0, 
    duration: 1000, 
    easing: 'ease-in-sine' 
  }); 
});
