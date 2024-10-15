import styled from 'styled-components'

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    background-color: var(--white);
    padding: 1rem;
`

function Header({children}) {
    return (
        <HeaderStyled>
            {children}
        </HeaderStyled>
    )
}

export default Header
