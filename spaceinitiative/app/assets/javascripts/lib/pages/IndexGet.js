// URI for google calendar JSONP request.

function IndexGet() {
}

IndexGet.GCAL_JSONP_CALLBACK = 'IndexGet.displayEvents';
IndexGet.GCAL_MAX_RESULTS = 5;
IndexGet.GCAL_URI = [
    'http://www.google.com/calendar/feeds/',
    '5or10qu0uhtfqcdqb3knrpn3r8%40group.calendar.google.com',
    '/public/full?alt=json-in-script&callback=',
    IndexGet.GCAL_JSONP_CALLBACK,
    '&orderby=starttime&max-results=',
    IndexGet.GCAL_MAX_RESULTS,
    '&singleevents=true&sortorder=ascending&futureevents=true'
  ].join('');
IndexGet.GCAL_SCRIPT_ELEM = 'indexGcalLoader';
IndexGet.EVENTS_ELEM = '#events';

IndexGet.NEWS_NUM_POSTS = 5;
IndexGet.NEWS_URI = 'spaceinitiative.tumblr.com';
IndexGet.NEWS_ELEM = '#news';

IndexGet.init = function() {
  this.loadNews();
  this.loadEvents();
};

IndexGet.loadNews = function() {
  LoadingAnimation.start(this.NEWS_ELEM);
  $.get('/api/tumblr/posts.json', {
    uri: this.NEWS_URI,
    num_posts: this.NEWS_NUM_POSTS
  }).done(function(data) {
    LoadingAnimation.stop(IndexGet.NEWS_ELEM);
    var news = new News(data);
    news.render(IndexGet.NEWS_ELEM);
  });
};

IndexGet.loadEvents = function() {
  LoadingAnimation.start(this.EVENTS_ELEM);

  // launch jsonp request
  var gcalJsonpElem = document.createElement('script');
  $(gcalJsonpElem).attr('id', this.GCAL_SCRIPT_ELEM);
  gcalJsonpElem.src = this.GCAL_URI;
  $('#head').append(gcalJsonpElem);
};

IndexGet.displayEvents = function(data) {
  LoadingAnimation.stop(this.EVENTS_ELEM);
  var events = new Events(data.feed.entry);
  events.render(this.EVENTS_ELEM);
};
