const getConvertedText = require('./get-converted-text.js');

function getColumnsByText(text, language, Character, TABLE_ROWS) {
  const coordinates = getConvertedText(text, language, Character);
  if (coordinates.length === 0) return 0;
  const MAX = Math.max(...coordinates);
  const columns = Math.floor(MAX / TABLE_ROWS) + 2;
  return columns;
}

module.exports = getColumnsByText;
