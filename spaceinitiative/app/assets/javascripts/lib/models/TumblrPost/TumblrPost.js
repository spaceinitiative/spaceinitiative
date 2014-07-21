/**
 * TumblrPost.js
 * -------------
 * Defines base class of Tumblr post objects
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPost(data)
{
  this.data = data;
  this.date = data.date;
}

// *************
// * constants *
// *************

/** Format that Tumblr returns times in */
TumblrPost.TIME_INPUT_FORMAT = 'YYYY-MM-DD hh:mm:ss GMT';

/** Time format to output time as */
TumblrPost.TIME_OUTPUT_FORMAT = 'dddd MMM DD, YYYY, h:mm a';

// ******************
// * static methods *
// ******************

/**
 * Formats dates retrieved from Tumblr.
 * @param {string} date Date to format
 * @return {string} Formatted date
 */
TumblrPost.formatDate = function(date)
{
    var date_obj = moment(date, this.TIME_INPUT_FORMAT);
    return date_obj.format(this.TIME_OUTPUT_FORMAT);
};

// ********************
// * instance methods *
// ********************

/**
 * Generates title elements for titles retrieved from Tumblr.
 * @return {object} Title DOM element
 */
TumblrPost.prototype.createTitle = function()
{
  if (this.title && this.title !== '') {
    var title_elem = document.createElement('h2');
    $(title_elem).attr('class', 'newsTitle');
    $(title_elem).text(this.title);
    return title_elem;
  } else {
    return null;
  }
};

/**
 * Generates formatted elements for dates retrieved from Tumbl.
 * @param {string} date Date to format
 * @param {object} Date element to return
 */
TumblrPost.prototype.createDate = function(date)
{
  var date_elem = document.createElement('span');
  $(date_elem).attr('class', 'newsDate');
  $(date_elem).text(TumblrPost.formatDate(this.date));
  return date_elem;
};

/**
 * Renders a post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPost.prototype.render = function(outputElem)
{
  var titleElem = this.createTitle();
  if (titleElem) {
    $(outputElem).append(this.createTitle());
  }
  $(outputElem).append(this.createDate());

  // render and add body
  var body = document.createElement('div');
  $(body).attr('class', 'newsBody');
  this.renderContent(body);
  $(outputElem).append(body);
};
