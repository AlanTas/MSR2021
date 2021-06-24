let res = [];
let temp = [];

for (let i = 1; i <= 1; i++) {
    temp.push(i);
    if (temp.length === 1) {
       res.push(temp.slice());
       // wrong: res.push(temp);
    }
    temp.pop();
}
