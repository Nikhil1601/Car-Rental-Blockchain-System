import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="p-5 sm-p-3">
        <div className="d-flex row justify-content-center">
            <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0 text-muted">Home</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/about" className="nav-link p-0 text-muted">About</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="/rentacar" className="nav-link p-0 text-muted">Rent Car</NavLink></li>
                    {/* <li className="nav-item mb-2"><NavLink to="/inventory" className="nav-link p-0 text-muted">Inventory</NavLink></li> */}
                    <li className="nav-item mb-2"><NavLink to="/balance" className="nav-link p-0 text-muted">Balance</NavLink></li>
                </ul>
            </div>

            {/* <div className="col-6 col-md-2 mb-3">
                <h5>Section</h5>
                <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                </ul>
            </div> */}

            <div className="col-md-5 offset-md-1 mb-3">
                <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="n15x4g"/>
                        <button className="btn btn-primary" type="button" style={{backgroundColor:'#8D5524'}} fdprocessedid="ckr22a">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 rule-divider">
            <p>© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
            </ul>
        </div>
    </footer>
  )
}
