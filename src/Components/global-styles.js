import {createGlobalStyle} from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
    :root{
        --bg: #1C2431;
        --buttonBg: #202A3C;
        --primaryColor: #2ACFCF;
        --accentColor : #003694;
        --white : #ffffef;
        --grey: #fafafa ;
        --bodyRegular: 400 1rem Poppins;
        --bodyRegularSemiBold: 500 1.2rem Poppins;
        --titleFont: 600 1.5rem Poppins;

    }
    body {
        background: var(--bg);
        color: var(--white);
        font: var(--bodyRegular);
        margin: 0;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .title{
        margin: 0;
        font: var(--titleFont);
        color: var(--primaryColor);
        text-align: left;
        padding-block-start: 2rem;
        padding-inline-start: 2rem;
    }
    .logo{
        width: 180px;
    }
    @media screen and (prefers-color-scheme: light) {
        body {
            background: var(--white);
            color: var(--bg);
        }
    }
`



export default GlobalStylesStyled
