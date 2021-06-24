const myArray = [{ 'a': {'x': ['Bob', 'Rob', 'Mike'], 'y': [4, 5, 6],'name': 'a' }},{'b': {'x': ['Kris', 'Elen', 'Hanna'],'y': [10, 11, 12],'name': 'b'}}];

const switchKey = (obj, key1, key2) => {
  const {[key1]: a, [key2]: b} = obj;
  //swap here
  return {...obj, [key1]: b, [key2]: a}
}

const switched = myArray.map(o => {
  let [key, value] = Object.entries(o)[0];
  return {[key] : switchKey(value, "x", "y")};
});
console.log(switched);