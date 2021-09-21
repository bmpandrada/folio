$(document).ready(function() {

    
    var supports = (function() {
        var d = document.documentElement,
            c = "ontouchstart" in window || navigator.msMaxTouchPoints;
        if (c) {
            d.className += " #service";
            return {
                touch: true
            }
        } else {
            d.className += " #service";
            return {
                touch: false
            }
        }
    })();
    
    
    
    
    
    //THIS IS FOR link smooth behavior

    $('a').click(function() {

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });


    //navigation switch sticky
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $("#about img").css({
            width: (150 + scroll / 17)

        });


        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass('sticky');
        }
    });


    //THIS IS FOR MENU TOGGLE
    //MENU TAB WILL APPEAR AFTER MINIMIZING
    $('.menu-btn').click(function() {
        $(this).toggleClass('active');

        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");
    });


    //THIS IS FOR AFTER CLICK MENU//
    $('.navbar .menu').on('click', event => {
        $(event.currentTarget).toggleClass("active");
        $(this).find('.menu-btn').toggleClass('active');

    });



});
