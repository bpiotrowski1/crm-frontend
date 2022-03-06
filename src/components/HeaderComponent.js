import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div className='ui fixed inverted menu'>
            <div className='ui container'>
                <Link to='/' className='header item'>
                    CRM
                </Link>
                <div className='right menu'>
                    <Link to='/register' className='item'>Rejestracja</Link>
                    <Link to='/login' className='item'>Zaloguj</Link>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;