(function () {
  'use strict';

  $('nav a').click(function() {
    var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 2000, 'easeOutCubic');

    return false;
  });

})();