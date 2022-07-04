const createColumnsCounter = require('./column-counter.js');

function getConvertedText(text, language, Character) {
  if (!text) return [];

  if (!Character) throw new Error('Character is not valid');
  if (!Character[language]) throw new Error('Character does not support this language');

  const symbols = text.toUpperCase().split('');
  const counter = createColumnsCounter();

  const resultText = symbols.reduce((convertedText, symbol) => {
    let coordinates = Character[language][symbol];

    if (coordinates) {
      let newCoordinates = coordinates.map(n => n + counter.get());
      convertedText.push(...newCoordinates);
      counter.add(coordinates);
    } else if (symbol === ' ') {
      counter.increment();
      counter.increment();
    }

    return convertedText;
  }, []);

  return resultText;
}

module.exports = getConvertedText;
