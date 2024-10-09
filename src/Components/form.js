import React from 'react';
import styled from 'styled-components'
import InputText from './input-text';
import {Button,ButtonContrast} from './button'

const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.5rem;
    padding-inline:2rem;
    padding-block: 2rem;

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


function Form({onSubmit}) {
    return (
        <FormStyled onSubmit={onSubmit}>
            <h1 className='title'>Calculadora Interés Compuesto</h1>
            <div className='box'>
                <InputText type='number' name='amount' placeholder='Ingrese Monto'/>
            </div>
            <div className='box'>
                <InputText type='number' name='months' placeholder='Ingrese Meses'/>
            </div>
            <div className='box'>
                <InputText type='text' name='monthly' placeholder='Ingrese Mensualidad'/>
            </div>
            <div className='box'>
                <InputText type='text' name='annualRate' placeholder='Ingrese Tasa Anual'/>
            </div>
            <div className='box'>
                <InputText type='text' name='monthlyRate' placeholder='Ingrese Tasa Mensual'/>
            </div>
            <div className='box'>
                <Button text="Calcular" type="submit"></Button>
                <ButtonContrast text="Limpiar" type="button"></ButtonContrast>
            </div>
            
        </FormStyled>
    )
}

export default Form
