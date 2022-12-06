import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { makeRequestDelete, makeRequestGet, makeRequestPatch, makeRequestPost } from "../lib/requests";
import { TableColumnOption } from "../components/DynamicTable/TableColumnOption";
import { useModal } from "../Modals/useModal";
import { FormUser } from "../components/Users/FormUser/FormUser";
import { DeleteModalUser } from "../components/Users/DeleteModalUser/DeleteModalUser";
import { useNavigate } from "react-router-dom";

const UsersContext = createContext();



//UsersProvider (mostrar)
const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([])

    const [selectedUser, setSelectedUser] = useState({})

    const navigate = useNavigate()

    //no hacer nunca mas
    const columnKeys = ['Nombre','Correo', 'Rol', 'Opciones']
    //MODAL PARA CREAR
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const avaliablesKeys = [
        {
            key: "name"
        },
        {
            key: "email"
        },
        {
            key: "role"
        },
        { key: null, componente: (element) => <TableColumnOption type="users" 
        element={element} Add={FormUser} Delete={DeleteModalUser} 
        setSelectedUser={setSelectedUser} selectedUser={selectedUser}/>}
    ]

    //actualizar
    async function getUsers() {
        const data = await makeRequestGet("users")
        setUsers(data);
        console.log(data)
    }

    //crear
    async function createUser(data) {
        await makeRequestPost("users", data, true)
        await getUsers()
        closeModal()
        console.log('usuario que voy a enviar', data);
    }
  
    //editar
    async function updateUser(data) {
        await makeRequestPatch("users", data.id, data)
        await getUsers()
        navigate('/users')
    }

    //eliminar
    async function deleteUser(id){
        await makeRequestDelete("users", id)
        await getUsers()
    }


    useEffect(() => {
        getUsers();
    }, [])

    const data = { 
        users, 
        avaliablesKeys, 
        createUser,
        deleteUser,
        setSelectedUser,
        selectedUser,
        updateUser,
        isOpenModal, 
        openModal,
        closeModal,
        columnKeys,
    }

    console.log("User Context >>>> ", data)

    return <UsersContext.Provider value={data}>{children}</UsersContext.Provider>

}

const useUsersContext = () => useContext(UsersContext)

export { UsersProvider, useUsersContext }