var appWidth = 800;
var appHeight = 600;

var app = new PIXI.Application(appWidth, appHeight, {transparent : true});
document.getElementById('display').appendChild(app.view);

// used for width and height
var squareSize = 100;
// var squareColor = 0xFF700B;
// var squareColor = 0x7faaef;
var squareColor = 0xffffff;
var lightGreen = 0x1fed04;

var createSquare = function(x, y, size, color) {
  var square = new PIXI.Graphics();
  // set the lineStyle to 0 so the square doesn't have an outline
  // square.lineStyle(0);
  // square.lineStyle(2, 0x0000FF, 1);
  square.lineStyle(2, 'black', 1);
  square.beginFill(color, 1);
  square.drawRect(x, y, size, size);

  return square;
}

var square = createSquare(0, 0, squareSize, squareColor);
var squareTexture = square.generateTexture();

var createSquareSprite = function(x, y, size) {
  var squareSprite = new PIXI.Sprite(squareTexture);

  squareSprite.x = x;
  squareSprite.y = y;
  squareSprite.width = size;
  squareSprite.height = size;

  // set a random tint
  // squareSprite.tint = Math.random() * 0xFFFFFF;

  return squareSprite;
}

// draw the game board squares
var squares = [];
var row;
var squareSprite;
for (var y = 0; y < Math.floor(appHeight / squareSize); y++) {
  // do a row
  row = [];
  for (var x = 0; x < Math.floor(appWidth / squareSize); x++) {
    squareSprite = createSquareSprite(x * squareSize, y * squareSize, squareSize);
    app.stage.addChild(squareSprite);
    row.push(squareSprite);
  }
  squares.push(row);
}

// squares[y][x].

var tintSquare = function(x, y, color) {
  squares[y][x].tint = color;
}

// tintSquare(0, 0, lightGreen);

var tetrisShapes = ['I', 'S', 'Z', '3', 'E', 'L', 'J'];

var drawTetrisShape = function(x, y, shape) {
  if (shape == 'I') {
    tintSquare(x, y, lightGreen);
    tintSquare(x, y+1, lightGreen);
    tintSquare(x, y+2, lightGreen);
    tintSquare(x, y+3, lightGreen);
  }
}

drawTetrisShape(2, 2, 'I');
