import React, { useEffect, useState } from 'react';
import CustomerService from '../service/CustomerService';
import SettingService from '../service/SettingService';
import BreadcrumComponent from './BreadcrumbComponent';

const CustomersComponent = () => {

    const [customers, setCustomers] = useState([]);
    const [firstFieldName, setFirstFieldName] = useState('');
    const [secondFieldName, setSecondFieldName] = useState('');
    const [thirdFieldName, setThirdFieldName] = useState('');
    const [fourthFieldName, setFourthFieldName] = useState('');
    const [textAreaName, setTextAreaName] = useState('');

    useEffect(() => {
        getCustomers();
        
        SettingService.getSettings().then(response => {
            setFirstFieldName(response.data.firstFieldName);
            setSecondFieldName(response.data.secondFieldName);
            setThirdFieldName(response.data.thirdFieldName);
            setFourthFieldName(response.data.fourthFieldName);
            setTextAreaName(response.data.textAreaName);
        }).catch(error => {
            console.log(error);
        })
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
                        <th>Name</th>
                        <th>{firstFieldName}</th>
                        <th>{secondFieldName}</th>
                        <th>{thirdFieldName}</th>
                        <th>{fourthFieldName}</th>
                        <th>{textAreaName}</th>
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