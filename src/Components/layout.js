import styled from 'styled-components'

const LayoutStyled = styled.div`
    min-block-size: 100vh;
    margin: auto;
    max-inline-size: 75rem;
    padding-block: 2rem;
    padding-inline: 2rem;
    @media screen and (min-width: 600px){
        display: grid;
        grid-template-columns: 1fr 1fr;
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
