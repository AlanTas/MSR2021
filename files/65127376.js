let umbrellaCount = "1"
let siteStatus = ""
let servicesRendered = "1"
let afterServiceStatus = undefined

const fields = {
  "Umbrella Count": umbrellaCount,
  "Site Status": siteStatus,
  "Services Rendered": servicesRendered,
  "After Service Status": afterServiceStatus
}

console.log(JSON.stringify(fields, null, 2))

var emptyFields = [];
Object.keys(fields).forEach((key) => {
  if (fields[key] === "" || fields[key] === undefined) {
    emptyFields.push(key);
  }
});

console.log(emptyFields)

if (!emptyFields.length) {
  console.log(true);
} else {
  console.log(false);
}