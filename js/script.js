$(document).ready(function() {
//ANCHOR TAGS

$(function(){


    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});


// VIDEO GALLERY

//$("#lightgallery").lightGallery(); 

// VIDEO GALLERY END


// STICKY HEADER


$('.NAV').sticky();
$('.NAV').hide();

$('.NAV').on('sticky-start', function () {
 $('.NAV').fadeIn();
});

$('.NAV').on('sticky-end', function () {
 $('.NAV').hide();
});


});