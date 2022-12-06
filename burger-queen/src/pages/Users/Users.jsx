import "./style.scss"
import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
import { Modals } from '../../Modals/Modals'
import { UsersTable } from "../../components/Users/UsersTable";
import { useUsersContext } from "../../context/UsersContext";
import { FormUser } from "../../components/Users/FormUser/FormUser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Users = () => {

    const { isOpenModal, openModal, closeModal } = useUsersContext()

    const [width, setWidth] = useState(window.innerWidth)

    const [userId, setUserId] = useState("")

    const params = useParams()

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        const paramProductId = params["*"]
        if(paramProductId !== '') setUserId(paramProductId)
        else setUserId('')
    },[params])

    const title = userId ?  "Editar usuario" : "Nuevo usuario" 


    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <div className="users">

            <Header />

            <div className="users_page">

                <div>

                    <h1 className="users_role">ADMINISTRADOR</h1>

                </div>

                <div className="users_container">

                    {
                        width < 1024 ?
                            <Modals
                                isOpen={isOpenModal}
                                close={closeModal}
                                open={openModal}
                                element=
                                {<div className="products_button">
                                    <img src={plus} alt="" className="products_button--plus" />
                                    <span className="products_button--text">{title} </span>
                                </div>}
                                content={<FormUser closeModal={closeModal} element={{}} />}
                            />

                            : <FormUser /> 
                    }
         
                    <UsersTable />
                </div>
            </div>
        </div>
    )
}
