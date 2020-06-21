$(document).ready(function() {
  $('#nav-toggle').click(function() {
    $('nav').slideToggle()  
  })

  var home = $('#hero-section').offset().top
  var about = $('#about-section').offset().top
  var service = $('#service-section').offset().top
  var contact = $('#contact-section').offset().top

  $('#ang-up').hide()

  $(document).scroll(function() {
    var scrollPos = $(document).scrollTop();

    if(scrollPos >= 0 && scrollPos < about) {
      $('#home').css('background-color', '#49505F')
    } else {
      $('#home').css('background-color', 'unset')
      $('#home').mouseenter(function() {
        $('#home').css('background-color', '#49505F')
      })
      $('#home').mouseleave(function() {
        $('#home').css('background-color', 'unset')
      })
    }

    if(scrollPos >= about && scrollPos < service) {
      $('#about').css('background-color', '#49505F')
    } else {
      $('#about').css('background-color', 'unset')
      $('#about').mouseenter(function() {
        $('#about').css('background-color', '#49505F')
      })
      $('#about').mouseleave(function() {
        $('#about').css('background-color', 'unset')
      })
    }

    if(scrollPos >= service && scrollPos < contact) {
      $('#service').css('background-color', '#49505F')
    } else {
      $('#service').css('background-color', 'unset')
      $('#service').mouseenter(function() {
        $('#service').css('background-color', '#49505F')
      })
      $('#service').mouseleave(function() {
        $('#service').css('background-color', 'unset')
      })
    }

    if(scrollPos >= contact) {
      $('#contact').css('background-color', '#49505F')
    } else {
      $('#contact').css('background-color', 'unset')
      $('#contact').mouseenter(function() {
        $('#contact').css('background-color', '#49505F')
      })
      $('#contact').mouseleave(function() {
        $('#contact').css('background-color', 'unset')
      })
    }

    if(scrollPos > home) {
      $('#ang-up').fadeIn(1000)
    } else if (scrollPos < about) {
      $('#ang-up').fadeOut()
    }
  })
})

// var scrollPos = $(document).scrollTop();
