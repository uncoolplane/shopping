select * from products
  inner join order_items on products.id = order_items.productid
where order_items.orderid=$1
