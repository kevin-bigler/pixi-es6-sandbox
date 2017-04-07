import KeyCode from 'key-code';

export default class InputManager {
	gameEngine = null
	listening = false

	constructor(gameEngine) {
		this.gameEngine = gameEngine;
		document.addEventListener('keydown', this.onKeyDown.bind(this));
		document.addEventListener('keyup', this.onKeyUp.bind(this));
	}

	startListening() {
		console.log('InputManager.startListening()', this.listening);
		this.listening = true;
		console.log('value now: ', this.listening);
	}

	stopListening() {
		this.listening = false;
	}

	onKeyDown(event) {
		let key = event.keyCode;
		console.log('onKeyDown(), this.listening: ', this.listening);
		if ( ! this.listening ) {
			console.log('not yet listening for inputs');
			return;
		}

		if (key === KeyCode.DOWN) {
			console.log('DOWN');
			this.gameEngine.movePieceDown();
		}
		else if (key === KeyCode.LEFT) {
			console.log('LEFT');
			this.gameEngine.movePieceLeft();
		}
		else if (key === KeyCode.RIGHT) {
			console.log('RIGHT');
			this.gameEngine.movePieceRight();
		}
		else if (key === KeyCode.UP) {
			console.log('UP');
			this.gameEngine.movePieceUp();
		}
		else if (key === KeyCode.SPACEBAR) {
			console.log('SPACEBAR');
			this.gameEngine.rotatePiece();
		}
		else if (key === KeyCode.N) {
			console.log('N');
			this.gameEngine.newPiece();
		}
		else if (key === KeyCode.R) {
			console.log('R');
			this.gameEngine.newGame();
		}
		// TODO rest of the code
	}

	onKeyUp(key) {
		if (key === KeyCode.DOWN) {

		}
		// TODO rest of the code
	}
}