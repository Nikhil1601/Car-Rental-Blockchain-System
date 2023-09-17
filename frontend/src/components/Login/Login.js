import React from 'react'
import './Login.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../features/register/checkRegistrationSlice';

// export default function Login({contract,provider}) {
//   const currentAddress = useSelector((state) => state.currentAddress.address);
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     const addRenter = await contract.addRenter(
//       currentAddress,
//       name,
//       lastName,
//       true,
//       false,
//       0,
//       0,
//       0,
//       0,
//       0
//     );
//     console.log("ffsadas")
//     await addRenter.wait();
//     window.location.reload();
//   };

//   const canRent = async () => {
//     const canRentCar = await contract.canRentCar(currentAddress);
//     const currentRenter = await contract.renters(currentAddress);
//     const name = currentRenter[1];
//     if (canRentCar || name.length > 0) {
//       dispatch(register());
//     }
//   };
//   canRent();

//   return (
//     <div className='container dashboard-form'>
//       <div className='form-container'>
//         <form onSubmit={handleRegisterSubmit}>
//           <input
//             className='name'
//             type='text'
//             placeholder='Name'
//             required
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           ></input>
//           <input
//             className='lastName'
//             type='text'
//             placeholder='Last Name'
//             required
//             onChange={(e) => setLastName(e.target.value)}
//             value={lastName}
//           ></input>
//           <button className='button-class form-submit-button' type='submit'>
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }
const Login = ({contract,provider}) => {
  const currentAddress = useSelector((state) => state.currentAddress.address);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const addRenter = await contract.addRenter(
      currentAddress,
      name,
      lastName,
      true,
      false,
      0,
      0,
      0,
      0,
      0
    );
    console.log("ffsadas")
    await addRenter.wait();
    window.location.reload();
  };

  const canRent = async () => {
    const canRentCar = await contract.canRentCar(currentAddress);
    const currentRenter = await contract.renters(currentAddress);
    const name = currentRenter[1];
    if (canRentCar || name.length > 0) {
      dispatch(register());
    }
  };
  canRent();

  return (
    <div class="logins-container" id="logins-container">
		<div class="forms-container">
			<form action="#" onSubmit={handleRegisterSubmit}>
				<h1>Login</h1>
        <h2 className='fname'>First Name</h2>
				<input type="text" placeholder="First Name" required onChange={(e) => setName(e.target.value)} value={name}/>
        <h2 className='lname'>Last Name</h2>
				<input type="text" placeholder="Last Name" required onChange={(e) => setLastName(e.target.value)} value={lastName}/>
				<button className='logins-btn' type='submit'>Log In</button>
			</form>
		</div>
		<div class="overlay-container">
			<div class="overlay">
				<div class="overlay-panel overlay-right">
					<img src="https://images.unsplash.com/photo-1603367426572-e187e05cc989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="car" />
				</div>
			</div>
		</div>
	</div>
  )
}

export default Login;
