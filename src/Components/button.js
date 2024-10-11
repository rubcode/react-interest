import styled from 'styled-components'

const ButtonStyled = styled.div`
    background: var(--primaryColor);
    color: var(--white);
    border: 1px solid var(--primaryColor);
    border-radius: 1.5rem;
    padding-block: 0.75rem;
    min-inline-size: 150px;
    font: var(--button);
    cursor: pointer;
    text-decoration: none !important;
    &:hover{
        background: var(--white);
        color: var(--primaryColor)
    }
`

function Button({text,link,type,className,onClick}) {
    const component = link ? "a" : "button"
    return (
        <ButtonStyled as={component} type={type} href={link} className={className} onClick={onClick}>
            {text}
        </ButtonStyled>
    )
}

export const ButtonContrast = styled(Button)`
    background-color: var(--accentColor);
    color: var(--white);
    border: 1px solid var(--accentColor);
    &:hover{
        background-color: var(--white);
        color: var(--accentColor);
    }
`

export {
    Button
} 
