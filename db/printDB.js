const pool = require('../services/database/database').pool;

module.exports.printBoard = callback => {
    // database connected
    pool.getConnection((e, connection) => {
        if (!e) {
            const query = 'SELECT * FROM tbl_board ORDER BY regdate DESC;';
            connection.query(query, (e, result) => {
                connection.release();
                if (!e) {
                    callback(result);
                } else {
                    console.log(e);
                    callback(false);
                }
            });
        } else {
            console.log(e);
            callback(false);
        }
    });
};

module.exports.board = (list, callback) => {
    // database connected
    pool.getConnection((e, connection) => {
        if (!e) {
            const query = 'SELECT * FROM tbl_board WHERE seq=?;';
            connection.query(query, [list], (e, result) => {
                connection.release();
                if (!e) {
                    callback(result);
                } else {
                    console.log(e);
                    callback(false);
                }
            });
        } else {
            console.log(e);
            callback(false);
        }
    });
};
