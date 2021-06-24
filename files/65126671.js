jQuery(document).ready(function($) {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    //...etc
  });
  calendar.render();

  $('.holiday').on('click', function() {
    calendar.addEventSource({
      events: [ // put the array in the `events` property
      {
        title: 'Test-Event',
        start: '2020-11-11',
        overlap: false,
        display: 'background',
        color: '#ff9f89'
      }
    ]
  });
});
