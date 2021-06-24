let array = [{
    id : 1,
    name : 'Jerry',
    date : '2020 - 07 - 17',
    subject : 'Math'
  },
  {
    id : 2,
    name : 'Tom',
    date : '2015 - 07 - 17',
    subject : 'Science'
  },
  {
    id : 3,
    name : 'Lily',
    date : '2018 - 07 - 17',
    subject : 'Biology'
  }
];
const today = new Date;
if(array.every(({date})=>new Date(date.replace(/\s+/g, '')) > today)){
  console.log('valid');
} else {
  console.log('invalid');
}