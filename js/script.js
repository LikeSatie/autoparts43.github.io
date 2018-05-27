$(document).ready(function () {

  $('.navbar-toggler').click(function () {

    $('.navbar-toggler').toggleClass('change')

  })
  $(window).scroll(function () {

    let position = $(this).scrollTop();

    if (position >= 718) {
      $('.navbar').addClass('navbar-background');
      $()
    }

  })
  $('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {
      enabled: true
    }
  });
});
