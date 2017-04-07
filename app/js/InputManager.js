import KeyCode from 'key-code';

export default class InputManager {
	app = null

	constructor(app) {
		this.app = app;
		document.addEventListener('keydown', this.onKeyDown);
		document.addEventListener('keyup', this.onKeyUp);
	}

	onKeyDown(key) {
		if (key === KeyCode.DOWN) {
			this.app.onDownPressed();
		}
		// TODO rest of the code
	}

	onKeyUp(key) {
		if (key === KeyCode.DOWN) {

		}
		// TODO rest of the code
	}
}