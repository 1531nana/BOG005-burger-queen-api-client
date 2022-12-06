import { useUsersContext } from "../../context/UsersContext"
import { Table } from "../DynamicTable/Table"

function UsersTable(){

    const {users, avaliablesKeys, columnKeys} = useUsersContext()

    //table
    return(
        <Table data={users} columns={avaliablesKeys} columnKeys={columnKeys} ></Table>
    )
}

export { UsersTable }