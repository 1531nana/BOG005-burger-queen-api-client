import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequestPost } from "../../lib/requests";

export const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [postResult, setPostResult] = useState([]);
  
  /* Cambio de rutas*/
  const navigate = useNavigate(); 

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

      const dataLogin = await makeRequestPost('login', data)
      if(dataLogin !== null){
        const token = dataLogin.accessToken
        window.localStorage.setItem("loginToken", token);
        window.localStorage.setItem("User", data.email);
        navigate('/products')
      }
      else{
        alert('Validación incorrecta, intenta nuevamente');
      }
    
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
}

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
}

  return (
    <form onSubmit={handleSubmit} className="loginPage_form">
      <input onChange={handleEmailChange} type="email" name="email" className="loginPage_input" placeholder="Correo" value={email}/>
      <input onChange={handlePasswordChange} type="password" name="password" className="loginPage_input" placeholder="Contraseña" value={password}/>
      <button className="loginPage_btn">Iniciar Sesión</button>
    </form>
  );
};


