import styled from 'styled-components'
import Table from './table'
import Thead from './thead'
import Tbody from './tbody'

const BoxResponseStyled = styled.div`
    grid-area: table;
`

function BoxResponse({headers, data}) {
    return (
        <BoxResponseStyled>
            {
                headers.length  > 0 ? 
                    <Table>
                        <Thead headers={headers}></Thead>
                        <Tbody data={data}></Tbody>
                    </Table> 
                : null

            }
            
        </BoxResponseStyled>
    )
}

export default BoxResponse
