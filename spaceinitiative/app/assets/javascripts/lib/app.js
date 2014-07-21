/**
 * app.js
 * ------
 * Entrypoint into application Javascript
 */

// smooth scroll anchor links
$('a').click(function() {
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
  return false;
});

$(document).ready(function() {
  // perform global initialization
  initPage();

  // load page-specific behavior
  page = $('body').data('page');
  if (typeof window[page] === 'function') {
    window[page].init();
  }
});
