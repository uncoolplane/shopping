update orders
set ordernumber=$1,
  orderdate=$2,
  shipdate=$3,
  customerid=$4
WHERE
  orders.id=$5
