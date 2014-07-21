/**
 * News.js
 * -------
 * Represents a group of News posts from Tumblr
 */

/**
 * @constructor
 * @param {object} data Object containing posts from Tumblr
 */
function News(data) {
  this.data = data;
}

// ********************
// * instance methods *
// ********************

/**
 * Renders the news feed to the output element specified
 * @param {string} outputElem Page element to output to
 */
News.prototype.render = function(outputElem)
{
  var newsList = document.createElement('ul');
  $(newsList).attr('class', 'newsList');

  // for each news post, create the post element
  $(this.data.posts).each(function(index, post) {
    // wrap the raw post in a helper class
    post = TumblrPostFactory.create(post);

    var listElem = document.createElement('li');
    $(listElem).attr('class', 'newsElem');
    post.render(listElem);

    $(newsList).append(listElem);
  });

  $(outputElem).append(newsList);
};
