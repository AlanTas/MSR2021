function max(search, keys) {
    const temp = search.reduce((r, [key, ...data]) => {
        if (!r[key]) r[key] = [key, ...data];
        else data.forEach((v, i) => { if (r[key][i + 1] < v) r[key][i + 1] = v; });
        return r;
    }, {});

    return keys.map(key => temp[key]);
}

console.log(max([['#S!', 1, 1], ['#$@', 2, 5], ['#S!', 10, 12], ['#$@', 21, 5]], ['#S!','#$@']));
console.log(max([["A", 1, 2],["A", 12, 23],["A", 11, 23], ["A", 14, 42], ["A", 71, 32], ["B", 113, 42], ["B", 145, 62], ["C", 91, 32], ["C", 14, 222], ["C", 111, 2]], ["A", "B", "C"]));