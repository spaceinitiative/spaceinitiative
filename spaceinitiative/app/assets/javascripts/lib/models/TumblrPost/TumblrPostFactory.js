/**
 * TumblrPostFactory.js
 * --------------------
 * Factory that, given Tumblr data, provides appropriate Post objects
 * corresponding to their types.
 */

/**
 * @constructor
 */
function TumblrPostFactory()
{
}

// ******************
// * static methods *
// ******************

/**
 * Creates a Post object for Tumblr post data corresponding to the type
 * of the post.
 * @param {object} data Tumblr post as outputted by Tumblr API
 * @return {TumblrPost} Relevant post object
 */
TumblrPostFactory.create = function(data)
{
  var capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  postType = 'TumblrPost' + capitalize(data.type);
  console.log('creating ' + postType);
  return new window[postType](data);
};
