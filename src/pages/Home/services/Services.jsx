import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/service`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div className="mb-8">
        <div className="text-center space-y-3">
            <h4 className="text-medium text-red-400">
                Service
            </h4>
            <h2 className="text-3xl font-bold">Our Service Area</h2>
            <div className="flex justify-center">
                <p className="w-1/2 mb-5">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                services.map((service)=><Service
                key={service._id} service={service}
                >

                </Service>)
            }
        </div>
    </div>
  );
};

export default Services;
