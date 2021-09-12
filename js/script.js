$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass('sticky');

        }
    });

    $('.navbar .menu li a').click(function() {
        $('html').css("scrollBehavior", "smooth");
    });
    //THIS IS FOR MENU TOGGLE
    //MENU TAB WILL APPEAR AFTER MINIMIZING
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn img').toggleClass("active");

    });
    //THIS IS FOR AFTER CLICK MENU//
    $('.navbar .menu').on('click', event => {
        $(event.currentTarget).toggleClass("active");
    });

});