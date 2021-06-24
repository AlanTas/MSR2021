// 1.
const response = await fetch("/path/to/resource");
// 2.
if (!response.ok) {
    throw new Error("HTTP error " + response.status);
}
// 3.
const buffer = await response.arrayBuffer();
// 4.
const byteArray = new Uint8Array(buffer);
// 5.
const charArray = Array.from(byteArray, byte => String.fromCharCode(byte));
// 6.
const binaryString = charArray.join("");
// 7.
const theImage = btoa(binaryString);
