const router = require('express').Router();
const printService = require('../services/board/printList');

router.get('/printList', (req, res) => {
    printService.printBoard(result => {
        res.send(result);
    });
});

module.exports = router;
