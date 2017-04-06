import * as PIXI from 'pixi.js';
import Square from './SquareVisual.js';

export default class Artist {

	static appWidth = 800
	static appHeight = 600

	lightGreen = 0x1fed04
	white = 0xffffff

	fillColor = this.lightGreen
	clearColor = this.white
	squareColor = this.clearColor

	squareSize = 0	// used for width and height
	squares = []
	squareTexture = null

	squaresWide = 0;
	squaresHigh = 0;

	app = null

	constructor(app) {
		this.app = app;
	}

	initialize({squaresWide, squaresHigh}) {

		this.squaresWide = squaresWide;
		this.squaresHigh = squaresHigh;

		this.squareSize = this.calculateSquareSize({appWidth:Artist.appWidth, appHeight:Artist.appHeight, squaresWide, squaresHigh});
		console.log(`squareSize calculated: ${this.squareSize}`);

		this.initSquares();

		// tintSquare(0, 0, lightGreen);

		// TODO move this part to the GameEngine or something (wherever the data is handled for the squares and their states)
		var tetrisShapes = ['I', 'S', 'Z', '3', 'E', 'L', 'J'];
		this.drawTetrisShape(4, 1, 'I');
	}

	calculateSquareSize({appWidth, appHeight, squaresWide, squaresHigh}) {
		let fitWidth = Math.floor(appWidth / squaresWide);
		let fitHeight = Math.floor(appHeight / squaresHigh);
		if (fitWidth > fitHeight)
			return fitHeight;
		else
			return fitWidth;
	}

	initSquares() {

		// TODO change the squares to be of type Square (SquareVisual)
		// also offload some of this logic per square to that class

		const square = this.createSquare(0, 0, this.squareSize, this.squareColor);
		this.squareTexture = square.generateTexture();

		// draw the game board squares
		for (var y = 0; y < this.squaresHigh; y++) {
		  // do a row
		  let row = [];
		  for (var x = 0; x < this.squaresWide; x++) {
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

		return squareSprite;
	}

	createSquare(x, y, size, color) {
		var square = new PIXI.Graphics();
		// set the lineStyle to 0 so the square doesn't have an outline
		// square.lineStyle(0);
		square.lineStyle(2, 'black', 1);
		square.beginFill(color, 1);
		square.drawRect(x, y, size, size);

		return square;
	}

	drawTetrisShape(x, y, shape) {
		if (shape == 'I') {
			this.fillSquare(x, y);
			this.fillSquare(x, y+1);
			this.fillSquare(x, y+2);
			this.fillSquare(x, y+3);
		}
	}

	drawSquares(gameBoard) {
		console.log('Artist.drawSquares()');
		for (let x = 0; x < this.squaresWide; x++) {
			for (let y = 0; y < this.squaresHigh; y++) {
				// console.log(`iter: ${x}, ${y}`);
				if (gameBoard.squareIsOpen(x, y)) {
					this.clearSquare(x, y);
				} else {
					console.log(`found a square to be filled: ${x}, ${y}`);
					this.fillSquare(x, y);
				}
			}
		}
	}

	fillSquare(x, y) {
		console.log('Artist.fillSquare()', `${x}, ${y}`);
		this.tintSquare(x, y, this.fillColor);
	}

	clearSquare(x, y) {
		// this.tintSquare(x, y, this.clearColor);
		this.tintSquare(x, y, this.fillColor);
	}

	tintSquare(x, y, color) {
		// this.squares[y][x].tint = color;
		const square = this.getSquare(x, y);
		if (color === this.fillColor) {
			// console.log(`tintSquare(${x}, ${y}, ${color})`);
			// console.log(`square: `, square);
		}
		// right now the squares are all Sprites
		square.tint = color;
	}

	getSquare(x, y) {
		return this.squares[y][x];	// TODO is this correct? or should it be [x][y] ?
	}

}