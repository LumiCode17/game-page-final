import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
import logo from '../../images/logo.png'
/* import name from '../images/name.jpeg' */

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
        
            <div className="cont">
                
                <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt="logo" />
                </Link>

                <Link to='main' className='logo' smooth={true} duration={2000}>
                    <h1 className="glitch">
                        <span aria-hidden="true">Game-oveR</span>
                        Game-oveR
                        <span aria-hidden="true">Game-oveR</span>
                    </h1>
                </Link>
            
            </div>

            <input type="checkbox" id="toggler"></input>
            <label htmlFor="toggler">
                <i className="fas fa-bars"></i>
            </label>
        
            <div className="menu">
                <ul className="list">
                    <li className="linked"><Link to="main" smooth={true} duration={1000} className="active navAnc">Home</Link></li>
                    <li className="linked"><Link to="about" smooth={true} duration={1000} className="navAnc">About</Link></li>
                    <li className="linked"><Link to="game" smooth={true} duration={1000} className="navAnc">Games</Link></li>
                    <li className="linked"><Link to="shop" smooth={true} duration={1000} className="navAnc">Shop</Link></li>
                    <li className="linked"><Link to="contact" smooth={true} duration={1000} className="navAnc">Contact</Link></li>
                </ul>
            </div>
        </nav>

    </div>
  )
}

export default Navbar