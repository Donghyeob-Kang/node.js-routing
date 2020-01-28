const router = require('express').Router();

router.get('/', (req, res) => {
    // render & service call
    res.render('main');
});

router.get('/board', (req, res) => {
    res.render('board/board');
});

module.exports = router;
