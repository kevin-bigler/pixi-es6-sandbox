export default class GreatDane {
	legs = 4
	ears = 2
	color = 'fawn merle'
	constructor({color = ''} = {}) {
		// this.color = 'fawn merle';
		if (color)
			this.color = color;
	}
	bark() {
		console.log(`bowow! i art the ${this.color} dane of cute!`);
	}
}