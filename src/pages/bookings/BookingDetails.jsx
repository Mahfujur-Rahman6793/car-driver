

const BookingDetails = ({ booking, handleDelete }) => {
  return (
    <tr>
      <th>
        <button onClick={()=>handleDelete(booking._id)} className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                className="rounded-full"
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
        <span className="badge badge-ghost badge-sm">{booking.date}</span>
      </td>
      <td>{booking.price}</td>
      <th>
        <button className="btn btn-ghost btn-xs"></button>
      </th>
    </tr>
  );
};

export default BookingDetails;
