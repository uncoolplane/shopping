UPDATE customers
set firstname=$1,
  lastname=$2,
  address=$3,
  city=$4,
  state=$5,
  zipcode=$6,
  phonenumber=$7,
  userid=$8
WHERE
  customers.id=$9
