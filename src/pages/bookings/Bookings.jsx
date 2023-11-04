import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingDetails from "./BookingDetails";
import { key } from 'localforage';

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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                bookings.map(booking=><BookingDetails
                key={booking._id} booking={booking}>

                </BookingDetails>)
            }
          </tbody>
         
        </table>
      </div>
    </div>
  );
};

export default Bookings;
