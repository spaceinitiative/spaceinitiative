/**
 * TumblrPostVideo.js
 * ------------
 * Represents a Tumblr post of type 'video'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostVideo(data)
{
  TumblrPost.call(this, data);
}

// subclass
TumblrPostVideo.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostVideo.prototype.constructor = TumblrPostVideo;

// ********************
// * instance methods *
// ********************

/**
 * Renders an answer post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostVideo.prototype.render = function(outputElem)
{
  $(outputElem).text('This is a video');
};
