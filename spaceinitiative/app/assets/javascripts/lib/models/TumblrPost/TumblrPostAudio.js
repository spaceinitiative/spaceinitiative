/**
 * TumblrPostAudio.js
 * ------------------
 * Represents a Tumblr post of type 'audio'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostAudio(data)
{
  TumblrPost.call(this, data);
}

// subclass
TumblrPostAudio.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostAudio.prototype.constructor = TumblrPostAudio;

// ********************
// * instance methods *
// ********************

/**
 * Renders an audio post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostAudio.prototype.renderContent = function(outputElem)
{
  $(outputElem).text('This is a Audio');
};
