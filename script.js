$(document).ready(function(){
$(window).scroll(function(){
  if(this.scrollY > 20){
    $('.navbar1').addClass("sticky")
    $('#redbutton').addClass("change")

  }
  else{
    $('.navbar1').removeClass("sticky")
      $('#redbutton').removeClass("change")

  }

  if(this.scrollY > 1){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
})

$('.navbar .menu ul a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

$('.menu-btn').click(function(){
  $('.navbar1 .menu').toggleClass('active');
  $('.menu-btn i').toggleClass('active');

  // $('#home').toggleClass("menu-btn i");
  // $('#about').toggleClass(".menu.active");
  // $('#services').toggleClass("menu-btn i");
  // $('#home').toggleClass("active");

})




});


if ($(window).width() < 960) {

   $(' .men').click(function(){
     $('.navbar1 .menu').toggleClass('active');
     $('.menu-btn i').toggleClass('active');

   })
}
else {
  $('.men').click(function(){
    $('.navbar1 .menu').stop('active');
    $('.menu-btn i').toggleClass('active');

    // $('#home').toggleClass("menu-btn i");
    // $('#about').toggleClass(".menu.active");
    // $('#services').toggleClass("menu-btn i");
    // $('#home').toggleClass("active");

  })
}



// letm launchDate = new Date("Jan 28, 2020 12:00:00").getTime();
// let timer = setInterval(tick, 1000);
//
// function tick() {
//   let now = new Date().getTime();
//
//   let t = launchdate - now;
//
//   if(t>0){
//     let days = Math.floor(t/(1000*60*60*24));
//
//  if(days<10){
//    days="0" + days;
//  }
//
// let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60))
//
//  if(hours<10){hours = "0" + hours;}
//
// let mins = Math.floor((t%(1000*60*60))/(1000*60))
// if(mins<10){mins = "0" + mins;}
//
// let secs = Math.floor((t%(1000*60))/1000);
// if(secs<10){secs = "0" + secs;}
//
// let time = '${days} : ${hours} : ${mins} : ${secs}';
//
//
// document.querySelector('.countdown').innertext = time;
//
//
//   }
//
// }


var typed = new typed(".typing",{
  strings: ["Student","FreeLancer","Blogger"],
  typespeed: 100,
  backspeed: 60,
  loop: true
});


const option = {
  bottom: '64px', // default: '32px'
right: '32px', // default: '32px'
left: 'unset', // default: 'unset'
time: '0.5s', // default: '0.3s'
mixColor: '#fff', // default: '#fff'
backgroundColor: '#fff',  // default: '#fff'
buttonColorDark: '#100f2c',  // default: '#100f2c'
buttonColorLight: '#fff', // default: '#fff'
saveInCookies: false, // default: true,
label: '🌓', // default: ''
autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();





$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar1').addClass("sticky");
        }else{
            $('.navbar1').removeClass("sticky");
        }

        // scroll-up button show/hide script
          if(this.scrollY > 500){
              $('.scroll-up-btn').addClass("show");
          }else{
              $('.scroll-up-btn').removeClass("show");
          }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar1 .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    // $('.menu-btn').click(function(){
    //     $('.navbar1 .menu').toggleClass("active");
    //     $('.menu-btn i').toggleClass("active");
    //     $('#home').toggleClass("menu-btn i");
    //     $('#about').toggleClass(".menu.active");
    //     $('#home').toggleClass("menu-btn i");
    //     $('#home').toggleClass("active");
    // });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});










$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar1 .menu ul a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar1 .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.navbar1 .menu').toggleClass("active");
    });

    // typing text animation script


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
