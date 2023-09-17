import React, { useState } from 'react'
import './Rent.css'
import {GiGearStick,GiCarSeat} from 'react-icons/gi';
import {HiShoppingBag} from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Rent = (props) => {
  const currentAddress = useSelector((state) => state.currentAddress.address);
  const [buttonText, setButtonText] = useState('Pickup');

  const pickUpHandler = async () => {
    setButtonText('Dropoff');
    const pickUp = await props.contract.pickUp(currentAddress);
    await pickUp.wait();
    window.location.reload();
  };

  const dropOffHandler = async () => {
    setButtonText('Pickup');
    const dropOff = await props.contract.dropOff(currentAddress);
    await dropOff.wait();
    window.location.reload();
  };

  return (
    <div className='container'>
        <div className='content'>
          <div className='car-name'>
            <h1>{props.cbrand}</h1>
            <h1>{props.cname}</h1>
          </div>
          
          <div className="ethcount">{props.ethperday}<span></span>etherum/Day</div>
          <div className="functions">
            <ul>
              <li><HiShoppingBag/>{props.bagcount} bag</li>
              <li><GiGearStick/>{props.geartype}</li>
              <li><GiCarSeat/>{props.seatcount} seats</li>
            </ul>
            <img className='car-img img-fluid object-fit rounded' src={props.carimage} alt="car"/>
            <div className="d-flex gap-5 justify-content-center">
      {/* <button className='drop' onClick={(event) => ((event.target.value === 'Dropoff')?pickUpHandler():dropOffHandler())}>{buttonText}</button> */}
      <button className='drop' onClick={pickUpHandler}>Pickup</button>
      <button className='drop' onClick={dropOffHandler}>Drop off</button>
    </div>
          </div>
        </div>
      </div>
  )
}

export default Rent;