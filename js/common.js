$(function()  {
    
        "use strict";

    /*
    ======================================
        Preloader
    ======================================
    */

    $('#loader, #loader_inner').delay(300).fadeOut('slow');

        /*
    ======================================
        Boxs
    ======================================
    */

    var item = '.box .box-hidden';

    $('.box .box-item').on({
        mouseenter: function() {
            $(this).next(item).slideDown();
        },
        mouseleave: function() {
            $(this).next(item).slideUp();
        }
    }, 'a');

        /*
    ======================================
        menu-brop
    ======================================
    */

    $('.menu-brop').on('click', 'a', function() {
        $(this).next('ul').slideToggle();
    });//end-boxs  

        /*
    ======================================
        Tabs
    ======================================
    */

    $('#tabs ul.tabs-caption').on('click', 'li', function() {
        var tab_id = $(this).attr('data-tab');

        $('#tabs ul.tabs-caption li, #tabs .tabs-content').removeClass('active');

        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    });//end-tabs

        /*
    ======================================
        owl-carousel
    ======================================
    */

    $('#carousel-header').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        items: 1,
        smartSpeed: 6000,
        autoplay: true,
        autoWidth: true,
        paginationSpeed: 2000

    });

        /*
    ======================================
        owl-carousel-top
    ======================================
    */

    $('#carousel-top').owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        margin: 5,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
            }
        }

    });

        /*
    ======================================
        owl-carousel-room
    ======================================
    */

    $('#carousel-room').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        center: true,
        stagePadding: 180,
        smartSpeed: 2000,
        autoWidth: true,
        autoplay: false,
        navText: ['<div class="prev"></div>', '<div class="next"></div>'],
        responsive: {
            0: {
                nav: false
            },
            500: {
                nav: false
            },
            600: {
                nav: false,
                autoWidth: true,
                stagePadding: 0

            },
            1000: {
                nav: true,
                stagePadding: 100,
                autoWidth: false
            },
            1620: {
                nav: true,
                autoWidth: false,
                stagePadding: 280
            }
        }
    });
});
        /*
    ======================================
        Google-map
    ======================================
    */

       var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center:new google.maps.LatLng(-21.1315735,-44.2556367),
          zoom: 19,
          scrollwheel: false
        });
      }

       /*
    ======================================
        END
    ======================================
    */