function Rectangle(base, altura) {
  this.base = base;
  this.altura = altura;

  this.area = function() {
    return this.base * this.altura;
  };

  this.perimetre = function() {
    return 2 * (this.base + this.altura);
  };

  this.toString = function() {
    return (
      '(b= ' +
      this.base +
      ', h= ' +
      this.altura +
      ', a = ' +
      this.area() +
      ', p =' +
      this.perimetre() +
      ')'
    );
  };
}

var rectangles = [
  new Rectangle(1, 1),
  new Rectangle(2, 2.05),
  new Rectangle(2, 5),
  new Rectangle(1, 3),
  new Rectangle(4, 4),
  new Rectangle(2, 8)
];
console.log('rectangles (before):');
rectangles.forEach(item => console.log(item.area()));

Array.prototype.ordenaPerArea = function() {
  return this.sort(function(rectA, rectB) {
    return rectA.area() - rectB.area();
  });
}

rectangles.ordenaPerArea();

console.log('rectangles (after):');
rectangles.forEach(item => console.log(item.area()));
function Rectangle(base, altura) {
  this.base = base;
  this.altura = altura;

  this.area = function() {
    return this.base * this.altura;
  };

  this.perimetre = function() {
    return 2 * (this.base + this.altura);
  };

  this.toString = function() {
    return (
      '(b= ' +
      this.base +
      ', h= ' +
      this.altura +
      ', a = ' +
      this.area() +
      ', p =' +
      this.perimetre() +
      ')'
    );
  };
}
var rectangles = [
  new Rectangle(1, 1),
  new Rectangle(2, 2.05),
  new Rectangle(2, 5),
  new Rectangle(1, 3),
  new Rectangle(4, 4),
  new Rectangle(2, 8)
];
console.log('rectangles (before):');
rectangles.forEach(item => console.log(item.area()));

Array.prototype.ordenaPerArea = function() {
  const orderedArray = this.map(item => item);
  orderedArray.sort(function(rectA, rectB) {
    return rectA.area() - rectB.area();
  });

  return orderedArray;
}

const orderedRectangles = rectangles.ordenaPerArea();


console.log('orderedRectangles:');
orderedRectangles.forEach(item => console.log(item.area()));
console.log('rectangles (after):');
rectangles.forEach(item => console.log(item.area()));