import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomerService from "../service/CustomerService";
import SettingService from "../service/SettingService";

const CreateCustomerComponent = () => {

    const [name, setName] = useState('');
    const [firstField, setFirstField] = useState('');
    const [firstFieldName, setFirstFieldName] = useState('');
    const [secondField, setSecondField] = useState('');
    const [secondFieldName, setSecondFieldName] = useState('');
    const [thirdField, setThirdField] = useState('');
    const [thirdFieldName, setThirdFieldName] = useState('');
    const [fourthField, setFourthField] = useState('');
    const [fourthFieldName, setFourthFieldName] = useState('');
    const [textArea, setTextArea] = useState('');
    const [textAreaName, setTextAreaName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        SettingService.getSettings().then(response => {
            setFirstFieldName(response.data.firstFieldName);
            setSecondFieldName(response.data.secondFieldName);
            setThirdFieldName(response.data.thirdFieldName);
            setFourthFieldName(response.data.fourthFieldName);
            setTextAreaName(response.data.textAreaName);
        }).catch(error => {
            console.log(error);
        })
    })

    const saveCustomer = (e) => {
        e.preventDefault();

        const customer = { name, firstField, secondField, thirdField, fourthField, textArea };

        CustomerService.createCustomer(customer).then(navigate('/')).catch(error => {
            console.log(error);
        })
    }

    return (
        <div id='main'>
            <br/>
            <h2>Create customer</h2>
            <hr/>
            <form id='form' className='ui form'>
                <div className='field'>
                    <label>Name:</label>    
                    <input placeholder='Name' name='name' className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='two fields'>
                    <div className='field'>
                        <label>{firstFieldName}:</label>    
                        <input placeholder={firstFieldName} name='firstField' className='form-control' value={firstField} onChange={(e) => setFirstField(e.target.value)}/>
                    </div>
                    <div className='field'>
                        <label>{secondFieldName}:</label>    
                        <input placeholder={secondFieldName} name='secondField' className='form-control' value={secondField} onChange={(e) => setSecondField(e.target.value)}/>
                    </div>
                </div>
                <div className='two fields'>
                    <div className='field'>
                        <label>{thirdFieldName}:</label>    
                        <input placeholder={thirdFieldName} name='thirdField' className='form-control' value={thirdField} onChange={(e) => setThirdField(e.target.value)}/>
                    </div>
                    <div className='field'>
                        <label>{fourthFieldName}:</label>    
                        <input placeholder={fourthFieldName} name='fourthField' className='form-control' value={fourthField} onChange={(e) => setFourthField(e.target.value)}/>
                    </div>
                </div>
                <div className='field'>
                    <label>{textAreaName}:</label>
                    <textarea className='text-area w-100' rows='10' name='textArea' id='textarea' value={textArea} onChange={(e) => setTextArea(e.target.value)}></textarea>
                </div>
                <br/>
                <button className='ui positive button' onClick={(e) => saveCustomer(e)}>Save</button>
                <Link to='/' className='ui negative button' style = {{marginLeft:"10px"}}>Cancel</Link>
            </form>
        </div>
    );

}

export default CreateCustomerComponent;