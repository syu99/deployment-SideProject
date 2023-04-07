var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
 const year = new Date();
 res.json({ now: year.getFullYear() });
});


module.exports = router;