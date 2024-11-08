import React from 'react';
import styled from 'styled-components'
import InputText from './input-text';
import {Button,ButtonContrast} from './button'
import { useRef } from 'react';
import createInterest from './services/interest.js'

const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;

    .box{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .5rem;
        width: 100%;
    }
    .box .col-2{
        width: 50%;
    }
    
`


function Form({amount,months,monthly,annualRate,monthlyRate,setAmount,setMonths,setMonthly,setAnnualRate,setMonthlyRate,setHeaders,setDataInterest}) {
    const form = useRef(null)
    function cleanInputs(){
        setAmount("");
        setMonths("");
        setMonthly("");
        setAnnualRate("");
        setMonthlyRate("");
        setDataInterest([])
        setHeaders([])
    }

    function handlerAmount(event){
        setAmount(event.target.value);
    }

    function handlerMonth(event){
        setMonths(event.target.value);
    }

    function handlerAnnualRate(event){
        setAnnualRate(event.target.value)
    }

    function handlerSubmit(event){
        event.preventDefault();
        const formData = new FormData(form.current)
        const data = {
          amount: formData.get("amount"),
          months: formData.get("months"),
          monthly: formData.get("monthly"),
          monthlyRate: formData.get("monthlyRate")
        }
        const dataInt = createInterest(data)
        const headers = ["Mes","Mensualidad", "Monto Restante", "Interés", "Interés Acumulado"];

        setDataInterest(dataInt)
        setHeaders(headers)     
      }

    return (
        <FormStyled ref={form} onSubmit={handlerSubmit}>
            <div className='box'>
                <InputText type='text' name='amount' placeholder='Ingrese Monto' value={amount} onChange={handlerAmount}/>
            </div>
            <div className='box'>
                <div className='col-2'>
                    <InputText type='text' name='months' placeholder='Ingrese Meses' value={months} onChange={handlerMonth}/>
                </div>
                <div className='col-2'>
                    <InputText type='text' name='monthly' placeholder='Mensualidad' value={monthly} readOnly/>
                </div>
            </div>
            <div className='box'>
                <div className='col-2'>
                    <InputText type='text' name='annualRate' placeholder='Ingrese Tasa Anual' value={annualRate} onChange={handlerAnnualRate}/>
                </div>
                <div className='col-2'>
                    <InputText type='text' name='monthlyRate' placeholder='Tasa Mensual' value={monthlyRate} readOnly/>
                </div>
            </div>
            <div className='box'>
                <Button text="Calcular" type="submit"></Button>
                <ButtonContrast text="Limpiar" type="button" onClick={cleanInputs}></ButtonContrast>
            </div>
            
        </FormStyled>
    )
}

export default Form
