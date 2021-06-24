
$.getJSON(url, function (data) {
    var events = data.resultsPage.results.event;
    console.log(events);

    // Initially filter out all the events with status "cancelled" so they won't be rendered
    const filteredEvents = events.filter(event => event.status !== "cancelled");
    // Running on the filtered events
    filteredEvents.forEach(function (item, index, array) {
    ...
    });
  });
