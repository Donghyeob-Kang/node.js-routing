const db = require('../../db/printDB');

module.exports.printBoard = callback => {
    db.printBoard(result => {
        callback(result);
    });
};
