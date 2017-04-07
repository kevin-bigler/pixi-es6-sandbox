import LPiece from './LPiece.js';
import SquarePiece from './SquarePiece.js';
import RNG from '../Common/RNG.js';

export default class PieceFactory {
	pieceHistory = []

	constructor() {

	}

	createRandomPiece() {
		const classes = [
			LPiece,
			SquarePiece
		];
		const classIndex = RNG.getRandomInt(0, classes.length);
		const rotation = RNG.getRandomIntInclusive(0, 3);
		console.log(`createRandomPiece(), classIndex: ${classIndex}, rotation: ${rotation}`);

		let clazz = classes[classIndex];
		let piece = new clazz();

		for (let i = 0; i < rotation; i++) {
			piece.rotate();
		}

		console.log('piece created:', piece);

		this.pieceHistory.push({
			clazz,
			rotation
		});

		return piece;
	}

}