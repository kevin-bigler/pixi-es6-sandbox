import * as PIXI from 'pixi.js';
import Artist from './Artist.js';
import GameBoard from './GameBoard.js';
import LPiece from './Piece/LPiece.js';
import SquarePiece from './Piece/SquarePiece.js';
import PieceFactory from './Piece/PieceFactory.js';

export default class GameEngine {
	app = null
	artist = null
	gameBoard = null

	squaresWide = 8
	squaresHigh = 16

	pieceFactory = null

	newPiecePosition = {x:3, y:0}

	currentPiece = null
	currentPosition = {x:0, y:0}

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

		this.pieceFactory = new PieceFactory();
	}

	newGame() {
		// clear the board, make a new piece
		this.gameBoard.clear();
		this.drawSquares();

		this.newPiece();

		setTimeout(this.update.bind(this), 1000);
	}

	newPiece() {
		this.currentPiece = this.pieceFactory.createRandomPiece();

		const pieceAddedSuccessfully = this.gameBoard.addPiece(
			{
				piece:this.currentPiece,
				x:this.newPiecePosition.x,
				y:this.newPiecePosition.y
			});

		if ( ! pieceAddedSuccessfully ) {
			console.log('GAME OVER!');
		}

		this.currentPosition = {
			x:this.newPiecePosition.x,
			y:this.newPiecePosition.y
		}

		this.drawSquares();

	}

	drawSquares() {
		this.artist.drawSquares(this.gameBoard);
	}

	update() {
		console.log('it has been 1 seconds');
		this.movePieceRight();
		setTimeout(this.update.bind(this), 1000);
	}

	rotatePiece() {
		this.removePiece();
		this.currentPiece.rotate();
		this.addPiece();
		this.drawSquares();
	}

	movePieceLeft() {
		this.removePiece();
		this.currentPosition.x--;
		this.addPiece();
		this.drawSquares();
	}

	movePieceRight() {
		this.removePiece();
		this.currentPosition.x++;
		this.addPiece();
		this.drawSquares();
	}

	movePieceDown() {
		this.removePiece();
		this.currentPosition.y++;
		this.addPiece();
		this.drawSquares();
	}

	removePiece() {
		this.gameBoard.removePiece({piece:this.currentPiece, x:this.currentPosition.x, y:this.currentPosition.y});
	}

	addPiece() {
		return this.gameBoard.addPiece({piece:this.currentPiece, x:this.currentPosition.x, y:this.currentPosition.y});
	}

}
