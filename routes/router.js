const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/page', (req, res) => {
    // render
});

router.get('/content', (req, res) => {
    // axios
});

module.exports = router;
