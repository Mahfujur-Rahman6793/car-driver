import React from 'react';

const BookingDetails = ({booking}) => {
    return (
      
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img className='rounded-full'
                       src={booking.img}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{booking.CustomerName}</div>
                    <div className="text-sm opacity-50">BD</div>
                  </div>
                </div>
              </td>
              <td>
                {booking.email}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {booking.date}
                </span>
              </td>
              <td>{booking.price}</td>
              <th>
                <button className="btn btn-ghost btn-xs"></button>
              </th>
            </tr>
     
    );
};

export default BookingDetails;