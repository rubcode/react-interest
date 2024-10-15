import styled from 'styled-components'

const InputText = styled.input`
    border: 1px solid var(--buttonBg);
    color: var(--colorFont);
    background: var(--buttonBg);
    padding-inline: 1rem;
    padding-block: .5rem;
    border-radius: 1.5rem;
    outline: none;
    font: var(--bodyRegular);
    flex: 1;
    width: 100%;
    &:focus{
        border: 1px solid var(--primaryColor);
    }
`


export default InputText
