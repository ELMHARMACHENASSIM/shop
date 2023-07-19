import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


 function Header() {
    return (
        <header>
            <div className="containernav">
                <div className="logo">
                    <h1>shop</h1>
                </div>
                <ul className='navbarlink'>
                    <li>
                        <NavLink className='nav-link' to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to={'/store'}>Store</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to={'/contact'}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to='/faqs'>FaQs</NavLink>
                    </li>
                </ul>          
                <ul className="btns">
                    <li>
                    <FontAwesomeIcon icon={faBagShopping} className='icon' />
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faUser}  className='icon'/>
                    </li>
                </ul>
                </div>
          
        </header>
    )
}
export default Header;