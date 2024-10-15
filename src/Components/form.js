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

    .title{
        margin: 0;
        font: var(--titleFont);
        color: var(--primaryColor);

    }

    .box{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        gap: .5rem;

    }
    label{
        padding-inline-start: 0.5rem;
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
            <h1 className='title'>Calculadora Interés Compuesto</h1>
            <div className='box'>
                <InputText type='text' name='amount' placeholder='Ingrese Monto' value={amount} onChange={handlerAmount}/>
            </div>
            <div className='box'>
                <InputText type='text' name='months' placeholder='Ingrese Meses' value={months} onChange={handlerMonth}/>
            </div>
            <div className='box'>
                <InputText type='text' name='monthly' placeholder='Ingrese Mensualidad' value={monthly} readOnly/>
            </div>
            <div className='box'>
                <InputText type='text' name='annualRate' placeholder='Ingrese Tasa Anual' value={annualRate} onChange={handlerAnnualRate}/>
            </div>
            <div className='box'>
                <InputText type='text' name='monthlyRate' placeholder='Ingrese Tasa Mensual' value={monthlyRate} readOnly/>
            </div>
            <div className='box'>
                <Button text="Calcular" type="submit"></Button>
                <ButtonContrast text="Limpiar" type="button" onClick={cleanInputs}></ButtonContrast>
            </div>
            
        </FormStyled>
    )
}

export default Form
