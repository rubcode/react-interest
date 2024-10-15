import styled from 'styled-components'

const LayoutStyled = styled.div`
    min-block-size: 100vh;
    margin: 0;
    max-inline-size: 75rem;
    padding-block: 2rem;
    padding-inline: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media screen and (min-width: 948px){
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto auto;
        column-gap: 2rem;
        grid-template-areas: "form table" "form table";
    }
`

function Layout({children}) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
