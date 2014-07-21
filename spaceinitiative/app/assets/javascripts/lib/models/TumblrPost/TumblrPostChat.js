/**
 * TumblrPostChat.js
 * -----------------
 * Represents a Tumblr post of type 'chat'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostChat(data)
{
  TumblrPost.call(this, data);
}

// subclass
TumblrPostChat.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostChat.prototype.constructor = TumblrPostChat;

// ********************
// * instance methods *
// ********************

/**
 * Renders a chat post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostChat.prototype.renderContent = function(outputElem)
{
  $(outputElem).text('This is a Chat');
};
