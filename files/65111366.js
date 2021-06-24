function* filter(predicate, it) {
  for (const item of it) {
    if (predicate(item))
      yield item;
  }
}

function* map(fn, it) {
  for (const item of it) {
    yield fn(item);
  }
}


const checkedItems = new Map()
  .set("1"  , true)
  .set("1.5", true)
  .set("2"  , false);
  
const iterator = checkedItems.entries();
const onlyTrue = filter(([key, value]) => value, iterator);
const onlyTrueKeys = map(([key]) => key, onlyTrue);

console.log(Array.from(onlyTrueKeys));
function* filter(predicate, it) {
  for (const item of it) {
    if (predicate(item))
      yield item;
  }
}

function* map(fn, it) {
  for (const item of it) {
    yield fn(item);
  }
}

function transform(iterator, ...transformers) {
  return transformers.reduce((it, transform) => transform(it), iterator);
}


const checkedItems = new Map()
  .set("1"  , true)
  .set("1.5", true)
  .set("2"  , false);

const onlyTrueKeys = transform(
  checkedItems.entries(),
  
  filter.bind(null, ([key, value]) => value),
  map.bind(null, ([key]) => key),
  Array.from
);

console.log(onlyTrueKeys);
function* filter(it, pred) {
  for (const item of it) {
    if (pred(item))
      yield item;
  }
}

function* map(it, fn) {
  for (const item of it) {
    yield fn(item);
  }
}

class LazyTransformer {
  constructor(iterator) {
    this.iterator = iterator;
  }
  
  filter(predicate) {
    this.iterator = filter(this.iterator, predicate);
    return this;
  }
  
  map(fn) {
    this.iterator = map(this.iterator, fn);
    return this;
  }
  
  toArray() {
    return Array.from(this.iterator);
  }
}


const checkedItems = new Map()
  .set("1"  , true)
  .set("1.5", true)
  .set("2"  , false);

const transformer = new LazyTransformer(checkedItems.entries());

transformer
  .filter(([key, value]) => value)
  .map(([key]) => key);

console.log(transformer.toArray());