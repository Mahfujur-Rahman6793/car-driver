import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const loadData = useLoaderData();
    const {title, price, description} = loadData;
    
    return (
        <div>
            <p>checkOut services : {title}</p>
        </div>
    );
};

export default CheckOut;