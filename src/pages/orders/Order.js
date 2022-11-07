import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authProvider/AuthProvider";
import OrdersRow from "./OrdersRow";

const Order = () => {
  const { user, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDeleteOrder = (id) => {
    const procced = window.confirm(
      "Are you sure You want to delete this product"
    );
    if (procced) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("successfully Delete");
            const remaningOrder = orders.filter((odr) => odr._id !== id);
            setOrders(remaningOrder);
          }
        });
    }
  };

  const handlerUpdateOrder = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaning = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";
          const newOrder = [approving, ...remaning];
          setOrders(newOrder);
        }
      });
  };
  return (
    <div>
      <h3 className="text-5xl">You have {orders?.length} orders</h3>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersRow
                key={order._id}
                order={order}
                handleDeleteOrder={handleDeleteOrder}
                handlerUpdateOrder={handlerUpdateOrder}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
