import React from "react";
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
        <img src={person} className="w-2/3 rounded-lg shadow-2xl" />
        <img src={parts} className="absolute -bottom-1/3 right-20 border-8 border-white w-1/2 rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
            <div className="w-5/12">
                <h5 className="text-sm text-red-600">About Us</h5>
                <h3 className="text-3xl font-bold mt-5">We are qualified & of experience in this field</h3>
            </div>
         <div className="w-9/12">
         <p className="py-3">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-3">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
         </div>
          <button className="btn bg-red-400 text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
