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
                        <th>Pierwsze</th>
                        <th>Drugie</th>
                        <th>Trzecie</th>
                        <th>Czwarte</th>
                        <th>Pole tekstowe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(
                            customer => 
                            <tr key={customer.id} className='data'>
                                <td>{customer.name}</td>    
                                <td>{customer.firstField}</td>    
                                <td>{customer.secondField}</td>    
                                <td>{customer.thirdField}</td>    
                                <td>{customer.fourthField}</td>    
                                <td>{customer.textArea}</td>    
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CustomersComponent;