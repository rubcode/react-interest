import styled from 'styled-components'

const TheadStyled = styled.thead`

    background-color: var(--primaryColor);
    thead tr{
        border-block-end: 1px solid var(--grey);
    }
    thead th{
        padding: 1rem;
    }
`

function Thead({headers}) {
    return (
        <TheadStyled>
            <tr key={0}>
                {
                    headers.foreach((item,index) => {       
                        <td key={index}>{item}</td>
                    })
                }
            </tr>
        </TheadStyled>
    )
}

export default Thead
