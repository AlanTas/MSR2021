let newCityStateObject = cities.reduce((acc, item, index) => {
  if (item) {
    // this object has state as key, and the desired output array’s item as value
    const object = acc.obj;

    // if state not found, create new record
    if (object[item.state] === undefined) {
      const record = { name: item.state, cities: [] }
      object[item.state] = record;
      acc.array.push(record);
    }

    const record = object[item.state];
    record.cities.push(item.city);
  }
  return acc;
}, { obj: {}, array: [] }).array;
