const initObject = { 
  value: 5,
  next: {
   value: 10,
   next: {
     value: 15,
     next: null
   }
  }
}

const getValues = ({ value, next }) =>
  next 
    ? [value, ...getValues(next)] 
    : [value]

const createObject = values => 
  values.reduce((next, value) => ({ value, next }), null)

const output = createObject(getValues(initObject))

console.log(output)