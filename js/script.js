$(document).ready(function() {

    //THIS IS FOR INTRO CONTENT
    const content = "Hello, I am 🖳 Frontend WebDeveloper.";
    const ele = '<span>' + content.split('').join('</span><span>') + '</span>';

    $(ele).hide().appendTo('.home .home-content .text-1').each(function(i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
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

    //THIS IS FOR read/less text
    $(".about .about-content .right .read .readmore").click(function() {
        $(this).text($(this).text() == 'See Less' ? 'Read more...' : 'See Less');
    });
    $('.about .about-content .right .read').click(function() {
        $(this).toggleClass('active');
        $('.about .about-content .right .more').delay(200).slideToggle(500)("active");
    });


    //THIS IS FOR link smooth behavior
    $('a').click(function() {
        $('*').animate({
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
$('#contactForm').on('submit', function (e) {
  e.preventDefault();

  const data = {
    name: $('input[name="name"]').val(),
    email: $('input[name="email"]').val(),
    subject: $('input[name="subject"]').val(),
    message: $('textarea[name="message"]').val()
  };

  $.ajax({
    url: 'http://localhost:5000/send-email',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function (response) {
      alert('✅ Email sent!');
    },
    error: function (err) {
      console.error('❌ Email error:', err);
      alert('❌ Failed to send email.');
    }
  });
});



});


// server.js
import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Replace with your real Gmail + App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bmpandrada@gmail.com',
    pass: 'qmhf vcks kblw wvf' // use app password, not your real password
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'bmpandrada@gmail.com',
    subject: `Contact Form: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('❌ Email failed:', error);
      res.status(500).send('Email failed.');
    } else {
      console.log('✅ Email sent:', info.response);
      res.send('Email sent!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
