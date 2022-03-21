import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerService from "../service/CustomerService";

const CreateCustomerComponent = () => {

    const [name, setName] = useState('');
    const navigate = useNavigate();

    const saveCustomer = (e) => {
        e.preventDefault();

        const customer = { name };

        CustomerService.createCustomer(customer).then(response => {
            navigate('/');
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div id='main'>
            <br/>
            <h2>Dodaj klienta</h2>
            <hr/>
            <form className='ui form'>
                <div className='field'>
                    <label>Nazwa:</label>    
                    <input placeholder='Name' name='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <br/>
                <button className='ui positive button' onClick={(e) => saveCustomer(e)}>Zapisz</button>
                <Link to='/' className='ui negative button' style = {{marginLeft:"10px"}}>Cancel</Link>
            </form>
        </div>
    );

}

export default CreateCustomerComponent;