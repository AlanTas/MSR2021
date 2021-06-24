const mgrs = require("mgrs");
const _ = require("lodash");

// Some sample users living within a few kms 
let users = [
    { first: 'Andreias', last: 'Aragão', lat: 51.51697, lon: -0.11894 },
    { first: 'Babür', last: 'Erberk', lat: 51.50041, lon: -0.12823 },
    { first: 'William', last: 'Jørgensen', lat: 51.49879, lon: -0.13041 },
    { first: 'Clyde', last: 'Crawford', lat: 51.50928, lon: -0.1226 },
    { first: 'Silvijn', last: 'Werts', lat: 51.49843, lon: -0.12066 },
    { first: 'Jokubas', last: 'Laastad', lat: 51.50517, lon: -0.12312 },
    { first: 'Rebecca', last: 'Lawson', lat: 51.5018, lon: -0.12786 },
    { first: 'Oscar', last: 'Opland', lat: 51.50123, lon: -0.13245 },
    { first: 'Cláudio', last: 'Costa', lat: 51.50354, lon: -0.13123 },
    { first: 'Juan', last: 'Ruiz', lat: 51.50796, lon: -0.12884 }
]

// Add user MGRS grid square
users = users.map(user => {
    // Get MGRS grid location accurate to ~1km
    user.mgrs = mgrs.forward([user.lon, user.lat], 2);
    return user;
})

const usersByLocation = _.groupBy(users, "mgrs");
console.log(usersByLocation);

{
    '30UXC9911': [
        {
          first: 'Andreias',
          last: 'Aragão',
          lat: 51.51697,
          lon: -0.11894,
          mgrs: '30UXC9911'
        }
      ],
      '30UXC9909': [
        {
          first: 'Babür',
          last: 'Erberk',
          lat: 51.50041,
          lon: -0.12823,
          mgrs: '30UXC9909'
        },
        {
          first: 'William',
          last: 'Jørgensen',
          lat: 51.49879,
          lon: -0.13041,
          mgrs: '30UXC9909'
        },
        {
          first: 'Silvijn',
          last: 'Werts',
          lat: 51.49843,
          lon: -0.12066,
          mgrs: '30UXC9909'
        },
        {
          first: 'Jokubas',
          last: 'Laastad',
          lat: 51.50517,
          lon: -0.12312,
          mgrs: '30UXC9909'
        },
        {
          first: 'Rebecca',
          last: 'Lawson',
          lat: 51.5018,
          lon: -0.12786,
          mgrs: '30UXC9909'
        },
        {
          first: 'Oscar',
          last: 'Opland',
          lat: 51.50123,
          lon: -0.13245,
          mgrs: '30UXC9909'
        },
        {
          first: 'Cláudio',
          last: 'Costa',
          lat: 51.50354,
          lon: -0.13123,
          mgrs: '30UXC9909'
        }
      ],
      '30UXC9910': [
        {
          first: 'Clyde',
          last: 'Crawford',
          lat: 51.50928,
          lon: -0.1226,
          mgrs: '30UXC9910'
        },
        {
          first: 'Juan',
          last: 'Ruiz',
          lat: 51.50796,
          lon: -0.12884,
          mgrs: '30UXC9910'
        }
      ]
}
