const regs = [
  {
    "id": "1",
    "date": 1606826246, // Tuesday, December 1, 2020 12:37:26 PM
    "customer": "customer 1",
  },
  {
    "id": "2",
    "date": 1604353553, // Monday, November 2, 2020 9:45:53 PM
    "customer": "customer 2",
  },
  {
    "id": "3",
    "date": 1606860022, // Tuesday, December 1, 2020 10:00:22 PM
    "customer": "customer 3",
  }
]

const filterTimestamp = 1606859476; // Tuesday, December 1, 2020 9:51:16 PM
const filterDateString = new Date(filterTimestamp*1000).toISOString().slice(0, 10);
// "2020-12-01" sliced from "2020-12-01T21:51:16.000Z"

const regsOnDate = regs.filter(o => (
  new Date(o.date*1000).toISOString().slice(0, 10) === filterDateString));

console.log( regsOnDate );
const regs = [
  {
    "id": "1",
    "date": 1606826246, // Tuesday, December 1, 2020 12:37:26 PM
    "customer": "customer 1",
  },
  {
    "id": "2",
    "date": 1604353553, // Monday, November 2, 2020 9:45:53 PM
    "customer": "customer 2",
  },
  {
    "id": "3",
    "date": 1606860022, // Tuesday, December 1, 2020 10:00:22 PM
    "customer": "customer 3",
  }
]


const filterTimestamp = 1606859476; // Tuesday, December 1, 2020 9:51:16 PM
const filterDateString = new Date(filterTimestamp*1000).toDateString();

const regsOnDate = regs.filter(o => (
  new Date(o.date*1000).toDateString() === filterDateString));

console.log( regsOnDate );