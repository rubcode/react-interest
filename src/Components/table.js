import styled from 'styled-components'

const TableStyled = styled.table`
    width: 100%;
    display: table;
    border-collapse: collapse;
    text-align: center;
    
    
`

function Table({children}) {
    return (
        <TableStyled>
            {children}
        </TableStyled>
    )
}

export default Table
