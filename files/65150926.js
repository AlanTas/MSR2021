function scan(freightItems) {
  let contrabandIndexes = [];

  freightItems.forEach((el, idx) => {
    if (el == 'contraband') {
      contrabandIndexes.push(idx);
    }
  });
  return contrabandIndexes;
}

const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]
