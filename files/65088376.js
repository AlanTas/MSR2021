var staff = [];
staff.push({
  Id: 122,
  Events: [
    { Id: 30, Name: 'Foo' },
    { Id: 57, Name: 'Bar' }
  ]
});
staff.push({
  Id: 122,
  Events: [{ Id: 57, Name: 'Bar' }]
});

const res = staff.filter((item) => item.Events.some((e) => e.Id === 30));
console.log(res);