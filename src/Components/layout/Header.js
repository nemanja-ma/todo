import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <header>
            <h1>To Do List</h1>
            <nav className="fill">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;