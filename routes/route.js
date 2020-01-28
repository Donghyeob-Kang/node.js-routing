const router = require('express').Router();
const printService = require('../services/board/printList');

let list = 0;

router.get('/', (req, res) => {
    // render & service call
    res.render('main');
});

router.get('/printList', (req, res) => {
    printService.printBoard(result => {
        res.send(result);
    });
});

router.get('/board', (req, res) => {
    list = req.query.list;
    res.render('board/board');
});

router.get('/printBoard', (req, res) => {
    printService.board(list, result => {
        res.send(result);
    });
});

module.exports = router;
