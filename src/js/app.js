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
	constructor(rootClass, text = '', color = 'green', time = 200, columns = 54) {
		this.rootClass = rootClass;
		this.text = text;
		this.color = colorCatalog[color];
		this.time = time;
		this.columns = columns;
		this._rows = 7;
		this.createEmptyBoard();
	}

	createEmptyBoard() {
		let root = document.getElementsByClassName(this.rootClass)[0];
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
		const sizeOneLetterAndSpace = 42;

		let text = this.text.toLowerCase().split('');
		let convertedText = [];
		let spaceCounter = 0;
		let rows = this._rows;

		text.forEach((symbol, textIndex) => {
			if (symbol === ' ') {
				spaceCounter++;
			} else {
				let characterCoordinates = characters[symbol];
				let coordinates = characterCoordinates.map((v) => v + getIncrement(textIndex));
				convertedText.push(...coordinates);
			}
		});
		return convertedText;

		//Handle space
		function getIncrement(index) {
			if (!index) return 0;
			let charactersAmount = index - spaceCounter;
			let correctIncrement = charactersAmount * sizeOneLetterAndSpace + spaceCounter * rows;

			return correctIncrement;
		}
	}

	show(counter) {
		let convertedText = this.convertText();
		let color = this.color;

		let intervalID = setInterval(() => {
			switchColor(color.disabled);
			move();
			switchColor(color.active);
		}, this.time);

		function move() {
			convertedText = convertedText.map(num => num -= 7);
		}

		function switchColor(color) {
			let root = document.getElementsByClassName('scoreboard')[0];
			let images = root.getElementsByTagName('IMG');
			convertedText.forEach((value) => {
				if (0 <= value) images[value].src = color;
			});
		}

		function clear() { }
		// function print() {}
	}

	stop() { }

}

let infoTable = new InfoTable('scoreboard', '1111111');
infoTable.show();
infoTable.stop();
