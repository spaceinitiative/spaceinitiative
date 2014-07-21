function AboutGet() {
}

/** dom element to render members in */
AboutGet.MEMBERS_ELEM = '#member_cards';

/** get members from api, render in MEMBERS_ELEM */
AboutGet.loadMembers = function() {
  LoadingAnimation.start(AboutGet.MEMBERS_ELEM);
  $.get('/api/members.json').done(function(data) {
    LoadingAnimation.stop(AboutGet.MEMBERS_ELEM);
    var members = new Members(data);
    members.render(AboutGet.MEMBERS_ELEM);
  });
};

/** runs on page load */
AboutGet.init = function() {
  AboutGet.loadMembers();
};
