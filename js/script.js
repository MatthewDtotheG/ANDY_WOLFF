
//ANCHOR TAGS ===============================

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


//ANCHOR TAGS END ===============================




// VIDEO GALLERY

$("#lightgallery").lightGallery({
  enableTouch: true,
  selector: '.lightgallery-el'
}); 

// VIDEO GALLERY END ===============================



// IMAGE GALLERY ===============================

$('#FILM').on('click', function() {
 
    $(this).lightGallery({
        download: false,
        hideBarsDelay: 3000,
        enableTouch: true,
        dynamic: true,
        dynamicEl: [{
            "src": 'img/1A.jpg',
        }, {
            'src': 'img/120.jpg',
        }, 
            {
            'src': 'img/111.jpg',
        },
        {
            'src': 'img/4.jpg',
        }]
    })
 
});



$('#DIGITAL').on('click', function() {
 
    $(this).lightGallery({
        
        download: false,
        hideBarsDelay: 3000,
        enableTouch: true,
        dynamic: true,
        dynamicEl: [{
            "src": 'img/09.jpg',
        }, 
            {
            'src': 'img/111.jpg',
            },
        {
            'src': 'img/44.jpg',
        }]
    })
 
});



$('#RESUME').on('click', function() {
 
    $(this).lightGallery({
        counter: false,
        hideBarsDelay: 700,
        enableTouch: true,
        dynamic: true,
        dynamicEl: [{
            "src": 'img/RESUME.jpg',
        }]
    })
 
});


// IMAGE GALLERY END ===============================







// COLLAPSIBLE NAV MENU ===============================


$(document).ready(function(){
  $('#nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});




$('.toggle-nav').click(function() {
    $('#NAVMENU').slideToggle(250);
});


// COLLAPSIBLE NAV MENU END ===============================






// STICKY HEADER ===============================


$('.NAV').sticky();
$('.NAV').hide();

$('.NAV').on('sticky-start', function () {
 $('.NAV').fadeIn();
});

$('.NAV').on('sticky-end', function () {
 $('.NAV').hide();
});

// STICKY HEADER END ===============================
