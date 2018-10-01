var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({ user: { name: 'Bobby Tables', email: 'bobby@tables.com'}});
});

module.exports = router;
