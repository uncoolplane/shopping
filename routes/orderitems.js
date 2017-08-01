var express = require('express');
var router = express.Router();

var orderItemsCtrl = require('../controllers/orderItemsCtrl');

router.get('/orderitems/:id', orderItemsCtrl.getOrderItems);
router.put('/orderitems', orderItemsCtrl.createOrderItem);
router.post('/orderitems', orderItemsCtrl.updateOrderItem);
router.delete('/orderitems/:id', orderItemsCtrl.deleteOrderItem);

module.exports = router;
