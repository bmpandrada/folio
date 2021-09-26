$(document).ready(function() {




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
          if (this.scrollY > 550) {
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


});
