import { useContext } from "react"
import TableContext from "../../context/TableContext"
// import TableContext from "../../context/TableContext"
import { filterAtributteList, renamePropertiesKeys } from "../../lib/helpers"
import { TableComlumnOption } from "./TableColumnOption"

export const TableBody = (props) => {

    const { products, avaliablesKeys } = useContext(TableContext)


    const filterListElements = filterAtributteList(avaliablesKeys, products)


    const listRenameKeys = filterListElements.map(element => renamePropertiesKeys(element))



    // const listTr = 

    // filterListElements.map((elementKey) => {
    //     // return (
    //     //     <tr className='table_rowBody'>
    //     //         <td className='table_columnBody table_columnBody--img'><img src={element.image} alt="" /></td>
    //     //         <div className="table_columnBody--section">
    //     //             <td className='table_columnBody'>{element.name}</td>
    //     //             <td className='table_columnBody table_columnBody--price'>{element.price}</td>
    //     //         </div>
    //     //         <TableComlumnOption  element={element}/>
    //     //     </tr>
    //     // )
    // })

    return (
        <tbody className='table_body'>
            {/* {listTr} */}
            {listRenameKeys[0] === undefined ? (<h1> ...cargando </h1>) :
                listRenameKeys[0].map(objectKey => {


                    return (
                        <tr className='table_rowBody'>

                            {
                                filterListElements.map(element => {
                                    // <tr className='table_rowBody'>
                                    if (objectKey.name === 'image') {
                                        return (
                                            <td className='table_columnBody table_columnBody--img'>
                                                <img src={element[objectKey.name]} alt="" />
                                            </td>
                                        )
                                    } else if (objectKey.name === 'id' || objectKey.name === 'type') {
                                        return
                                    } else {
                                        return (
                                            <td className='table_columnBody'>{element[objectKey.name]}</td>
                                        )
                                    }
                                })
                            }
                            <TableComlumnOption element={objectKey} />
                        </tr>

                    )
                })}
        </tbody>
    )
}

