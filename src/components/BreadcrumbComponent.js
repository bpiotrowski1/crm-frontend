import React from 'react';
import { Link } from 'react-router-dom';

const BreadcrumbComponent = () => {
    return(
        <div id='breadcrumb' className='ui breadcrumb'>
            <Link to='/' className='section'>CRM</Link>
            <i className='right chevron icon divider'></i>
            <Link to='/' className='active section'>Customers</Link>
        </div>
    )
}

export default BreadcrumbComponent;