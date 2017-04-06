import * as PIXI from 'pixi.js';
import Square from './SquareVisual.js';

export default class Artist {

	static appWidth = 800
	static appHeight = 600

	lightGreen = 0x1fed04
	squareColor = 0xffffff
	squareSize = 100	// used for width and height
	squares = []
	squareTexture = null

	app = null

	constructor(app) {
		this.app = app;
	}

	initialize() {

		this.initSquares();

		// tintSquare(0, 0, lightGreen);

		// TODO move this part to the GameEngine or something (wherever the data is handled for the squares and their states)
		var tetrisShapes = ['I', 'S', 'Z', '3', 'E', 'L', 'J'];
		this.drawTetrisShape(2, 2, 'I');
	}

	tintSquare(x, y, color) {
		this.squares[y][x].tint = color;
	}

	initSquares() {

		// TODO change the squares to be of type Square (SquareVisual)
		// also offload some of this logic per square to that class

		const square = this.createSquare(0, 0, this.squareSize, this.squareColor);
		this.squareTexture = square.generateTexture();

		// draw the game board squares
		for (var y = 0; y < Math.floor(Artist.appHeight / this.squareSize); y++) {
		  // do a row
		  let row = [];
		  for (var x = 0; x < Math.floor(Artist.appWidth / this.squareSize); x++) {
		    let squareSprite = this.createSquareSprite(x * this.squareSize, y * this.squareSize, this.squareSize);
		    this.app.stage.addChild(squareSprite);
		    row.push(squareSprite);
		  }
		  this.squares.push(row);
		}
	}

	createSquareSprite(x, y, size) {
		var squareSprite = new PIXI.Sprite(this.squareTexture);

		squareSprite.x = x;
		squareSprite.y = y;
		squareSprite.width = size;
		squareSprite.height = size;

		// set a random tint
		// squareSprite.tint = Math.random() * 0xFFFFFF;

		return squareSprite;
	}

	createSquare(x, y, size, color) {
		var square = new PIXI.Graphics();
		// set the lineStyle to 0 so the square doesn't have an outline
		// square.lineStyle(0);
		// square.lineStyle(2, 0x0000FF, 1);
		square.lineStyle(2, 'black', 1);
		square.beginFill(color, 1);
		square.drawRect(x, y, size, size);

		return square;
	}

	drawTetrisShape(x, y, shape) {
		if (shape == 'I') {
			this.tintSquare(x, y, this.lightGreen);
			this.tintSquare(x, y+1, this.lightGreen);
			this.tintSquare(x, y+2, this.lightGreen);
			this.tintSquare(x, y+3, this.lightGreen);
		}
	}

	// TODO
	drawSquares(squaresData) {

	}

}