import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from './../../../provider/AuthProvider';
import Swal from 'sweetalert2';


const CheckOut = () => {
  const loadData = useLoaderData();
  const { _id,title, price, description,img } = loadData;
  const {user} = useContext(AuthContext);
  const handleSubmission = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const order = {
      img,
      CustomerName : name,
      email,
      date,
      service:title,
      service_id : _id,
      price : price

    }
    console.log(order);
    fetch(`http://localhost:5000/checkout`,{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })

  }

  return (
    <div>
      <p className="text-center text-5xl font-bold mb-5">checkOut services : {title}</p>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="flex justify-center items-center pt-5">
              <img className="rounded-full" src={img} alt="" />
            </div>
            <form onSubmit={handleSubmission} className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name = 'date'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  // placeholder="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  // placeholder="price"
                  defaultValue={price}
                  className="input input-bordered"
                  required
                />
              </div>
              </div>
              <div className="form-control mt-6">
              
                <input className="btn btn-primary btn-block " type="submit" value="Order Confirm" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
