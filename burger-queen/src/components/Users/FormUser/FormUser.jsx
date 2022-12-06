import { useEffect, useState } from "react"
import "./style.scss"
import { useUsersContext } from "../../../context/UsersContext"
import { useNavigate, useParams } from "react-router-dom"
import { makeRequestGet } from "../../../lib/requests"

export const FormUser = ({ element, closeModal }) => {

    const { createUser, updateUser } = useUsersContext()

    const params = useParams()

    const navigate = useNavigate()

    const [user, setUser] = useState(element || {})

    const isCreating = user?.id ? false : true

    useEffect(()=>{
        const paramUserId = params["*"]
        if(paramUserId != '') getUserById(paramUserId)
       
        else { 
            const emptyObject = {}
            setUser({...emptyObject, role: 'Seleccionar'})
        }
    },[params])

    const getUserById = async (id) => {
        const data = await makeRequestGet(`users/${id}`)
        setUser(data)
    }

    const handleInputsChange = async (e) => {

        const key = e.target.name
        let newObjKey = {}
        newObjKey[key] = e.target.value

        setUser({ ...user, ...newObjKey })
    }

    const navigateAbort = () => {
        navigate('/users')
        setUser({})
        if (typeof closeModal === "function") closeModal()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Usuario enviar >>', user)

        if (user.id === undefined) {

            await createUser({...user, id: new Date().getTime()})

            const emptyObject = {}
            setUser({...emptyObject, role: 'Seleccionar', password:''})

        } else {

            await updateUser(user)
            if(typeof closeModal === "function") closeModal()
            setUser({})
        }

    }


    return (
        <div className="formUser">
            <form onSubmit={handleSubmit} className="formUser_form">

                <div className="formUser_title">

                    <p className="formUser_title--text">Usuario</p>

                </div>

                <div className="formUser_options">

                    <label htmlFor="userName">Nombre</label>
                    <input onChange={(event) => handleInputsChange(event)} type="text" name="name"
                        className="formUser_options--input" value={user.name || ""} required />

                    <label htmlFor="userEmail">Correo</label>
                    <input onChange={(event) => handleInputsChange(event, "email")} type="text" name="email"
                        className="formUser_options--input" value={user.email || ""} required />

                    <label htmlFor="userRole">Rol</label>
                    <select onChange={(event) => handleInputsChange(event, "role")} name="role"
                        className="formUser_options--input" value={user.role} required>
                        <option selected='selected' >Seleccionar</option>
                        <option >admin</option>
                        <option >Jefe Cocina</option>
                        <option >Meser@</option>
                    </select>

                    {
                        isCreating &&
                        <>
                            <label htmlFor="userPassword">Contraseña</label>
                            <input onChange={(event) => handleInputsChange(event, "password")} type="password" name="password"
                                className="formUser_options--input" value={user.password} required />
                        </>
                    }

                </div>
                <div className="formUser_containerBtns">

                    <button className="formUser_btn" >Guardar</button>
                    <button className="formUser_btn formUser_btn--abort" type="button" onClick={() => navigateAbort()}>Cancelar</button>
                </div>
            </form>
        </div>
    )
}