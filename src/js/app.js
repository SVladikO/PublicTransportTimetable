'use strict';

let characters = require('./characters.json');

let log = console.log;
let colorCatalog = {
	green: {
		active: 'public/img/green_on.jpg',
		disabled: 'public/img/green_off.jpg'
	}
}
class InfoTable {
	constructor(rootClass, text = '', time = 200, columns = 54, color = 'green') {
		this.rootClass = rootClass;
		this.text = text;
		this.time = time;
		this.columns = columns;
		this.color = colorCatalog[color];
		this._rows = 7;
		this.createEmptyBoard();
	}

	createEmptyBoard() {
		let root = document.getElementsByClassName(this.rootClass)[0];
		let images = root.getElementsByTagName('img');

		if (images.length > 0) return;

		root.style.position = 'relative';
		root.style.background = 'black';
		root.style.height = '180px';

		for (let j = 0; j < this.columns; j++) {
			for (let i = 0; i < this._rows; i++) {
				let img = document.createElement('img');
				img.src = this.color.disabled;
				img.style.width = '20px';
				img.style.height = '20px';
				img.style.position = 'absolute';
				img.style.top = `${25 * i}px`;
				img.style.left = `${25 * j}px`;
				root.appendChild(img);
			}
		}
	}

	convertText() {
		// 5 columns for letter & 1 for space. 6*7=42
		const letterStep = 42;

		let text = this.text.toLowerCase().split('');
		let convertedText = [];
		let counterSpace = 0;
		let rows = this._rows;

		/**
		 * Them need only two columns one for character & one for space after him
		 */
		let smallCharacters = ".':";
		let smallCharactersStep = 14;
		let counterSmallCharacters = 0;

		text.forEach((symbol, textIndex) => {
			if (symbol === ' ') {
				counterSpace++;
			} else {
				let characterCoordinates = characters[symbol];
				// if (!characterCoordinates) return;
				let increment = getIncrement(textIndex);
				let coordinates = characterCoordinates.map(number => number + increment);
				convertedText.push(...coordinates);

				if (smallCharacters.includes(symbol)) {
					counterSmallCharacters++;
				}
			}
		});
		return convertedText;

		//Handle space
		function getIncrement(index) {
			if (!index) return 0;
			let lettersAmount = index - counterSpace - counterSmallCharacters;
			let increment = lettersAmount * letterStep + counterSpace * rows + counterSmallCharacters * smallCharactersStep;

			return increment;
		}
	}

	show(counter) {
		let convertedText = this.convertText();
		let color = this.color;
		let rootClass = this.rootClass;

		let intervalID = setInterval(() => {
			switchColor(color.disabled);
			move();
			switchColor(color.active);
		}, this.time);

		function move() {
			convertedText = convertedText.map(num => num -= 7);
			if (convertedText.slice(-1)[0] < 0) clearInterval(intervalID);
		}

		function switchColor(color) {
			let root = document.getElementsByClassName(rootClass)[0];
			let images = root.getElementsByTagName('IMG');
			convertedText.forEach((value) => {
				let image = images[value];
				/** 
				 * We check image because size textCoordinates 
				 * can be bigger than number of points on table
				 */
				if (0 <= value && image) image.src = color;
			});
		}

		function clear() { }
	}

	stop() { }

}

module.exports = InfoTable;
