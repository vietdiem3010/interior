$(document).ready(function(){
    $('.slider-box .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        navText : ['<svg xmlns="http://www.w3.org/2000/svg" width="35.861" height="40.466" viewBox="0 0 35.861 40.466"><g id="Left_nav" data-name="Left nav" transform="translate(-4088.685 3069.022) rotate(-90)"><path id="Path_278" data-name="Path 278" d="M0,.039V8.77a2.46,2.46,0,0,0,.724,1.74L19.668,29.416a.039.039,0,0,0,.067-.028V19.63L.067.013A.039.039,0,0,0,0,.039Z" transform="translate(3068.522 4118.623) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/><path id="Path_279" data-name="Path 279" d="M19.668.01,0,19.634v9.841L19.012,10.51a2.46,2.46,0,0,0,.722-1.74V.037A.039.039,0,0,0,19.668.01Z" transform="translate(3048.789 4124.04) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="35.862" height="40.466" viewBox="0 0 35.862 40.466"><g id="Right_nav" data-name="Right nav" transform="translate(0.507 39.966) rotate(-90)"><path id="Path_278" data-name="Path 278" d="M0,29.39V20.659a2.46,2.46,0,0,1,.724-1.74L19.668.013a.039.039,0,0,1,.067.028V9.8L.067,29.416A.039.039,0,0,1,0,29.39Z" transform="translate(39.466 34.846) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/><path id="Path_279" data-name="Path 279" d="M19.668,29.465,0,9.841V0L19.012,18.965a2.46,2.46,0,0,1,.722,1.74v8.733a.039.039,0,0,1-.065.026Z" transform="translate(19.733 29.475) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/></g></svg>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('.products-box .owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1,
                margin: 10,
                stagePadding: 50,
            },
            600:{
                items:1,
                margin: 10,
                stagePadding: 100,
            },
            1000:{
                items:1,
                margin: 50,
                stagePadding: 300,
            }
        }
    });

    
    $('.blogs-wrapper .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                margin: 50,
                items:2
            },
            1000:{
                margin: 50,
                items:3
            }
        }
    });

    $('.clients-items.owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });

    $('.product-gallery-slide .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: false,
        navText : ['<svg xmlns="http://www.w3.org/2000/svg" width="35.861" height="40.466" viewBox="0 0 35.861 40.466"><g id="Left_nav" data-name="Left nav" transform="translate(-4088.685 3069.022) rotate(-90)"><path id="Path_278" data-name="Path 278" d="M0,.039V8.77a2.46,2.46,0,0,0,.724,1.74L19.668,29.416a.039.039,0,0,0,.067-.028V19.63L.067.013A.039.039,0,0,0,0,.039Z" transform="translate(3068.522 4118.623) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/><path id="Path_279" data-name="Path 279" d="M19.668.01,0,19.634v9.841L19.012,10.51a2.46,2.46,0,0,0,.722-1.74V.037A.039.039,0,0,0,19.668.01Z" transform="translate(3048.789 4124.04) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="35.862" height="40.466" viewBox="0 0 35.862 40.466"><g id="Right_nav" data-name="Right nav" transform="translate(0.507 39.966) rotate(-90)"><path id="Path_278" data-name="Path 278" d="M0,29.39V20.659a2.46,2.46,0,0,1,.724-1.74L19.668.013a.039.039,0,0,1,.067.028V9.8L.067,29.416A.039.039,0,0,1,0,29.39Z" transform="translate(39.466 34.846) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/><path id="Path_279" data-name="Path 279" d="M19.668,29.465,0,9.841V0L19.012,18.965a2.46,2.46,0,0,1,.722,1.74v8.733a.039.039,0,0,1-.065.026Z" transform="translate(19.733 29.475) rotate(180)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/></g></svg>'],
        responsive:{
            0:{
                items:1,
                nav:false,
                autoplay:true,
                autoplayTimeout:4000,
                autoplayHoverPause:true
            },
            600:{
                margin: 20,
                items:3
            },
            1000:{
                margin: 20,
                items:4
            }
        }
    });

    $('.button-search').on('click', function(){
        $('.search-box').toggleClass('active');
    });
    $('.header-menubar').on('click', function(){
        $('.header-menu').toggleClass('active');
        $(this).toggleClass('active');
        $('.header-menu').removeClass('hidden-menu');
    });
    $('.header-search-mb').on('click', function(){
        $('.header-menu').toggleClass('active');
        $('.header-menu').toggleClass('hidden-menu');
        $(this).toggleClass('active');
    });
    $(window).scroll(function(){
        var sticky = $('header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
    $('.video-click').on('click', function(){
        $(this).hide();
    });

    if ($(window).width() < 991) {
        $(".header-menu").appendTo("#header-mobile");
    }

      
});