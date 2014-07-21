/**
 * TumblrPostQuote.js
 * ------------------
 * Represents a Tumblr post of type 'quote'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostQuote(data)
{
  TumblrPost.call(this, data);
}

// subclass
TumblrPostQuote.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostQuote.prototype.constructor = TumblrPostQuote;

// ********************
// * instance methods *
// ********************

/**
 * Renders an quote post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostQuote.prototype.render = function(outputElem)
{
  $(outputElem).text('This is a quote');
};
