import Square from './SquareData.js';

export default class GameBoard {
	squares = []
	squaresWide = 0
	squaresHigh = 0
	app = null
	constructor(app) {
		this.app = app;
	}
	initialize({squaresWide, squaresHigh}) {
		this.squaresWide = squaresWide;
		this.squaresHigh = squaresHigh;

		this.squares = [];
		for (let x = 0; x < squaresWide; x++) {
			let column = [];
			for (let y = 0; y < squaresHigh; y++) {
				column.push(new Square());
			}
			this.squares.push(column);
		}

	}
	addPiece({piece, x, y}) {

		// 1. Check if piece's corners fit into the game board
		const pieceCorners = this.getPieceCorners(piece);

		if ( ! this.isInRange(pieceCorners.topLeft) ) {
			console.log('piece is being set out of range! culprit: topLeft');
			return;
		}
		if ( ! this.isInRange(pieceCorners.topRight) ) {
			console.log('piece is being set out of range! culprit: topRight');
			return;
		}
		if ( ! this.isInRange(pieceCorners.bottomLeft) ) {
			console.log('piece is being set out of range! culprit: bottomLeft');
			return;
		}
		if ( ! this.isInRange(pieceCorners.bottomRight) ) {
			console.log('piece is being set out of range! culprit: bottomRight');
			return;
		}

		// TODO check piece's squares data (0's and 1's) and set the corresponding squares' data for this.squares

		// TODO this.app.drawSquares(squaresData)
	}

	// return position of each of the 4 corners for the piece
	getPieceCorners(piece) {
		const topLeft = {x, y};
		const topRight = {x + piece.width - 1, y};
		const bottomLeft = {x, y + piece.height - 1};
		const bottomRight = {x + piece.width - 1, y + piece.height - 1};

		return {topLeft, topRight, bottomLeft, bottomRight};
	}
	isInRange({x, y}) {
		return x >= 0
			&& x < squaresWide
			&& y >= 0
			&& y < squaresHigh;
	}
}