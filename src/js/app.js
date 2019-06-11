'use strict';

const CHARACTERS_CATALOG = require('./characters.json');

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
		this.convertedText = this.getConvertedText(text);
		this.intervalID;
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

	/**
	 * One space (equal one column) between characters.
	 * @param {*} text 
	 */
	getConvertedText(text) {
		if (!text) return [];

		// 5 columns for letter & 1 for space. 6*7=42
		const STEP_FOR_LETTER = 42;
		let customSymbols = text.toLowerCase().split('');
		let convertedText = [];
		let counterSpace = 0;
		let rows = this._rows;

		/**
		 * Them need only two columns one for character & one for space after him
		 */
		let smallCharacters = ".':";
		let smallCharactersStep = 14;
		let counterSmallCharacters = 0;

		/**
		 * For one we need 4 columns 
		 */
		let counterOne = 0;
		const STEP_FOR_ONE = 28;

		customSymbols.forEach((symbol, textIndex) => {
			if (symbol === ' ') {
				counterSpace++;
			} else {
				let characterCoordinates = CHARACTERS_CATALOG[symbol];
				if (!characterCoordinates) return;
				let increment = getIncrement(textIndex);
				let coordinates = characterCoordinates.map(number => number + increment);
				convertedText.push(...coordinates);

				if (smallCharacters.includes(symbol)) {
					counterSmallCharacters++;
				} else if (symbol === '1') {
					counterOne++
				}
			}
		});

		return convertedText;

		//Handle space
		function getIncrement(index) {
			if (!index) return 0;
			let lettersAmount = index - counterSpace - counterSmallCharacters - counterOne;
			let increment = lettersAmount * STEP_FOR_LETTER
				+ counterSpace * rows * 2
				+ counterSmallCharacters * smallCharactersStep
				+ counterOne * STEP_FOR_ONE;

			return increment;
		}
	}

	show() {
		this.switchColor(this.color.active);
	}

	switchColor(color) {
		let root = document.getElementsByClassName(this.rootClass)[0];
		let images = root.getElementsByTagName('IMG');
		this.convertedText.forEach((value) => {
			let image = images[value];
			/** 
			 * We check image because size textCoordinates 
			 * can be bigger/smaller than number of points on table
			 */
			if (image) image.src = color;
		});
	}

	moveLeft(time) {
		let customTime = time;
		const POINTS_AMOUNT = this._rows * this.columns;

		this.goToRight();
		this._moveCoreFunctionality(
			function () {
				this.convertedText = this.convertedText.map(num => num -= this._rows);
				if (this.convertedText.slice(-1)[0] < 0) {
					if (--customTime) {
						this.goToRight();
					} else {
						clearInterval(this.intervalID);
					}
				}
			}.bind(this)
		);
	}

	moveRight(time) {
		let customTime = time;
		const POINTS_AMOUNT = this._rows * this.columns;

		this.goToLeft();
		this._moveCoreFunctionality(
			function () {
				// increment all coordinates on 7(one column) points
				this.convertedText = this.convertedText.map(num => num += this._rows);
				if (this.convertedText[0] > POINTS_AMOUNT) {
					if (--customTime) {
						this.goToLeft();
					} else {
						clearInterval(this.intervalID);
					}
				}
			}.bind(this)
		);
	}

	goToRight() {
		const POSITION_FIRST = this.convertedText[0];
		const INCREMENT = Math.floor(POSITION_FIRST / -this._rows) * this._rows + this._rows * this.columns;
		this.convertedText = this.convertedText.map(num => num += INCREMENT);
	}
	goToLeft() {
		const POSITION_LAST = this.convertedText.slice(-1)[0];
		const INCREMENT = Math.floor(POSITION_LAST / this._rows) * this._rows;
		this.convertedText = this.convertedText.map(num => num -= INCREMENT);
	}

	_moveCoreFunctionality(callback) {
		let color = this.color;
		let self = this;

		this.intervalID = setInterval(() => {
			try {
				self.switchColor(color.disabled);
				callback.call(this);
				self.switchColor(color.active);
			} catch (error) {
				clearInterval(this.intervalID);
				throw error;
			}
		}, this.time);
	}
	stop() { }

}

module.exports = InfoTable;
