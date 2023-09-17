import React,{ useState, useEffect } from 'react'
import {Routes,Route, Outlet, useParams} from 'react-router-dom';
import About from './About/About'
import { useSelector, useDispatch } from 'react-redux';
import Wallet from './Wallet/Wallet';
import { connect, disconnect } from '../features/connect/checkConnectionSlice';
import { updateAddress } from '../features/currentAddress/currentAddresSlice';
import { ethers } from 'ethers';
import contractAbi from '../assets/CarChain.json';
import Login from './Login/Login';
import RentDetails from './RentDetails/RentDetails';
import Home from './Home/Home';
require('dotenv').config();

export default function Dashboard() {
    // const {name,authentication}= useParams();
    const [address, setAddress] = useState('');
    const [chainId, setChainId] = useState('');
    const connected = useSelector((state) => state.connector.connected);
    const registered = useSelector((state) => state.registrator.registered);
    const currentAddress = useSelector((state) => state.currentAddress.address);
    const dispatch = useDispatch();
    const contractAddress = '0xa1f8155a5708962139C920De2412BED69708E01b';

    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    const signer = provider.getSigner();

    useEffect(() => {
        connectWallet().catch(console.error);
        // getBalance().catch(console.error);
        console.log('Is connected: ' + connected + ' ,registered: ' + registered);
    });

    const connectWallet = async () => {
        //client side code
        if (!window.ethereum) {
        console.log('please install MetaMask');
        return;
        }
        // MetaMask requires requesting permission to connect users accounts
        let accounts = await provider.send('eth_requestAccounts', []);
        let account = accounts[0];
        const address = await signer.getAddress();
        const chainId = await signer.getChainId();
        if (address.length > 0) {
        setAddress(address);
        }
        setChainId(chainId);
        console.log('address: ' + currentAddress + ' network id: ' + chainId);
    };

    if (address) {
        dispatch(connect());
        dispatch(updateAddress(address));
    }

    const contract = new ethers.Contract(
        contractAddress,
        contractAbi.abi,
        signer
    );
    
    return (
        <div className="dashboard">
            {!connected||!registered ? (
                <Login contract={contract} provider={provider}/>
            ) : (
                    <Routes>
                        <Route index path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/rentacar" element={<RentDetails contract={contract}/>}/>
                        {/* <Route path="/inventory" element={<div>Inventory </div>}/> */}
                        <Route path="/balance" element={<Wallet contract={contract}/>}/>
                        <Route path="*" element={<div>Page Not Found</div>}/>
                </Routes>
            )}
        </div>
    )
}   
