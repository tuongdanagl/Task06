$(document).ready(function(){
  
  // auto slide
  $('.c-slider__list').slick({
    autoplay: true,
    fade: true,
    speed: 5000,
  });

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
      if ($(this).scrollTop() > 2500) {
          $('.c-backtotop').fadeIn(1000);
      } else {
          $('.c-backtotop').fadeOut(1000);
      }
  });

  //Click event to scroll to top
  $('.c-backtotop').click(function(){
      $('html, body').animate({scrollTop : 0},1200);
      return false;
  });

  // Open menu
  $('.c-gnav__boxmenu').click(function(){
    $('.c-popup').toggleClass('is-popupopen');
    $('.c-popup__box').toggleClass('is-open');
    $('.c-btnmenu').toggleClass('is-open');
    var src = $('.c-gnav__boxmenu img').attr('src');
    if( src == '/assets/img/menu.png' ){ src ='/assets/img/cancel.png'}
    else{ src ='/assets/img/menu.png'}
    $('.c-gnav__boxmenu img').attr('src', src);
  });

  $('.c-popup__overlay').click(function() {
    $('.c-popup').removeClass('is-popupopen');
    $('.c-popup__box').removeClass('is-open');
    $('.c-gnav__boxmenu img').attr('src','/assets/img/menu.png')
 });

});