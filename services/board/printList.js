const db = require('../../db/printDB');

module.exports.printBoard = callback => {
    db.printBoard(result => {
        callback(result);
    });
};

module.exports.board = (list, callback) => {
    db.board(list, result => {
        callback(result);
    });
};
