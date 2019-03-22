$(document).ready(function () {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  //burger

  $('.burger-opener').on('click', function () {
    $('.menu').toggleClass('show');
    $('.line').toggleClass('active');
    $('.offer-buttons').toggleClass('none');
    $('.offer-border').toggleClass('none');
  });

  $('.menu-portfolio-mob').on('click', function () {
    $('.dropdown-mob').slideToggle('');
  });

  $('.menu-catalog-mob').on('click', function () {
    $('.menu-dropdown-wrap').slideToggle('');
  });

  $('.classic-mob').on('click', function () {
    $('.classic-desk-mob').slideToggle('');
    $('.arrow-mob-top').toggleClass('show');
  });

  $('.modern-mob').on('click', function () {
    $('.modern-desk-mob').slideToggle('');
    $('.arrow-mob-bottom').toggleClass('show');
  });

  //modalka

  $('.modal-btn').on('click', function () {
    $('.popup-modal-calc').fadeIn('');
    $('body').css('overflow', 'hidden');
  });

  $('.modal-content-close').on('click', function () {
    $('.popup-modal-calc').fadeOut('');
    $('.popup-modal-letter').fadeOut('');
    $('body').css('overflow', 'auto');
  });

  $('.letter-btn').on('click', function () {
    $('.popup-modal-letter').fadeIn('');
    $('body').css('overflow', 'hidden');
  });
  
  

});

var $slider = $('.slideshow .slider'),
maxItems = $('.item', $slider).length,
dragging = false,
tracking,
rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: true,
  dots: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  }
// }).on("mousewheel", function(event) {
//   event.preventDefault();
//   if (event.deltaX > 0 || event.deltaY < 0) {
//     $(this).slick('slickNext');
//   } else if (event.deltaX < 0 || event.deltaY > 0) {
//     $(this).slick('slickPrev');
//   };
}).on('mousedown touchstart', function(){
  dragging = true;
  tracking = $('.slick-track', $slider).css('transform');
  tracking = parseInt(tracking.split(',')[5]);
  rightTracking = $('.slideshow-right .slick-track').css('transform');
  rightTracking = parseInt(rightTracking.split(',')[5]);
}).on('mousemove touchmove', function(){
  if (dragging) {
    newTracking = $('.slideshow-left .slick-track').css('transform');
    newTracking = parseInt(newTracking.split(',')[5]);
    diffTracking = newTracking - tracking;
    $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
  }
}).on('mouseleave touchend mouseup', function(){
  dragging = false;
});

$('.slideshow-right .slider').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

$('.magazines-slider').slick({
  arrows: false,
  infinite: true
});

$('.arrow-prev').on('click', function() {
  $('.magazines-slider').slick('slickPrev');
});

$('.arrow-next').on('click', function() {
  $('.magazines-slider').slick('slickNext');
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 200){
    $('.scroll-menu').addClass("sticky");
  }
  else{
    $('.scroll-menu').removeClass("sticky");
  }
});

$(window).resize(function () {
  var width = $('body').innerWidth()
  if (width < 426) {
    $('.advantages').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

});

$(window).resize(function () {
  var width = $('body').innerWidth()
  if (width < 426) {
    $('.skills-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

});

$(window).resize(function () {
  var width = $('body').innerWidth()
  if (width < 426) {
    $('.tours-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

});