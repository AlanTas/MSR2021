const input = [
  'ecl:hzl byr:1926 iyr:2010,pid:221225902 cid:61 hgt:186cm eyr:2021 hcl:#7d3b0c',
  'hcl:#efcc98 hgt:178 pid:433543520,eyr:2020 byr:1926,ecl:blu cid:92,iyr:2010',
  'iyr:2018,eyr:2026,byr:1946 ecl:brn,hcl:#b6652a hgt:158cm,pid:822320101'
]

const output = input.map((string) => {  // for each string in array
  const pairs = string.split(/[\ ,]/);  // split by space or comma
  const object = {};                    // create an object
  for (pair of pairs) {                 // for each pair in string
    const parts = pair.split(":");      // split by colon
    if (parts.length == 2) {            // if you get 2 parts after splitting
      object[parts[0]] = parts[1];      // use the first part as a key and the second as a value
    }
  }
  return object;
});

console.log(output);