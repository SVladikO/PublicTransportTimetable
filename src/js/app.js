'use strict';

const CHARACTERS_CATALOG = require('./characters.json');
const COLOR_CATALOG = require('./Color');

let log = console.log;
class InfoTable {
	constructor(rootClass, text = '', time = 200, columns = 54, color = 'green') {
		this.rootClass = rootClass;
		this.text = text;
		this.time = time;
		this.columns = columns;
		this.color = COLOR_CATALOG[color];
		this._rows = 7;
		this._createEmptyBoard();
		this.images = this._getImgFromDOM();
		this.convertedText = this._getConvertedText(text);
		this.intervalID;
		this.isActiveColor = false;
	}

	show() {
		this.clear();
		this.convertedText.forEach(position => this._switchColor(position, this.color.active));
	}

	update(text) {
		this.clear();
		this.convertedText = this._getConvertedText(text);
		this.show();
	}

	clear() {
		clearInterval(this.intervalID);
		this.convertedText.forEach(position => this._switchColor(position, this.color.disabled));
	}

	moveLeft(time) {
		this.clear();
		let customTime = time;
		const POINTS_AMOUNT = this._rows * this.columns;

		this._goToRight();
		this._moveCoreFunctionality(checkPosition, changePosition);

		function checkPosition(position) {
			if (this.convertedText.slice(-1)[0] < 0) {
				if (--customTime) {
					this._goToRight();
				} else {
					clearInterval(this.intervalID);
				}
			}
		}

		function changePosition(position) {
			return position - this._rows;
		}
	}

	moveRight(time) {
		this.clear();
		let customTime = time;
		const POINTS_AMOUNT = this._rows * this.columns;

		this._goToLeft();
		this._moveCoreFunctionality(checkPosition, changePosition);

		function checkPosition() {
			if (this.convertedText[0] > POINTS_AMOUNT) {
				if (--customTime) {
					this._goToLeft();
				} else {
					clearInterval(this.intervalID);
				}
			}
		}

		function changePosition(position) { return position + this._rows };
	}

	createCharacter() {
		this.convertedText = [];

		let root = document.getElementsByClassName(this.rootClass)[0];
		let nodes = Array.prototype.slice.call(root.children);

		root.addEventListener('click', function (event) {
			this.clear();

			let { target } = event;
			const indexInImage = nodes.indexOf(target);
			let indexInCoordinates = this.convertedText.indexOf(indexInImage)
			if (indexInCoordinates >= 0) {
				this.convertedText.splice(indexInCoordinates, 1);
			} else {
				this.convertedText.push(indexInImage);
			}
			console.log(this.convertedText);

			this.show();
		}.bind(this));
	}

	_createEmptyBoard(withIndex) {
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
	_getConvertedText(text) {
		if (!text) return [];

		// 5 columns for letter & 1 for space. 6*7=42
		const STEP_FOR_LETTER = 42;
		let customSymbols = text.toUpperCase().split('');
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

	_goToRight() {
		const POSITION_FIRST = this.convertedText[0];
		const INCREMENT = Math.floor(POSITION_FIRST / -this._rows) * this._rows + this._rows * this.columns;
		this.convertedText = this.convertedText.map(num => num += INCREMENT);
	}
	_goToLeft() {
		const POSITION_LAST = this.convertedText.slice(-1)[0];
		const INCREMENT = Math.floor(POSITION_LAST / this._rows) * this._rows;
		this.convertedText = this.convertedText.map(num => num -= INCREMENT);
	}

	_getImgFromDOM() {
		let root = document.getElementsByClassName(this.rootClass)[0];
		return root.getElementsByTagName('IMG');
	}
	_switchColor(position, color) {
		let image = this.images[position];
		/** 
		 * We check image because size textCoordinates 
		 * can be bigger/smaller than number of points on table
		 */
		if (image) image.src = color;
	}
	_moveCoreFunctionality(checkCallback, changeCallback) {
		const POINTS_AMOUNT = this._rows * this.columns;

		this.intervalID = setInterval(function () {
			try {
				checkCallback.call(this);
				this.convertedText.forEach(position => {
					if (position >= 0 && position <= POINTS_AMOUNT) {
						this._switchColor(position, this.color.disabled);
					}
				});
				this.convertedText = this.convertedText.map(position => {
					let newPosition = changeCallback.call(this, position);
					if (newPosition >= 0 && newPosition <= POINTS_AMOUNT) {
						this._switchColor(newPosition, this.color.active);
					}
					return newPosition;
				});
			} catch (error) {
				clearInterval(this.intervalID);
				throw error;
			}
		}.bind(this), this.time);
	}
}

module.exports = InfoTable;
