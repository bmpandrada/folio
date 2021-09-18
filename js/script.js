$(document).ready(function() {


    //THIS IS FOR link smooth behavior
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    $(window).scroll(function() {

        //navigation switch sticky
        if (this.scrollY > 20) {
            $('.navbar,.menu-btn i').addClass("sticky");

        } else {
            $('.navbar,.menu-btn i').removeClass('sticky');
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
