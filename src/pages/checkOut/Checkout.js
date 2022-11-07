import React, { useContext } from "react";
import { json, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/authProvider/AuthProvider";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, title, price } = service;

  const handlerPlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || " unregistered";
    const message = form.message.value;
    const order = {
      _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("palce order succfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-3xl">You are order about to{title}</h2>
      <h4 className="text-2xl"> {price}</h4>
      <form onSubmit={handlerPlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-info w-full "
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-info w-full "
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-info w-full "
          />
          <input
            name="message"
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered input-info w-full "
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Your Message"
        ></textarea>
        <input type="submit" className="btn" value="Place your order" />
      </form>
    </div>
  );
};

export default Checkout;
