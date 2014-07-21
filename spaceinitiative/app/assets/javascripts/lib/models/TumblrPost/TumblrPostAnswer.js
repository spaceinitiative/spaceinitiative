/**
 * TumblrPostAnswer.js
 * -------------------
 * Represents a Tumblr post of type 'answer'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostAnswer(data)
{
  TumblrPost.call(this, data);
}

// subclass
TumblrPostAnswer.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostAnswer.prototype.constructor = TumblrPostAnswer;

// ********************
// * instance methods *
// ********************

/**
 * Renders an answer post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostAnswer.prototype.render = function(outputElem)
{
  $(outputElem).text('This is an answer');
};
