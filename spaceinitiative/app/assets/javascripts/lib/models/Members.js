/**
 * members.js
 * ----------
 * Registry of members
 */

/**
 * @constructor
 * @param {object} data json object containing members data
 */
function Members(data) {
  this.data = data;
}

// ********************
// * instance methods *
// ********************

/**
 * Renders all member cards to the output element specified
 * @param {string} outputElem Page element to output to
 */
Members.prototype.render = function(outputElem)
{
  var memberCards = document.createElement('div');
  $(memberCards).attr('class', 'member_cards');

  $(this.data).each(function(index, memberData) {
    var member = new Member(memberData);

    // create member card wrapper
    var fullMemberCard = document.createElement('div');
    $(fullMemberCard).addClass('full_member_card');
    var cardId = 'member-' + member.getId();
    $(fullMemberCard).attr('id', cardId);

    // create member card
    var memberCard = document.createElement('div');
    $(memberCard).attr('class', 'member_card');
    member.renderCard(memberCard);

    // create bio card
    var memberBio = document.createElement('div');
    var memberBioText = document.createElement('p');

    $(memberBio).attr('class', 'member_card_bio');
    $(memberBioText).text(member.getBio());
    $(memberBio).append(memberBioText);
    $(memberBio).hide();

    // create close button

    var closeBtn = document.createElement('span');
    $(closeBtn).text('close');
    $(closeBtn).attr('class', 'member_card_close_button');
    $(memberBio).append(closeBtn);

    // add click events
    $(memberCard).click(function(event) {
      $(fullMemberCard).toggleClass('full_member_card_clicked', true);
      $(memberCard).toggleClass('member_card_clicked', true);
      $(memberBio).show();

      // scroll to clicked bio after reflow is complete
      setTimeout(function() {
        $('html, body').animate({
          scrollTop: $(fullMemberCard).offset().top
        }, 500);
      }, 1);
    });

    $(document).click(function(event) {
      if ($(event.target).attr('id') !== cardId &&
          $(event.target).parents().index($('#' + cardId)) == -1 &&
          $(memberBio).is(':visible')
      ) {
        $(memberCard).toggleClass('member_card_clicked', false);
        $(fullMemberCard).toggleClass('full_member_card_clicked', false);
        $(memberBio).hide();
      }
    });

    $(closeBtn).click(function(event) {
      $(memberCard).toggleClass('member_card_clicked', false);
      $(fullMemberCard).toggleClass('full_member_card_clicked', false);
      $(memberBio).hide();
    });

    // append
    $(fullMemberCard).append(memberCard);
    $(fullMemberCard).append(memberBio);
    $(memberCards).append(fullMemberCard);
  });

  $(outputElem).append(memberCards);
};
