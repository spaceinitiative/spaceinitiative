/**
 * TumblrPostLink.js
 * -----------------
 * Represents a Tumblr post of type 'link'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostLink(data)
{
  TumblrPost.call(this, data);
}

// subclass
TumblrPostLink.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostLink.prototype.constructor = TumblrPostLink;


// ********************
// * instance methods *
// ********************

/**
 * Renders a link post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostLink.prototype.render = function(outputElem)
{
  $(outputElem).text('This is a link');
};
