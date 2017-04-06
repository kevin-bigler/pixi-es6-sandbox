import * as PIXI from 'pixi.js';
import Artist from './Artist.js';
import GameBoard from './GameBoard.js';

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
	}
}
