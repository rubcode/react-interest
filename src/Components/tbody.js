import styled from 'styled-components'

const TbodyStyled = styled.tbody`
    
    tr{
        border-block-end: 1px solid var(--grey);
    }
    td{
        padding-inline: 1rem;
        padding-block: .5rem;
        text-align: center;
    }
`

function Tbody({data}) {
    return (
        <TbodyStyled>
            {
                data.map((item,index) =>{
                    return <tr key={index}>
                            <td key={`${index}_month`}>{item['month']}</td>
                            <td key={`${index}_monthly`}>{item['monthly']}</td>
                            <td key={`${index}_amountRest`}>{parseFloat(item['restAmount']).toFixed(2)}</td>
                            <td key={`${index}_interest`}>{parseFloat(item['interest']).toFixed(2)}</td>
                            <td key={`${index}_acumulateInterest`}>{parseFloat(item['acumulateInterest']).toFixed(2)}</td>
                        </tr>
                    
                })
            }
        </TbodyStyled>
    )
}

export default Tbody
