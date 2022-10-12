import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="navbar bg-slate-300 flex-col">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">Solving Questions</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/statics'>Statics</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;