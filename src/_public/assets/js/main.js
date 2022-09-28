$(document).ready(function(){
  
  // auto slide
  $('.c-slider__list').slick({
    fade: true,
      autoplay: true,
      autoplayspeed: 5000,
      speed: 2000,
      arrows: false,
      dots: false,
      pauseOnFocus: false,
      pauseOnHover: false,
  });

  //Check to see if the window is top if not then display button
  $(".c-backtotop").addClass("c-hidetop");
  $(window).scroll(function(){
      if ($(this).scrollTop() > 80) {
          $('.c-backtotop').removeClass("c-hidetop");
      } else {
          $('.c-backtotop').addClass("c-hidetop");
      }
  });

  //Click event to scroll to top
  $('.c-backtotop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

  // Open menu
  $('.c-gnav__boxmenu').click(function(){
    $('.c-popup').toggleClass('is-popupopen');
    $('.c-popup__box').toggleClass('is-open');
    $('.c-btnmenu').toggleClass('is-open');
    var src = $('.c-gnav__boxmenu img').attr('src');
    if( src == './assets/img/menu.png' ){ src ='./assets/img/cancel.png'}
    else{ src ='./assets/img/menu.png'}
    $('.c-gnav__boxmenu img').attr('src', src);
  });

  $('.c-popup__overlay').click(function() {
    $('.c-popup').removeClass('is-popupopen');
    $('.c-popup__box').removeClass('is-open');
    $('.c-btnmenu').removeClass('is-open');
    $('.c-gnav__boxmenu img').attr('src','./assets/img/menu.png');
 });

});