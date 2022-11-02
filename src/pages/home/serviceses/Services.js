import React, { useState } from "react";
import { useEffect } from "react";
import ServicacesCard from "./ServicacesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-4">
        <p className="text-2xl font-bold text-orange-600"> Services</p>
        <p className="text-5xl font-semibold">Our Services Area</p>
        <p>
          {" "}
          Looking for the best car repair service near you? Sheba.xyz has
          trusted & skilled car mechanics in Bangladesh. Satisfaction
          guaranteed. Book now.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {services.map((service) => (
            <ServicacesCard
              key={service._id}
              service={service}
            ></ServicacesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
