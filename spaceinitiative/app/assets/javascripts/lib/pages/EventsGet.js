// URI for google calendar JSONP request.

function EventsGet() {
}

// TODO: make independent of events, index pages
EventsGet.GCAL_JSONP_CALLBACK = 'EventsGet.displayEvents';
EventsGet.GCAL_MAX_RESULTS = 5;
EventsGet.GCAL_URI = [
    'http://www.google.com/calendar/feeds/',
    '5or10qu0uhtfqcdqb3knrpn3r8%40group.calendar.google.com',
    '/public/full?alt=json-in-script&callback=',
    EventsGet.GCAL_JSONP_CALLBACK,
    '&orderby=starttime&max-results=',
    EventsGet.GCAL_MAX_RESULTS,
    '&singleevents=true&sortorder=ascending&futureevents=true'
  ].join('');
EventsGet.GCAL_SCRIPT_ELEM = 'indexGcalLoader';
EventsGet.EVENTS_ELEM = '#events';

EventsGet.init = function() {
  this.loadEvents();
};

EventsGet.loadEvents = function() {
  LoadingAnimation.start(this.EVENTS_ELEM);

  // launch jsonp request
  var gcalJsonpElem = document.createElement('script');
  $(gcalJsonpElem).attr('id', this.GCAL_SCRIPT_ELEM);
  gcalJsonpElem.src = this.GCAL_URI;
  $('#head').append(gcalJsonpElem);
};

EventsGet.displayEvents = function(data) {
  LoadingAnimation.stop(this.EVENTS_ELEM);
  var events = new Events(data.feed.entry);
  events.render(this.EVENTS_ELEM);
};
