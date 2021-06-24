const tests = [
    {
        str: "(Value1==6) and or not (Value2==0)?1:0",
        expect: ["Value1", "Value2"]
    },
    {
        str: "Value_1",
        expect: ["Value_1"]
    },
    {
        str: "(Value_1 * Value_2)",
        expect: ["Value_1", "Value_2"]
    },
    {
        str: "Value_Machine_Outcome==4?1:0",
        expect: ["Value_Machine_Outcome"] // Note I put this in an array
    }
];

const regex = /(?!and|or|not)\b[A-Z]\w*/gi;
for (const {str, expect} of tests) {
    const result = str.match(regex);
    const good = result.length === expect.length && result.every((v, i) => v === expect[i]);
    console.log(JSON.stringify(result), good ? "Ok" : "<== ERROR");
}
const paragraph = '(Value1==6) and (Value2==0)?1:0';
const regex = /\(([^=]+)/g;
const found = [];
let match;
while (!!(match = regex.exec(paragraph))) {
    found.push(match[1]);
}

console.log(found);

// expected output: Array ["Value1", "Value2"]
const paragraph = '(Value_1==6) and (Value_2==0)?1:0';
const regex = /\(([^=]+)/g;
const found = [];
let match;
while (!!(match = regex.exec(paragraph))) {
    found.push(match[1]);
}

console.log(found);

// expected output: Array ["Value1", "Value2"]