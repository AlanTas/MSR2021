var arr = [{Month: "Nov-2020",Track: "MS",total: 100},
 {Track: "ZZ", Month: "Nov-2020",  total: 80},
 {Track: "ZZ", Month: "Dec-2020",  total: 20},
 {Track: "AA", Month: "Nov-2020",  total: 30},
 {Track: "AA", Month: "Dec-2020",  total: 20},
 {Track: "MS", Month: "Dec-2020",  total: 20}]

const result = arr.reduce((r, value, i) => {
const {Month, Track, total} = value

if(i > 0){
    var found = r.find(x=> x.Track == value.Track)
  if(found){
    const cumVal = found.total
    const newDatum = { total: total + cumVal, Month,  Track}
    r.push(newDatum);
  }else{
    const newDatum = { total: total, Month,  Track}
    r.push(newDatum);
  }
}else{
  const newDatum = { total: total, Month,  Track}
  r.push(newDatum);
}
return r;
}, [])
console.log(results)
