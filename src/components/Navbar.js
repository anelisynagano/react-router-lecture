import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul className='navbar'>
            <li>
                <NavLink exact to='/' activeClassName='active'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to='/users' activeClassName='active'>
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact' activeClassName='active'>
                    Contact
                </NavLink>
            </li>
        </ul>
    )
}

export default Navbar;