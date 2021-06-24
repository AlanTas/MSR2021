sample();

async function sample() {
  const data = await d3.csv('../static/sample.csv');

  uncount = (data, accessor) =>
    data.reduce((arr, item) => {
      const count = accessor(item)
      for (let i = 0; i < count; i++) {
        arr.push({
          ...item
        })
      }
      return arr
    }, []);

  const boxes = uncount(data, d => d.boxes);

  const nest = d3
    .nest()
    .key(d => d.venue)
    .entries(boxes);
}
