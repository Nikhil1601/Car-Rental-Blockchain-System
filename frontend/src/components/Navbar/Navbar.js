import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux';
import metamaskLogo from '../../assets/metamask.png';
import brandicon from '../../assets/ethereum.png'

import { FaEthereum, FaHome } from 'react-icons/fa';
import {MdAccountBalanceWallet,MdInventory} from 'react-icons/md'
import {RiTeamFill, RiTimerFill} from 'react-icons/ri'
import {AiFillCar} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import './Navbar.css'
import Login from '../Login/Login';

export default function Navbar() {
    const connected = useSelector((state) => state.connector.connected);
    const registered = useSelector((state) => state.registrator.registered);
    const currentAddress = useSelector((state) => state.currentAddress.address);

    const slicedAddress =
    currentAddress.slice(0, 5) + '...' + currentAddress.slice(38, 44);

    const connectWalletReload = () => {
        window.location.reload();
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#e0ac69'}}>
            <div className="container-fluid">
                <img className='navbar-brand logo-img ml-2' src={brandicon} width={33} alt='ethereumLogo' />
                <button className="navbar-toggler" type="button" dataBsToggle="collapse" dataBsTarget="#navbarSupportedContent" ariaControls="navbarSupportedContent" ariaExpanded="false" ariaLabel="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex align-items-center">
                            <NavLink className="nav-link rounded-pill active" ariaCurrent="page" style={{color:'#8d5524'}} to="/">
                                <FaHome size={20}/> Home
                            </NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center" ariaCurrent="page">
                            <NavLink className="nav-link rounded-pill active" style={{color:'#8d5524'}} to="/rentacar"><AiFillCar size={20}/> Rent A Car</NavLink>
                        </li>
                        {/* <li className="nav-item d-flex align-items-center">
                            <NavLink className="nav-link rounded-pill active" style={{color:'#8d5524'}} to="/inventory"><MdInventory size={20}/> Inventory</NavLink>
                        </li> */}
                        <li className="nav-item d-flex align-items-center">
                            <NavLink className="nav-link rounded-pill active" style={{color:'#8d5524'}} to="/balance"><MdAccountBalanceWallet size={20}/> Balance</NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <NavLink className="nav-link rounded-pill active" style={{color:'#8d5524'}} to="/about"><RiTeamFill size={20}/> About</NavLink>
                        </li>
                    </ul>
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                        <li className="nav-item">
                            <div className="rounded-pill py-1 px-4" style={{color:'#8d5524',backgroundColor:'#ffdbac'}}>
                                <FaEthereum size={20}/> <BalComp/>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="rounded-pill py-1 px-4" style={{color:'#8d5524',backgroundColor:'#ffdbac'}}>
                                <RiTimerFill size={20}/> <TimeComp/>
                            </div>
                        </li>
                    </ul> */}
                        <ul className="navbar-nav mb-3 mb-lg-0 gap-4">
                            <li className="nav-item mx-2">
                                <NavLink style={{ textDecoration: 'none',color:'#8d5524' }} to='/dashboard'>
                                    <div className='d-flex gap-3'>
                                        <img width={30} height={30} src={metamaskLogo} alt='metamaskLog'></img>
                                        {!connected ? (
                                        <p onClick={connectWalletReload}>connect wallet</p>
                                        ) : (
                                        <p>{slicedAddress}</p>
                                        )}
                                        {/* <div className="rounded-circle my-1 p-2 text-bg-danger"></div>
                                        <div className="rounded-circle my-1 p-2 text-bg-success"></div> */}
                                    </div>
                                </NavLink>
                            </li>
                            <li className="nav-item mx-3">
                                <NavLink style={{ textDecoration: 'none',color:'#8d5524' }} to='/dashboard'>
                                    <CgProfile size={30}/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
