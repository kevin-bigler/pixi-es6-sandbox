export default class GreatDane {
	someProp = '13 reasons'
	constructor({color = ''} = {}) {
		// this.color = 'fawn merle';
		if (color)
			this.color = color;
	}
	bark() {
		console.log(`bowow! i art the ${this.color} dane of cute!`);
	}
}