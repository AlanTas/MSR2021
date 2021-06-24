const canvas = document.querySelector( 'canvas' );
const ctx = canvas.getContext( '2d' );
const size = 200;

canvas.width = canvas.height = size;

// Just to show that the content still comes through
ctx.fillStyle = 'red';
ctx.fillRect( 0, 0, size, size );

ctx.fillStyle = 'white';

ctx.beginPath();

// Clockwise Rectangle
ctx.moveTo( 10, 10 );
ctx.lineTo( 190, 10 );
ctx.lineTo( 190, 190 );
ctx.lineTo( 10, 190 );
ctx.lineTo( 10, 10 );

// Anti-Clockwise Rectangle
ctx.moveTo( 20, 20 );
ctx.lineTo( 20, 180 );
ctx.lineTo( 160, 180 );
ctx.lineTo( 160, 20 );
ctx.lineTo( 20, 20 );

ctx.fill();
const canvas = document.querySelector( 'canvas' );
const ctx = canvas.getContext( '2d' );
const size = 200;

canvas.width = canvas.height = size;

// Just to show that the content still comes through
ctx.fillStyle = 'red';
ctx.fillRect( 0, 0, size, size );

ctx.fillStyle = 'white';

ctx.beginPath();
ctx.ellipse( 100, 100, 100, 75, 0, 0, Math.PI * 2, false );
ctx.ellipse( 100, 100, 80, 50, Math.PI / 3, 0, Math.PI * 2, true );
ctx.fill();