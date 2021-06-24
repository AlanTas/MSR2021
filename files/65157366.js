const settings = {};
settings.backgroundColor = '#FFF'; 
settings.textColor       = '#333'; 
settings.shadowColor     = '#DDD';

Object.freeze(settings)

settings.textColor = "#FFF";
console.log(settings)

settings.newColor = "#FFF";
console.log(settings)

delete settings.textColor
console.log(settings)
function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Object.getOwnPropertyNames(object);
  // Freeze properties before freezing self
  propNames.forEach(name => {
    const value = object[name];

    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  });
  return Object.freeze(object);
}

const obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);

obj2.internal.a = 'anotherValue'; 
console.log(obj2.internal.a)