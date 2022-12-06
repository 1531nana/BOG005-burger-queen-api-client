import "./style.scss"
import logo from "../../assets/images/logo.png"
import background from "../../assets/images/BackgroundLogin.jpg"
import { LoginForm } from "../../components/Login/LoginForm"

export function Login () {

    return (
        <div className="loginPage">
            <img className="loginPage_background" src={background} />
            <div className="loginPage_container">
                <img className="loginPage_logo" src={logo} />
                <LoginForm />
            </div>

        </div>
    )
}
