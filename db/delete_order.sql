delete from order_items where order_items.orderid=$1;
delete from orders where orders.id=$2
