$(function() {
  $('#header-menu-icon').click(function() {
    $('.menu-icon-modal-wrapper').slideDown();
  });

  $('.close-modal').click(function() {
    $('.menu-icon-modal-wrapper').slideUp();
  });

  $('#top-btn').click(function() {
    $('html, body').animate({
      'scrollTop': 0
    }, 'slow');
  });

  $('header a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

  $('.header-menu-icon-modal a').click(function() {
    var id = $(this).attr('href');
    var position =$(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });
});
