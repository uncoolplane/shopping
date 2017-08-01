module.exports = {
  getOrders: function(req, res, next) {
    var db = req.app.get('db');
    db.get_orders(function(err, orders) {
      if(err) {
        console.log('getOrders', err);
      }
      res.send(orders);
    })
  },
  getOrdersByCustomer : function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    // console.log('getOrdersByCustomer', id);
    db.get_orders_customer([id], function(err, orders) {
      if(err) {
        console.log('getOrdersByCustomer', err);
      }
      res.send(orders);
    })
  },
  getOrder : function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.get_orders([id], function(err, order) {
      if(err) {
        console.log('getOrder', id, err);
      }
      res.send(order);
    })
  },
  createOrder: function(req, res, next) {
    var db = req.app.get('db');
    console.log('------>createOrder', req.body);
    var order = req.body;
    // db.create_order([order.ordernumber, order.orderdate, order.shipdate, order.customerid],
    db.orders.save({
      ordernumber: order.ordernumber,
      orderdate: order.orderdate,
      shipdate: order.shipdate,
      customerid: order.customerid
    },
    function(err, neworder) {
      console.log('createorder.db', neworder);
      if(err) {
        console.log('createOrder', neworder, err);
      }
      res.send(neworder);
    })
  },
  updateOrder: function(req, res, next) {
    var db = req.app.get('db');
    var order = req.body;
    db.update_order([order.ordernumber, order.orderdate, order.shipdate, order.customerid, order.id], function(err, order) {
      if(err) {
        console.log('updateOrder', order, err);
      }
      res.send(order);
    })
  },
  deleteOrder: function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.delete_order([id, id], function(err) {
      if(err) {
        console.log('deleteOrder', id);
      }
      res.send({isSuccessful: true});
    })
  },
  getOrderItems: function (req, req, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    console.log('getOrderItems', id);
    db.get_order_items([id], function(err, products) {
      if (err) {
        console.log('getOrderItems', err);
      }
      res.send(products)
    })
  }
}
