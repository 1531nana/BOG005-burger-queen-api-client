import "./style.scss"
import { filterAtributteList } from "../../lib/helpers";
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";
import { useContext } from "react";
import {TableContext} from "../../context/TableContext";


export const Table = (props) => {
    
<<<<<<< HEAD
    const {listFilterKeys} = props
    const products = useContext(TableContext)
    console.log('useContextTable', products)
 
    // const filterListElements = filterAtributteList(avaliablesKeys, products)
    const filterListElements = filterAtributteList(listFilterKeys, products)
=======
    const {products, avaliablesKeys} = useContext(TableContext)
    
    // console.log('products ', products);

    const filterListElements = filterAtributteList(avaliablesKeys, products)
    // const {listFilterKeys, listElements, onClose} = props
    // const filterListElements = filterAtributteList(listFilterKeys, listElements)
>>>>>>> 07b5f794457d8a520f1bd6880f62ae8e0a3ee80c

    return(
        <table className="table">
            <TableHeader headerColumns ={avaliablesKeys}/>
            <TableBody listElements={filterListElements} />
        </table>
    )
}

// cellspacing="0"  para poner y quitar espacio entre celdas de la tabla