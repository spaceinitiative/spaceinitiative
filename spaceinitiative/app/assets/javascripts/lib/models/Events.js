/**
 * Events.js
 * ---------
 * Represents a list of events as returned by Google Calendar.
 */

/**
 * Constructor for Events
 * @constructor
 * @param {object} feed List of events as returned by Google Calendar
 */
function Events(feed) {
  this.feed = feed;
}

// *************
// * constants *
// *************

/** Format that Google Calendar returns times in */
Events.GCAL_TIME_FORMAT = 'YYYY-MM-DDThh:mm:ss.SSSZ';

/** Time format to output start time as */
Events.START_OUTPUT_FORMAT = 'dddd MMM DD YYYY, h:mm a';

/** Time format to output end time as */
Events.END_OUTPUT_FORMAT = 'h:mm a';

// ********************
// * instance methods *
// ********************

/**
 * Renders an event to the output element specified
 * @param {string} outputElem Page element to output to
 */
Events.prototype.render = function(outputElem)
{
  var eventList = document.createElement('ul');
  $(eventList).attr('class', 'eventList');

  // for each event, create the event element
  $(this.feed).each(function(index, event) {
    var listElem = document.createElement('li');
    $(listElem).attr('class', 'eventElem');

    // extract title
    var titleLink = document.createElement('a');
    $(titleLink).attr('class', 'eventTitleLink');
    $(titleLink).attr('href', event.link[0].href);

    var title = document.createElement('h2');
    $(title).attr('class', 'eventTitle');
    $(title).text(event.title.$t);

    $(titleLink).append(title);
    $(listElem).append(titleLink);

    // extract date
    var dateElem = document.createElement('span');
    $(dateElem).attr('class', 'eventDate');

    // calculate start time
    var startTime = moment(event.gd$when[0].startTime, Events.GCAL_TIME_FORMAT);
    startTime = startTime.format(Events.START_OUTPUT_FORMAT);

    // calculate end time
    var endTime = moment(event.gd$when[0].endTime, Events.GCAL_TIME_FORMAT);
    endTime = endTime.format(Events.END_OUTPUT_FORMAT);

    $(dateElem).text(startTime + ' – ' + endTime);
    $(listElem).append(dateElem);

    // extract description
    if (event.content.$t) {
      var description = document.createElement('p');
      $(description).attr('class', 'eventDesc');
      $(description).text(event.content.$t);
      $(listElem).append(description);
    }

    // append generated elements
    $(eventList).append(listElem);
  });

  // set outputElem contents to contain generated event list
  $(outputElem).append(eventList);
};
