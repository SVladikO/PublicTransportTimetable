let InfoTable = require('./src/js/app');
let infoTable = new InfoTable('scoreboard', '1111111');
infoTable.show();
infoTable.stop();

global.InfoTable = InfoTable;
