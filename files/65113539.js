[
    undefined, /* sparse */
    [
        1,
        4
    ],
    undefined, /* sparse */
    [
        2,
        3
    ]
]

function adjustPreference(preference) {
    let temp = [],
        t = 1;
    
    for (let i = 1; i < 5; i++) {
        (temp[preference[i]] = temp[preference[i]] || []).push(i);
    }
    
    temp.forEach(persons => {
        while (persons.length) {
            const random = persons.splice(Math.floor(Math.random() * persons.length), 1)[0];
            preference[random] = t++;
        }
    });
    
    return preference;
}

console.log(adjustPreference({ 1: 1, 2: 3, 3: 3, 4: 1 }));