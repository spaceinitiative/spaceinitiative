/**
 * member.js
 * ----------
 * Representation of a single member
 */

/**
 * @constructor
 * @param {object} data json object containing members data
 */
function Member(data) {
  this.data = data;
}

Member.prototype.getId = function() {
  return this.data.id;
};

Member.prototype.getBio = function() {
  return this.data.bio;
};

Member.prototype.renderCard = function(outputElem) {
  var image = document.createElement('img');
  $(image).attr('class', 'member_card_thumb');

  if (this.data.thumb) {
    $(image).attr('src', this.data.thumb);
  } else {
    $(image).attr('src', '/assets/members/man-200.png');
  }

  var name = document.createElement('span');
  $(name).attr('class', 'member_card_name');
  $(name).text(this.data.name);

  var title = document.createElement('span');
  $(title).attr('class', 'member_card_title');
  $(title).text(this.data.title);

  $(outputElem).append(image);
  $(outputElem).append(name);
  $(outputElem).append(title);
};

Member.prototype.renderBio = function(outputElem) {

};
