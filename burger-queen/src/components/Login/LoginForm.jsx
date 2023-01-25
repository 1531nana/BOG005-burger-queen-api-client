import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeRequestPost } from "../../lib/requests";

export const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function handleSubmit(event) {
		event.preventDefault();

		const data = {
			email: email,
			password: password,
		};

		const dataLogin = await makeRequestPost("login", data);
		if (dataLogin !== null) {
			const token = dataLogin.accessToken;
			window.localStorage.setItem("dataUser", JSON.stringify(dataLogin.user));
			window.localStorage.setItem("loginToken", token);
			window.localStorage.setItem("User", data.email);

			const dataUser = JSON.parse(localStorage.getItem("dataUser"));
			if (dataUser.role === "admin") {
				navigate("/products");
			} else if (dataUser.role === "Meser@") {
				navigate("/takes-orders");
			} else {
				navigate("/view-orders");
			}
		} else {
			alert("Validación incorrecta, intenta nuevamente");
		}
	}

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="loginPage_form">
			<input
				onChange={handleEmailChange}
				type="email"
				name="email"
				className="loginPage_input"
				placeholder="Correo"
				value={email}
				data-testid="login-email-input"
			/>

			<input
				onChange={handlePasswordChange}
				size="6"
				type="password"
				name="password"
				className="loginPage_input"
				placeholder="Contraseña"
				value={password}
				data-testid="login-password-input"
			/>

			<button className="loginPage_btn">Iniciar Sesión</button>
		</form>
	);
};
