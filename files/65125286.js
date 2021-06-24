const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const re = /(\d{2})\/(\w{3})\/(\d{4}):(\d{2}):(\d{2}):(\d{2}) (.*)/;

const makeDate = str => {
  const [_, dd, mmm, yyyy, hh, min, ss, tz] = str.match(re)
  const tzStr = [tz.slice(0, 3), ':', tz.slice(3)].join(''); // make ±hh:mm
  const mm = monthNames.indexOf(mmm.toLowerCase()); // English only
  const isoString = `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}${tzStr}`
  console.log(isoString)
  return new Date(isoString)
};

const str = "02/Dec/2020:23:58:15 +0000"
const d = makeDate(str);
console.log(d)