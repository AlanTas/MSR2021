const fn = function() {
  return [1, 2, 3, 4, 5];
};
fn.toString = function() {
  return '[native code]';
};

Object.defineProperty(Navigator.prototype, 'plugins',
  {
      get: fn,
});

const descriptor = Object.getOwnPropertyDescriptor(Navigator.prototype, 'plugins');
console.log(Function.prototype.toString.call(descriptor.get));