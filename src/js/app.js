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
	constructor(id, text = '', color = 'green', time = 200, columns = 54) {
		this.id = id;
		this.text = text;
		this.color = colorCatalog[color];
		this.time = time;
		this.columns = columns;
		this._rows = 7;
		this.createEmptyBoard();
	}

	createEmptyBoard() {
		for (let j = 0; j < this.columns; j++) {
			for (let i = 0; i < this._rows; i++) {

				let img = $('<img>');
				img.attr('src', this.color.disabled);
				img.css({
					'top': () => `${25 * i}px`,
					'left': () => `${25 * j}px`,
				});

				$('.row1').append(img);
			}
		}
	}

	convertText() {
		const sizeOneLetterAndSpace = 42;

		let text = this.text.toLowerCase().split('');
		let convertedText = [];

		text.forEach((symbol, index) => {
			// letter coordinates 
			let letterCoordinates = characters[symbol];
			let processedLetterCoordinates = letterCoordinates.map(number => index ? number + index * sizeOneLetterAndSpace : number);
			convertedText.push(...processedLetterCoordinates);

		});

		log(convertedText);

		return convertedText;
	}

	show(counter) {
		let convertedText = this.convertText();

		//TODO universal. use ID
		// let intervalID = 
		// setInterval(() => {
		print.call(this, convertedText);
		// }, this.time);

		function print(preparedText) {
			let imagesFromDOM = $('.row1 img')
			preparedText.forEach(value => {
				$(imagesFromDOM[value]).attr('src', this.color.active);
			})
		}
		function clear() { }
		// function print() {}
	}

	stop() { }

}

let infoTable = new InfoTable('root', 'Hello');
infoTable.show();
infoTable.stop();



// movement data
// setInterval(function () {
// 	print(arrToPrint, defaultColor);
// 	for (var i = 0; i < arrToPrint.length; i++) {
// 		arrToPrint[i] = arrToPrint[i] - 7;
// 	}
// 	print(arrToPrint, activeColor);
// }, 200);


