var express = require('express');
var router = express.Router();

router.get('/year', (req, res) => {
 const year = new Date();
 res.json({ year: year.getFullYear().toString() });
});


module.exports = router;