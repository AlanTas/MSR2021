const current = [
{ studentName: 'Name', ItemNumber: 1, Score: 0 }, 
{ studentName: 'Name', ItemNumber: 2, Score: 1 }]

const map = current.reduce((map, { studentName, ItemNumber, ...props }) => {
  // collect by studentName
  return map.set(studentName, {
    ...(map.get(studentName) ?? {}), // merge any previously found entries
    ...Object.fromEntries(Object.entries(props).map(([ key, val ]) =>
      [ `Item${ItemNumber}${key}`, val ]))
  })
}, new Map())

const needed = Array.from(map, ([ studentName, data ]) => ({
  studentName,
  ...data
}))

console.info(needed)