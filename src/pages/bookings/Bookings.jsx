import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings,setBookings] =useState([]);
    const url = `http://localhost:5000/checkout?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
        })
    },[]);
    return (
        <div>
            <p>Booking Length : {bookings.length}</p>
        </div>
    );
};

export default Bookings;