UPDATE order_items
set orderid=$1,
  productid=$2,
  quantity=$3
WHERE
  order_items.id=$4
