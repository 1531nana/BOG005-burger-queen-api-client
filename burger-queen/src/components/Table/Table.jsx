import "./style.scss"
import { filterAtributteList } from "../../lib/helpers";
import {TableBody} from "./TableBody";
import {TableHeader} from "./TableHeader";
import { useContext } from "react";
import {TableContext} from "../../context/TableContext";


export const Table = (props) => {
    
    const {listFilterKeys} = props
    const products = useContext(TableContext)
    console.log('useContextTable', products)
 
    // const filterListElements = filterAtributteList(avaliablesKeys, products)
    const filterListElements = filterAtributteList(listFilterKeys, products)

    return(
        <table className="table">
            <TableHeader headerColumns ={avaliablesKeys}/>
            <TableBody listElements={filterListElements} />
        </table>
    )
}

// cellspacing="0"  para poner y quitar espacio entre celdas de la tabla