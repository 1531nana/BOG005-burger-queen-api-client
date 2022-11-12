import { useContext } from "react"
import { TableContext } from "../../context/TableContext"
// import TableContext from "../../context/TableContext"
// import { filterAtributteList } from "../../lib/helpers"
import { TableComlumnOption } from "./TableColumnOption"

export const TableBody = (props) => {

    const {products} = useContext(TableContext)

   // const tr = return listElements.includes(regexUrl) ? listTrImg : listTr 
//    listElements.length === 0 ?
    const listTr = products.map((element) => {

        return (
            <tr className='table_rowBody'>
                <td className='table_columnBody table_columnBody--img'><img src={element.image} alt="" /></td>
                <div className="table_columnBody--section">
                    <td className='table_columnBody'>{element.name}</td>
                    <td className='table_columnBody table_columnBody--price'>{element.price}</td>
                </div>
                <TableComlumnOption  element={element}/>
            </tr>
        )
    }) 

    return (
        <tbody className='table_body'>
            {listTr}
        </tbody>
    )
}

