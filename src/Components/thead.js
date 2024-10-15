import styled from 'styled-components'

const TheadStyled = styled.thead`

    background-color: var(--primaryColor);
    tr{
        border-block-end: 1px solid var(--grey);
    }
    th{
        padding-inline: 1rem;
        text-align: center;
    }
`

function Thead({headers}) {
    return (
        <TheadStyled>
            <tr key={0}>
                {
                    headers.map((item,index) => <th key={index}>{item}</th>)
                }
            </tr>
        </TheadStyled>
    )
}

export default Thead
