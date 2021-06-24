const lastSeen = new Map();
for (const entry of myArray) {
    const {id, date, percentage} = entry;
    const last = lastSeen.get(id);
    if (last) {
        if (date > last.date && percentage > last.percentage) {
            // ...this entry is newer than the previous one with the matching ID
            // Replace the previous one (and possibly do something with `stuff`?)
            lastSeen.set(id, entry);
        }
    } else {
        lastSeen.set(id, entry);
    }
}

const myArray = [ { id: 'first', date: '2020-11-30', percentage: 10 }, { id: 'second', date: '2020-10-30', percentage: 20 }, { id: 'first', date: '2020-09-30', percentage: 30 } ];
const lastSeen = new Map()
for (const entry of myArray) {
    const {id, date, percentage} = entry;
    const last = lastSeen.get(id);
    if (last) {
        console.log(`Checking ${id} / ${date} / ${percentage}...`);
        if (date > last.date && percentage > last.percentage) {
            // ...this entry is newer than the previous one with the matching ID
            // Replace the previous one (and possibly do something with `stuff`?)
            console.log(`Replacing ${id}...`);
            lastSeen.set(id, entry);
        } else {
            console.log(`Not replacing ${id}`);
        }
    } else {
        console.log(`${id} is new, adding...`);
        lastSeen.set(id, entry);
    }
}
var lastSeen = Object.create(null);
for (let i = 0; i < myArray.length; ++i) {
    var entry = myArray[i];
    var last = lastSeen[entry.id];
    if (last) {
        if (entry.date > last.date && entry.percentage > last.percentage) {
            // ...this entry is newer than the previous one with the matching ID
            // Replace the previous one (and possibly do something with `stuff`?)
            lastSeen[entry.id] = entry;
        }
    } else {
        lastSeen[entry.id] = entry;
    }
}

const myArray = [ { id: 'first', date: '2020-11-30', percentage: 10 }, { id: 'second', date: '2020-10-30', percentage: 20 }, { id: 'first', date: '2020-09-30', percentage: 30 } ];
var lastSeen = Object.create(null);
for (let i = 0; i < myArray.length; ++i) {
    var entry = myArray[i];
    var last = lastSeen[entry.id];
    if (last) {
        console.log(`Checking ${entry.id} / ${entry.date} / ${entry.percentage}...`);
        if (entry.date > last.date && entry.percentage > last.percentage) {
            // ...this entry is newer than the previous one with the matching ID
            // Replace the previous one (and possibly do something with `stuff`?)
            console.log(`Replacing ${entry.id}...`);
            lastSeen[entry.id] = entry;
        } else {
            console.log(`Not replacing ${entry.id}`);
        }
    } else {
        console.log(`${entry.id} is new, adding...`);
        lastSeen[entry.id] = entry;
    }
}