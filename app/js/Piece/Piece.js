export default class Piece {
	// these values change based on rotation
	width = 0
	height = 0
	squares = []	// coordinates are referenced via squares[y][x]

	rotation = 0	// 0, 1, 2, 3

	constructor() {
		setPieceDataByRotation();
	}

	rotate() {
		rotation++;
		if (rotation > 3)
			rotation = 0;
		setPieceDataByRotation();
	}

	// use current rotation to set values (width, height, squares)
	setPieceDataByRotation() {
		({this.width, this.height, this.squares}) = this.getDataByRotation(this.rotation);
	}

	// returns an object with width, height, squares (array)
	getDataByRotation(rotation) {
		console.log('Piece getDataByRotation(); no functionality');
	}
}