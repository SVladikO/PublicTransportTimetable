'use strict';

let colorsCatalog = require('./Color');
let charactersCatalog = {   // I separated characters in two files, because they have different height.
	eng: require('./eng_characters.json'),
	ua: require('./ua_characters.json')
};

const ROWS = 7;
let pointsAmount;

class InfoTable {
	constructor(rootClass, tableHeight = 180, text = '', time = 500, columns = 54, color) {
		this.rootClass = rootClass;
		this.tableHeight = tableHeight;
		this.text = text;
		this.time = time;
		this.columns = columns;
		this.color = color;
		this._createEmptyBoard();
		this.images = this._getImgFromDOM();
		this.intervalID;
		this.language = 'eng';
		this._updateConvertedText(); // Set this.convertedText;
		pointsAmount = ROWS * this.columns;

	}

	setLanguage(language) {
		this.language = language;
		return this;
	}

	setRootClass(className) {
		this.rootClass = className;
		return this;
	}

	setText(text) {
		this.text = text;
		this._updateConvertedText();
		return this;
	}

	setTimer(time) {
		this.time = time;
		return this;
	}

	setColor(color) {
		this.color = color;
		return this;
	}


	show() {
		this.convertedText.forEach(position => this._switchColor(position, this.color.active));
	}

	update(text) {
		this.clear();
		this.text = text;
		this._updateConvertedText();
		this.show();
	}

	clear() {
		clearInterval(this.intervalID);
		this.convertedText.forEach(position => this._switchColor(position, this.color.disabled));
	}

	moveLeft(time) {
		let customTime = time;
		this._updateConvertedText();
		this._goToRight();
		this._moveCoreFunctionality(checkPosition, position => position - ROWS);

		function checkPosition() {
			if (this.convertedText.slice(-1)[0] < 0) {
				if (--customTime) {
					this._goToRight();
				} else {
					clearInterval(this.intervalID);
				}
			}
		}
	}

	moveRight(time) {
		let customTime = time;
		this._goToLeft();
		this._moveCoreFunctionality(checkPosition, position => position + ROWS);

		function checkPosition() {
			if (this.convertedText[0] > pointsAmount) {
				if (--customTime) {
					this._goToLeft();
				} else {
					clearInterval(this.intervalID);
				}
			}
		}
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

			this.convertedText.forEach(position => this._switchColor(position, this.color.active));
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
			for (let i = 0; i < ROWS; i++) {
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
	_updateConvertedText() {
		if (!this.text) {
			this.convertedText = []
			return;
		}

		let counterColumns = 0;
		let convertedText = [];
		let customSymbols = this.text.toUpperCase().split('');

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

		this.convertedText = convertedText;

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
		const INCREMENT = Math.floor(POSITION_FIRST / -ROWS) * ROWS + ROWS * this.columns;
		this.convertedText = this.convertedText.map(num => num += INCREMENT);
	}
	_goToLeft() {
		const POSITION_LAST = this.convertedText.slice(-1)[0];
		const INCREMENT = Math.floor(POSITION_LAST / ROWS) * ROWS;
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
		this.intervalID = setInterval(function () {
			try {
				checkCallback.call(this);
				this.convertedText.forEach(position => {
					if (position >= 0 && position <= pointsAmount) {
						this._switchColor(position, this.color.disabled);
					}
				});
				this.convertedText = this.convertedText.map(position => {
					let newPosition = changeCallback.call(this, position);
					if (newPosition >= 0 && newPosition <= pointsAmount) {
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
