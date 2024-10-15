import styled from 'styled-components'
import Table from './table'
import Thead from './thead'
import Tbody from './tbody'

const BoxResponseStyled = styled.div`
    grid-area: table;
    .box-table{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-x: scroll;
    }
`

function BoxResponse({headers, data}) {
    return (
        <BoxResponseStyled>
            
                {
                    headers.length  > 0 ? 
                        <div className='box-table'>
                            <Table>
                                <Thead headers={headers}></Thead>
                                <Tbody data={data}></Tbody>
                            </Table> 
                        </div>
                    : null

                }
        </BoxResponseStyled>
    )
}

export default BoxResponse
