var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/whoami', function(req, res, next) {
  console.log('authenticate', session.user);
  return res.send(session.user);
});

module.exports = router;
