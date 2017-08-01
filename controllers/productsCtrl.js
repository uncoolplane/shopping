module.exports = {
    getProducts: function(req, res, next) {
      var db = req.app.get('db');
      db.get_products(function(err, products) {
        res.send(products);
      })
    },
    getProduct: function(req, res, next) {
      var db = req.app.get('db');
      var id = req.params.id;
      db.get_product([id], function(err, product) {
        if(err) {
          console.log('getProduct', id, err);
        }
        res.send(product)
      })
    },
    createProduct: function(req, res, next) {
      var db = req.app.get('db');
      var product = req.body;
      // db.create_product([product.name,product.description,product.unitprice,product.imageurl],
      db.products.save({
        name: product.name,
        description: product.description,
        unitprice: product.unitprice,
        imageurl: product.imageurl
      },
      function(err, product) {
        if(err) {
          console.log('createProduct', product, err);
        }
        res.send(product);
      })
    },
    updateProduct: function(req, res, next) {
      var db = req.app.get('db');
      var product = req.body;
      db.update_product([product.name,product.description,product.unitprice,product.imageurl, product.id], function(err, product) {
        if(err) {
          console.log('updateProduct', product, err);
        }
        res.send(product);
      })
    },
    deleteProduct: function(req, res, next) {
      var db = req.app.get('db');
      var id = req.params.id;
      db.delete_product([id, id], function(err) {
        if(err) {
          console.log('deleteProduct', id, err);
        }
        res.send({isSuccessful: true})
      })
    }
}
