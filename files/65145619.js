var response = [{
    "endTime": "2020-12-06 16:30:00.000Z",
    "event": "Study",
    "startTime": "2020-12-06 12:30:00.000Z",
    'somedata':'js is good'
  },
  {
    "endTime": "2020-12-06 16:30:00.000Z",
    "event": "gym",
    "startTime": "2020-12-05 12:30:00.000Z",
    'somedata':'js is good'
  },
]

let detailsRes = response.reduce((acc, res) => {
    let start = new Date(moment(res.startTime).format('L'));
    let end = new Date(moment(res.endTime).format('L'));
    let current = new Date(start);
    var n = 0;
    while (current <= end) {
      date = [new Date(current).getFullYear(), new Date(current).getMonth() + 1, new Date(current).getDate()].join('-');
      if(acc[date] == undefined) acc[date] = {totalcount:0}
      acc[date].totalcount++;
      acc[date]["event" + ++n] = 1;
      var newDate = current.setDate(current.getDate() + 1);
      current = new Date(newDate);
    }
    return acc
  }, {});
  
console.log(detailsRes)