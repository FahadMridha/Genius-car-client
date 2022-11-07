import React, { useEffect, useState } from "react";

const OrdersRow = ({ order, handleDeleteOrder, handlerUpdateOrder }) => {
  const { _id, serviceName, phone, customer, price, status } = order;

  const [orderService, setOrderService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [_id]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDeleteOrder(_id)}
            className="btn btn-ghost"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        Wyman-Ledner
        <br />
        <span className="badge badge-ghost badge-sm">{serviceName}</span>
      </td>
      <td>{price}</td>
      <th>
        <button
          onClick={() => handlerUpdateOrder(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pendding"}
        </button>
      </th>
    </tr>
  );
};

export default OrdersRow;
