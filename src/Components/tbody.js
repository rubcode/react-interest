import styled from 'styled-components'

const TbodyStyled = styled.tbody`

`

function Tbody({data}) {
    return (
        <TbodyStyled>
            {
                data.foreach((item,index) =>{
                    <tr key={index}>
                        <td key={`${index}_month`}>{item['month']}</td>
                        <td key={`${index}monthly`}>{item['monthly']}</td>
                        <td key={`${index}amountRest`}>{item['amountRest']}</td>
                        <td key={`${index}interest`}>{item['interest']}</td>
                        <td key={`${index}acumulateInterest`}>{item['acumulateInterest']}</td>
                    </tr>
                    
                })
            }
        </TbodyStyled>
    )
}

export default Tbody
