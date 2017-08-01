module.exports = {
  getOrderItems: function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id; //order id
    db.get_order_items([id], function(err, products) {
      if(err) {
        console.log('getOrderItems', id, err);
      }
      res.send(products);
    })
  },
  createOrderItem: function(req, res, next) {
    var db = req.app.get('db');
    var orderitem = req.body;
    db.create_order_item([orderitem.orderid,orderitem.productid,orderitem.quantity], function(err, orderitem) {
      if(err) {
        console.log('createOrderItem', orderitem, err);
      }

      res.send(orderitem);
    })
  },
  updateOrderItem: function (req, res, next) {
    var db = req.app.get('db');
    var orderitem = req.body;
    db.update_order_item([orderitem.orderid,orderitem.productid,orderitem.quantity, orderitem.id], function(err, orderitem) {
      if(err) {
        console.log('updateOrderItem', orderitem, err);
      }

      res.send(orderitem);
    })
  },
  deleteOrderItem: function (req, req, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.delete_order_item([id], function(err) {
      if(err) {
        console.log('deleteOrderItem', id);
      }
      res.send({isSuccessful: true});
    })
  }
}
