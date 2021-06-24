//I think the best approach is calling this in a submit or button click event
const buttonClick = () => {
  const newEvents = [...events]; //This spreads every element inside the events array into a new one
  newEvents.push({
    title: eventTitleState, //You also need a useState for the title
    start: moment().toDate(),
    end: moment(),
  });
  setEvents(newEvents);
}
