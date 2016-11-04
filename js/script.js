
//ANCHOR TAGS ===============================

$(function(){
    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);
      var windowWidth = $(window).width();

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
      
      if(windowWidth < 769){
        $('#nav-icon3').removeClass('open')
        $('#NAVMENU').fadeOut(300)
     }
  });
});



//ANCHOR TAGS END ===============================


// VIDEO GALLERY

$("#lightgallery").lightGallery({
  enableTouch: true,
  hideBarsDelay: 900,
  selector: '.lightgallery-el'
}); 

// VIDEO GALLERY END ===============================


// IMAGE GALLERY ===============================

$('#FILM').on('click', function() {
 
    $(this).lightGallery({
        download: false,
        hideBarsDelay: 500,
        enableTouch: true,
        dynamic: true,
        dynamicEl: [{
            "src": 'img/F1.jpg',
        }, {
            'src': 'img/F2.jpg',
        }, 
            {
            'src': 'img/F3.jpg',
        },
        {
            'src': 'img/F4.jpg',
        },
        {
            'src': 'img/F5.jpg',
        },
        {
            'src': 'img/F6.jpg',
        },
        {
            'src': 'img/F7.jpg',
        },
        {
            'src': 'img/F8.jpg',
        },
        {
            'src': 'img/F9.jpg',
        },
        {
            'src': 'img/F10.jpg',
        },
        {
            'src': 'img/F11.jpg',
        },
        {
            'src': 'img/F12.jpg',
        },
        {
            'src': 'img/F13.jpg',
        }]
    })
 
});



$('#DIGITAL').on('click', function() {
 
    $(this).lightGallery({
        
        download: false,
        hideBarsDelay: 800,
        enableTouch: true,
        dynamic: true,
        dynamicEl: [{
            "src": 'img/D1.jpg',
        }, 
            {
            'src': 'img/D2.jpg',
            },
            {
            'src': 'img/D3.jpg',
            },
            {
            'src': 'img/D4.jpg',
            },
            {
            'src': 'img/D5.jpg',
            },
            {
            'src': 'img/D6.jpg',
            },
            {
            'src': 'img/D7.jpg',
            },
            {
            'src': 'img/D8.jpg',
            },
            {
            'src': 'img/D9.jpg',
            },
            {
            'src': 'img/D10.jpg',
            },
            {
            'src': 'img/D11.jpg',
            },
            {
            'src': 'img/D12.jpg',
            },
            {
            'src': 'img/D13.jpg',
            },
            {
            'src': 'img/D14.jpg',
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


$('#nav-icon3').click(function() {
    $('#NAVMENU').fadeToggle(300);
});


// COLLAPSIBLE NAV MENU END ===============================







// AJAX  ===================================================



$(function() {

    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(e) {
        // Stop the browser from submitting the form.
        e.preventDefault();

        // Serialize the form data.
        var formData = $(form).serialize();

        // Submit the form using AJAX.
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        })
        .done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        })
        .fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });

    });

});



// AJAX END      ===================================================




// STICKY HEADER ===============================


$('.NAV').sticky();
$('.NAV').hide();

$('.NAV').on('sticky-start', function () {
 $('.NAV').fadeIn();
});

$('.NAV').on('sticky-end', function () {
 $('.NAV').fadeOut(200);
});

// STICKY HEADER END ===============================
