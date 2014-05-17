# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

ready = ->
  $('#show-games').click () ->
    $('html, body').animate {
      scrollTop: $('#testimonial').offset().top - 100
    }, 1200
    false

$(document).ready ready
$(document).on 'page:load', ready
