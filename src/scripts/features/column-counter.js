
const TABLE_ROWS = 7;

function ColumnsCounter() {
  let columns = 0;

  return {
    add(coordinates) {
      validate(coordinates);
      let spaceAfterCharacter = 1;
      const MAX = Math.max(...coordinates);
      let characterColumns = Math.floor(MAX / TABLE_ROWS);
      // ++characterColumns is because we count length not index
      columns += ++characterColumns + spaceAfterCharacter;
    },

    get() {
      return columns * TABLE_ROWS;
    },

    increment() {
      columns++;
    }
  }
}

function validate(array) {
  if (!Array.isArray(array)) throw new Error('Param is not array.');
  if (!array.length) throw new Error('Array is empty.');
}

module.exports = ColumnsCounter;
