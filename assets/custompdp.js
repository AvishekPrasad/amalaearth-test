$(document).ready(function() {
  
  $('.review-slider').slick({
  centerMode: true,
  centerPadding: '170px',
  arrows: true,
  dots: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerMode: true,
       centerPadding: '100px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        centerPadding: '150px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
});
  
 $('.ingredients-slider').slick({
  centerMode: true,
  centerPadding: '0px',
  arrows: true,
  dots: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerMode: true,
       centerPadding: '0px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        centerPadding: '200px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerMode: false,
        slidesToShow: 1
      }
    }
  ]
 });
  
  $('.blog-slider').slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  
  
 $('.videos-slider').slick({
    dots: false,
   arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
  
 $(".set-tab .hdng-t").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content-collepse")
        .slideUp(100);
    } else {
      $(".set-tab .hdng-t").removeClass("active");
      $(this).addClass("active");
      $(".content-collepse").slideUp(200);
      $(this)
        .siblings(".content-collepse")
        .slideDown(100);
    }
  });
  
  $(".set-tab2 .hdng-t").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content-collepse2")
        .slideUp(100);
    } else {
      $(".set-tab2 .hdng-t").removeClass("active");
      $(this).addClass("active");
      $(".content-collepse2").slideUp(200);
      $(this)
        .siblings(".content-collepse2")
        .slideDown(100);
    }
  });
  
});