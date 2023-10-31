import React from 'react';

const BannerDesign = () => {
    return (
        <div className="absolute rounded-xl w-1/2 h-full flex flex-col  top-0 gap-5   justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
          <div className="text-white space-y-5 ps-5 ">
            <h2 className="text-6xl">
            Affordable Price For Car Servicing
            </h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div>
          <div className="flex gap-5">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-outline btn-secondary">Secondary</button>
          </div>
        </div>
    );
};

export default BannerDesign;