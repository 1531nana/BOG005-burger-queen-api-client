import { useProductsContext } from "../../context/ProductsContext"
import { Table } from "../DynamicTable/Table"

function ProductsTable(){

    const {products, avaliablesKeys, columnKeys} = useProductsContext()

    return(
        <Table data={products} columns={avaliablesKeys} columnKeys={columnKeys}></Table>
    )
}

export { ProductsTable }