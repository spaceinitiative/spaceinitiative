/**
 * TumblrPostPhoto.js
 * ------------------
 * Represents a Tumblr post of type 'photo'
 */

/**
 * @constructor
 * @param {object} data Data for post from Tumblr
 */
function TumblrPostPhoto(data)
{
  TumblrPost.call(this, data);
  this.title = $(data.caption).text();
}

// subclass
TumblrPostPhoto.prototype = inherit(TumblrPost.prototype);
/** Constructor of original object */
TumblrPostPhoto.prototype.constructor = TumblrPostPhoto;

// ********************
// * instance methods *
// ********************

/**
 * Renders a photo post to the output element specified
 * @param {string} outputElem Page element to output to
 */
TumblrPostPhoto.prototype.renderContent = function(outputElem)
{
  $(this.data.photos).each(function(index, photo_data) {
    var img = document.createElement('img');
    $(img).attr('class', 'newsPhoto');
    $(img).attr('src', photo_data.original_size.url);
    $(outputElem).append(img);

    if (photo_data.caption !== '') {
      var caption = document.createElement('caption');
      $(caption).attr('class', 'newsPhotoCaption');
      $(caption).text(photo_data.caption);
      $(outputElem).append(img);
    }
  });
};
