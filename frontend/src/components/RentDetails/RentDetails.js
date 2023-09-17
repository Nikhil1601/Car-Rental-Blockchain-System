import React from 'react'
import data from '../Data.json';
import './RentDetails.css'
import Rent from '../Rent/Rent';
export default function RentDetails ({ contract }){
  return (
    <div className='rentdetails'>
      <h1 className='top-heading'>Book A Ride Instantly</h1>
      <div className='cards-container'>
        {data.map(data=>(
            <Rent
            cbrand={data.cbrand}
            cname={data.cname}
            ethperday={data.ethperday}
            bagcount={data.bagcount}
            geartype={data.geartype}
            seatcount={data.seatcount}
            carimage={data.carimage}
            contract={contract}
            />
        ))}
    </div>
    </div>
  )
}



