import * as PIXI from 'pixi.js';
import Artist from './Artist.js';
import GameBoard from './GameBoard.js';
import LPiece from './Piece/LPiece.js';

export default class GameEngine {
	app = null
	artist = null
	gameboard = null

	squaresWide = 8
	squaresHigh = 16

	constructor() {

	}

	initialize({squaresWide = this.squaresWide, squaresHigh = this.squaresHigh} = {}) {
		console.log('GameEngine init', `squaresWide: ${squaresWide}, squaresHigh: ${squaresHigh}`);

		this.app = new PIXI.Application(Artist.appWidth, Artist.appHeight, {transparent : true});
		document.getElementById('display').appendChild(this.app.view);

		this.gameBoard = new GameBoard(this.app);
		this.gameBoard.initialize({squaresWide, squaresHigh});

		this.artist = new Artist(this.app);
		this.artist.initialize({squaresWide, squaresHigh});


		this.gameBoard.fillSquare(1, 1);
		this.gameBoard.fillSquare(3, 7);
		this.gameBoard.fillSquare(7, 10);
		this.artist.drawSquares(this.gameBoard);

		setTimeout(() => {
			console.log('it has been 5 seconds');
			this.gameBoard.fillSquare(2, 2);
			this.gameBoard.getSquare(1, 1).clear();
			this.artist.drawSquares(this.gameBoard);
		}, 5000);
	}
}
