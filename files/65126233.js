function roundDown(floating) {
    var rounded = Math.round(floating * 100) / 100;
    return rounded;
}

const start = new Date("2020-12-03T11:30:00Z").getTime() / (1000 * 3600);
const end = new Date("2020-12-03T13:00:00Z").getTime() / (1000 * 3600)


let total = roundDown(end - start);


//just add these lines of code
const remaining = total - Math.floor(total);
const minutes = 60 * remaining;
console.log("Minutes : " + Math.round(minutes) + "\tHours : " + Math.floor(total));