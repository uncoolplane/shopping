module.exports = {
  getCustomers : function(req, res, next) {
    var db = req.app.get('db');
    db.get_customers(function(err, customers) {
      res.send(customers);
    })
  },
  getCustomer: function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.get_customer([id], function(err, customer) {
      if(err) {
        console.log('getCustomer', id, err);
      }
      res.send(customer);
    })
  },
  getCustomerByUser: function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    console.log('getCustomerByUser', id);
    db.get_user_customer([id], function(err, customer) {
      if(err) {
        console.log('getCustomerByUser', id, err);
      }
      res.send(customer);
    })
  },
  createCustomer: function(req, res, next) {
    var db = req.app.get('db');
    var customer = req.body;
    console.log('node\\createCustomer', customer);
    if(!customer.userid) {
      var userid = session.userid; //TODO: set current user id if empty & not admin
    }
    db.create_customer([customer.firstname, customer.lastname, customer.address, customer.city, customer.state, customer.zipcode, customer.phonenumber, customer.userid], function(err, customer) {
      if(err) {
        console.log('createCustomer', customer, err);
      }
      res.send(customer);
    })
  },
  updateCustomer: function(req, res, next) {
    var db = req.app.get('db');
    var customer = req.body;
    db.update_customer([customer.firstname, customer.lastname, customer.address, customer.city, customer.state, customer.zipcode, customer.phonenumber, customer.userid, customer.id], function(err, customer) {
      if (err) {
        console.log('updateCustomer', customer, err);
      }
      res.send(customer);
    })
  },
  deleteCustomer: function(req, res, next) {
    var db = req.app.get('db');
    var id = req.params.id;
    db.delete_customer([id], function(err) {
      if(err) {
        console.log('deleteCustomer', id, err);
      }
      res.send({isSuccessful: true})
    })
  }
}
