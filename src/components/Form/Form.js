/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { currencies } from "../../helpers/currencies"
import { StyledForm } from "./Form.styled"
import { useDispatch} from "react-redux"
import {getCurrentValueAction} from '../../modules/wallet/wallet.actions'
import { fields } from "../../helpers/fields"
import Field from "./Field"
import { validateForm } from "../../helpers/validator"
import WalletAPI from "../../modules/wallet/wallet.api"
import { v4 as uuidv4 } from 'uuid';
import LocalStorageAPI from "../../modules/localStorage/localStorage.api"

const Form = () => {
    const [form, setForm] = useState({
        currency: '',
        price: '',
        amount: '',
        purchaseDate: '',
    });
    const lsAPI = new LocalStorageAPI();
    const [errors, setErrors] = useState(null)

    const dispatch = useDispatch();
    const currencyOptionsList = () => {
        return (
            <>
                <option value="none">Select an Option</option>
                {currencies.map(curr => <option key={uuidv4()} value={curr}>{curr}</option>)}
            </>
            )
    }
    const handleSubmit = event => {
        event.preventDefault();
        const errors = validateForm(form)
        if(errors === null){
            dispatch(getCurrentValueAction(form));
            lsAPI.saveToLocalStorage('wallet', form);
            setForm({ 
                currency: '',
                price: '',
                amount: '',
                purchaseDate: ''
            })
        }else{
            setErrors(errors)
        }
    }
    
    const handleChange = event => {
        const {name, value} = event.target
        setForm({...form, [name]: value});
    }
    useEffect(()=> {
        if(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(form.purchaseDate) && form.currency){
            const api = new WalletAPI()
            api.getHistoricalValue(form.purchaseDate, form.currency)
                .then(resp => setForm({...form, price: Number(resp.rates['PLN']).toFixed(2)}))
        }
    },[form.purchaseDate, form.currency])
    const formElements = () => {
        return fields.map(element =>
        <React.Fragment key={element.name}>
            <Field 
                label={element.label} 
                type={element.type} 
                tag={element.tag} 
                name={element.name} 
                onChange={handleChange} 
                placeholder={element.placeholder}
                value={form[element.name]}
                >{
                    element.tag === 'select'
                        ? currencyOptionsList()
                        : null
                }
            </Field>
            {
                errors && errors[element.name] 
                    ?   <span style={{color: 'red'}}>{errors[element.name]}</span>
                    : null
            }
        </React.Fragment>
        )
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            {formElements()}
            <input type="submit"></input>
        </StyledForm>
    )
}

export default Form