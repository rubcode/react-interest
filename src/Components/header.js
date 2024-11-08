import styled from 'styled-components'

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    background-color: var(--buttonBg);
    box-shadow: 0 1px #161a251a;
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
