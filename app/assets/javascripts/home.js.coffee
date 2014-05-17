# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

scroll_to = (target, duration) ->
  $('html, body').animate {
    scrollTop: target.offset().top
  }, duration

ready = ->
  $('#show-games').click (e) ->
    e.preventDefault()
    scroll_to $('#games'), 1000
    false

  $('#show-newsletter').click (e) ->
    e.preventDefault()
    scroll_to $('#newsletter'), 400
    false

$(document).ready ready
$(document).on 'page:load', ready
