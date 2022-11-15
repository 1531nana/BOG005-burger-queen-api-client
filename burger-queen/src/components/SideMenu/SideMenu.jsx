import "./style.scss"
import User from '../../assets/images/user.png'
import Exit from '../../assets/images/exit.png'
import Products from '../../assets/images/products.png'
import Users from '../../assets/images/users.png'
import Orders from '../../assets/images/orders.png'
import { logOut } from "../../lib/helpers"
import { Link} from "react-router-dom"
import { LogoutModal } from "./LogoutModal/LogoutModal"
import { Modals } from "../../Modals/Modals"
import { useModal } from "../../Modals/useModal"
import { BtnAbort } from "../Products/DeleteModalProduct/DeleteModalProduct"


export const ExitIcon = ({close}) => {
    return(
        <img onClick={close} src={Exit} alt="" className="sideMenu_exitMenu" />
    )
}

export const SideMenu = () => {

    const [isOpen, open, close] = useModal(false)

    return (
        <div className="sideMenu">

            <div className="sideMenu_userBox">
                <img src={User} alt="user" className="sideMenu_userBox--img" />
                <span className="sideMenu_userBox--name">Usuario</span>
            </div>

            <div className="sideMenu_menuBox">

                <div className="sideMenu_menuBox--items">
                    <img src={Products} alt="" className="sideMenu_menuBox--img" />
                    <Link to="/products"><span className="sideMenu_menuBox--text">Productos</span></Link>
                    
                </div>

                <div className="sideMenu_menuBox--items">
                    <img src={Users} alt="" className="sideMenu_menuBox--img" />
                    <Link to="/users"><span className="sideMenu_menuBox--text">Usuarios</span></Link>
                </div>

                <div className="sideMenu_menuBox--items">
                    <img src={Orders} alt="" className="sideMenu_menuBox--img" />
                    <span className="sideMenu_menuBox--text">Órdenes</span>
                </div>

            </div>
            <Modals 
            isOpen={isOpen}
            open={open}
            close={close}
            element={<span className="sideMenu_exit" >Cerrar Sesión</span>}
            content={ <LogoutModal logout={logOut} />}
            elementClose={< BtnAbort close={close} />}
            />
        </div>
    )
} 

//poner avatar
//<img src={algo || '../img/avatar.png'} alt="user" className="sideMenu_userBox--img" />
{/* <span className="sideMenu_userBox--name">{user.displayName || 'userName'}</span> */}