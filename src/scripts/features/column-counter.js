
const TABLE_ROWS = 7;

function ColumnsCounter() {
  let columns = 0;

  return {
    add(coordinates) {
      let spaceColumn = 1;
      const MAX = Math.max(...coordinates);
      let characterColumns = Math.floor(MAX / TABLE_ROWS);
      // increment ++characterColumns is because we count length not index
      columns += ++characterColumns + spaceColumn;
    },

    get() {
      return columns * TABLE_ROWS;
    },

    increment() {
      columns++;
    }
  }
}

module.exports = ColumnsCounter;
