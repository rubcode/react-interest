import styled from 'styled-components'

const TableStyled = styled.table`
    width: 100%;
    display: table;
    border-collapse: collapse;
    
    tbody tr{
        border-block-end: 1px solid var(--grey);
    }
    tbody td{
        padding: 1rem;
    }
`

function Table({children}) {
    return (
        <TableStyled>
            {children}
            <tbody>
                <tr>
                    <td>0</td>
                    <td>1000</td>
                    <td>10000</td>
                    <td>10</td>
                    <td>10</td>
                </tr>
            </tbody>
        </TableStyled>
    )
}

export default Table
