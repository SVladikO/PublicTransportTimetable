'use strict';

let colorsCatalog = require('./Color');
let charactersCatalog = {   // I separated characters in two files, because they have different height.
	eng: require('./eng_characters.json'),
	ua: require('./ua_characters.json')
};

const ROWS = 7;

let log = console.log;
class InfoTable {
	constructor(rootClass, text = '', time = 200, columns = 54, color = 'green') {
		this.language = 'eng';
		this.rootClass = rootClass;
		this.text = text;
		this.time = time;
		this.columns = columns;
		this.color = colorsCatalog[color];
		this._rows = 7;
		this._createEmptyBoard();
		this.images = this._getImgFromDOM();
		this.convertedText = this._getConvertedText(text);
		this.intervalID;
		this.isActiveColor = false;
	}

	setLanguage(language) {
		this.language = language;
		return this;
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

		let counterColumns = 0;
		let convertedText = [];
		let customSymbols = text.toUpperCase().split('');

		customSymbols.forEach((symbol) => {
			let characterCoordinates = charactersCatalog[this.language][symbol];

			if (!characterCoordinates) {
				if (symbol === ' ') counterColumns++;
				return;
			}

			let increment = counterColumns * ROWS;
			counterColumns += getColumns(characterCoordinates);

			let coordinates = characterCoordinates.map(number => number + increment);
			convertedText.push(...coordinates);
		});

		return convertedText;

		function getColumns(characterCoordinates) {
			let columnsForSpace = 1;
			const MAX = Math.max(...characterCoordinates);
			let columns = Math.floor(MAX / ROWS);
			// increment ++columns is because 'columns' for first column return 0
			let resultColumns = ++columns + columnsForSpace;
			return resultColumns;
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
