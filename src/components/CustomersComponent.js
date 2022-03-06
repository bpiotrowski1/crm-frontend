import React, { useEffect, useState } from 'react';
import CustomerService from '../service/CustomerService';
import BreadcrumComponent from './BreadcrumbComponent';

const CustomersComponent = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers();
    }, [])

    const getCustomers = () => {
        CustomerService.getCustomers().then(response => {
            setCustomers(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div id='main' className='ui stackable grid'>
            <BreadcrumComponent/>
            <table id='customers' className='ui celled table striped'>
                <thead>
                    <tr className='thead'>
                        <th>Nazwa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(
                            customer => 
                            <tr key={customer.id} className='data'>
                                <td>{customer.name}</td>    
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomersComponent;