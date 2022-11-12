import "./style.scss"
import logo from '../../assets/images/logoHeader.png'
import menu from '../../assets/images/menu.png'
import user from '../../assets/images/user.png'
import { ExitIcon, SideMenu } from "../SideMenu/SideMenu"
import { ModalsMenu } from "../../Modals/ModalMenu/ModalsMenu"

export const Header = () => {

    return (
        <header className="header">
            <ModalsMenu 
            element={<img src={menu} alt="" className="header_menu" />}
            content={<SideMenu />}
            elementClose={< ExitIcon />}
            />
            <img src={logo} alt="" className="header_logo" />
            <div className="header_user">
                <img src={user} alt="" className="header_user--img" />
                <span className="header_user--name">{localStorage.getItem("User")}</span>
                {/* <span className="header_user--name">Nombre de Usuario</span> */}
            </div>

        </header>
    )
}