import { useViewOrderContext } from "../../context/ViewOrderContext"
import { Table } from "../DynamicTable/Table"

export const ViewOrderTable = () => {

    const { viewOrder, avaliablesKeys, columnKeys } = useViewOrderContext()

    return(
        <Table data={viewOrder} columns={avaliablesKeys} columnKeys={columnKeys}></Table>
    )

}