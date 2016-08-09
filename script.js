
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




// MOTION GALLERY


   $('.gallery').each(function() { // the containers for all your galleries
    $(this).find('a').magnificPopup({
        type: 'image',
        gallery: {
          enabled:true
        }
    });

  });




   // STILL IMAGES

  $('#FILM').magnificPopup({
    items: [
      {
        src: 'img/66.jpg'

      },

      {
        src: 'img/2.jpg'
      },
      {
        src: 'img/120.jpg'
      },

      
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
}); 

$('#DIGITAL').magnificPopup({
    items: [
      {
        src: 'img/4.jpg'
      },

      {
        src: 'img/111.jpg'
      },
      {
        src: 'img/03.jpg'
      },

      
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
}); 



// STICKY HEADER


$('.NAV').sticky();
$('.NAV').hide();

$('.NAV').on('sticky-start', function () {
 $('.NAV').fadeIn();
});

$('.NAV').on('sticky-end', function () {
 $('.NAV').hide();
});





