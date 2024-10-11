import styled from 'styled-components'
import Form from './form';

const BoxFormStyled = styled.div`
    grid-area: form;
`

function BoxForm({...props}) {
    
    return (
        <BoxFormStyled>
            <Form {...props}></Form>
        </BoxFormStyled>
    )
}

export default BoxForm
