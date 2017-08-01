var express = require('express');
var router = express.Router();

var statesCtrl = require('../controllers/statesCtrl');

router.get('/states', statesCtrl.getStates);

module.exports = router;
