import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <div>
                <h1>My Blog</h1>
                <p>Welcome to my blog!</p>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">List</Link>
                    </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;