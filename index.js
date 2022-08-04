$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(document).ready(function () {
  $(".close").click(function () {
    $(".Notification-bar").hide(1000);
  });
});
 
// side Bar

$(document).ready(function() {
 

  $('.menu-btn').click(function () {
      $('.side_bar').addClass('active');
    });
    
  $('.close-btn').click(function() {
      $('.side_bar').removeClass('active');
  });
});
