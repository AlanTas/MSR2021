const data = [
    { value: 0.35, name: 'a' },
    { value: 0.12, name: 'b' },
    { value: 0.05, name: 'c' },
    { value: 0.25, name: 'd' },
    { value: 0.23, name: 'e' },
];

for(let i = data.length - 1, cumulated = 0; i >= 0; i--) {
    cumulated += data[i].value;

    data[i].cumulated = cumulated < 0.5 ? cumulated : 1 - cumulated + data[i].value;
}

console.log(data);