import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingDetails from "./BookingDetails";


const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/checkout?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const handleBookingConfirm = id =>{
    const proced = confirm('Are you want to Update this services');
    if(proced){
      fetch(`http://localhost:5000/checkout/${id}`,{
        method:'PATCH',
        headers:{
          'content-type' : 'application/json'
        },
        body: JSON.stringify({status:'Confirm'})
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.modifiedCount>0){
          alert('modify Successfully successfull')
          const reaming = bookings.filter(booking=> booking._id !== id);
          const changed = bookings.find(booking=> booking._id === id);
          changed.status = 'Confirm'
          const newBooking = [changed,...reaming];
          setBookings(newBooking);
        }
      })
    }

  }
  const handleDelete = id =>{
    const proced = confirm('Are you want to delete this services');
    if(proced){
      fetch(`http://localhost:5000/checkout/${id}`,{
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount>0){
          alert('deleted successfull')
          const reaming = bookings.filter(booking=> booking._id !== id);
          setBookings(reaming);
        }
      })
    }

  }
  return (
    <div>
      <p>Booking Length : {bookings.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
            
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking=><BookingDetails
                key={booking._id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}>

                </BookingDetails>)
            }
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Bookings;
