/**
 * TumblrPostText.js
 * -------------
 * Represents a Tumblr post of type 'text'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostText(data)
{
  TumblrPost.call(this, data);
  this.title = data.title;
}

// subclass
TumblrPostText.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostText.prototype.constructor = TumblrPostText;

// ********************
// * instance methods *
// ********************

/**
 * Renders an text post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostText.prototype.renderContent = function(outputElem)
{
  $(outputElem).html(this.data.body);
};
