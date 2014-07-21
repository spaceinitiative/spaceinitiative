/**
 * initPage.js
 * -----------
 * Methods for initializing global page state
 */

/**
 * Modifies footer and content padding to create a sticky footer reliably
 */
function stickyFooter() {
  var footerHeight = $('#footer').height();
  $('#content').css('padding-bottom', footerHeight + 'px');
  $('#footer').css('margin-top', -footerHeight + 'px');
}

/**
 * Runs global initialization methods
 */
function initPage() {
  stickyFooter();
}
