$(document).ready(function() {

    var content = "Hello I am Frontend Web Developer.";

    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';


    $(ele).hide().appendTo('.home .home-content .text-1').each(function(i) {
        $(this).delay(300 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });





    $(".about .about-content .right .read a").click(function() {
        $(this).text($(this).text() == 'See Less' ? 'Read more...' : 'See Less');
    });
    //THIS IS FOR link smooth behavior
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    //navigation switch sticky
    $(window).scroll(function() {
        //-------------------------///
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (this.scrollY > 400) {
            $('.about .about-content .left img,  .about .about-content .right').addClass("sticky");
        } else {
            $('.about .about-content .left img, .about .about-content .right').removeClass('sticky');
        }
        if (this.scrollY > 820) {
            $('.service .title, .service .service-content .card').addClass("sticky");
        } else {
            $('.service .title, .service .service-content .card').removeClass('sticky');
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
    $('.about .about-content .right .read').click(function() {
        $(this).toggleClass('active');

        $('.about .about-content .right .more').delay(300).slideToggle(500)("active");


    });


});
