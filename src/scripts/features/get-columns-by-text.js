const getConvertedText = require('./get-converted-text.js');

function getColumnsByText(text, language, Character, TABLE_ROWS) {
  const coordinates = getConvertedText(text, language, Character);
  const MAX = Math.max(...coordinates);
  const columns = Math.floor(MAX / TABLE_ROWS);
  return columns + 2;
}

module.exports = getColumnsByText;
