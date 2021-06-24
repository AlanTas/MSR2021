let string = Array.from('w3resource');

for (let i = 0; i < string.length; i++) {
    let removeLast = string.pop();
    let insertFirst = string.unshift(removeLast);
    console.log(string);
}

VM355:6 (10) ["e", "w", "3", "r", "e", "s", "o", "u", "r", "c"]
VM355:6 (10) ["c", "e", "w", "3", "r", "e", "s", "o", "u", "r"]
VM355:6 (10) ["r", "c", "e", "w", "3", "r", "e", "s", "o", "u"]
VM355:6 (10) ["u", "r", "c", "e", "w", "3", "r", "e", "s", "o"]
VM355:6 (10) ["o", "u", "r", "c", "e", "w", "3", "r", "e", "s"]
VM355:6 (10) ["s", "o", "u", "r", "c", "e", "w", "3", "r", "e"]
VM355:6 (10) ["e", "s", "o", "u", "r", "c", "e", "w", "3", "r"]
VM355:6 (10) ["r", "e", "s", "o", "u", "r", "c", "e", "w", "3"]
VM355:6 (10) ["3", "r", "e", "s", "o", "u", "r", "c", "e", "w"]
