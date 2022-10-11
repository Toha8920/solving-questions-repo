import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='display: flex justify-between bg-slate-300 h-14 items-center px-20 shadow-lg'>
            <div className='text-2xl'>
                <h5>Solving Question</h5>
            </div>
            <div className='link-tag'>
                <Link to='/'>Home</Link>
                <Link to='topics'>Topics</Link>
                <Link to='/statics'>Statics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;