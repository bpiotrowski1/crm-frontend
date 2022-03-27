import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <div id='header' className='ui fixed inverted menu'>
            <Link to='/' className='header item' style={{width: '210px'}}>
                    CRM
            </Link>
            <div className='ui container'>
                <div className='right menu'>
                    <Link to='/register' className='item'>Register</Link>
                    <Link to='/login' className='item'>Login</Link>
                </div>
            </div>
      </div>
    );
}

export default HeaderComponent;