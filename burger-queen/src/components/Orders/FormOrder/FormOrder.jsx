import { useState } from "react";
import { useOrderContext } from "../../../context/OrderContext";
import { TableOrder } from "../TableOrder/TableOrder";
import "./style.scss";

export const FormOrder = () => {
	const { productsOrder, createOrder, setProductsOrder } = useOrderContext();
	const [client, setClient] = useState("");
	const dataUser = JSON.parse(localStorage.getItem("dataUser"));

	const handleClient = (e) => {
		setClient(e.target.value);
	};

	const dataOrder = {
		userId: dataUser.id,
		client: client,
		products: productsOrder,
		status: "pending",
		dateEntry: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString(
			"es-ES"
		)}`,
		totalTime: "00:00",
	};

	const sendOrder = async () => {
		await createOrder(dataOrder);
	};

	const abortOrder = () => {
		setClient("");
		setProductsOrder([]);
	};

	return (
		<form className="formOrder" onSubmit={sendOrder}>
			<h3 className="formOrder_text">Orden</h3>

			<div className="formOrder_clientContainer">
				<label className="formOrder_clientContainer--label" htmlFor="">
					Cliente
				</label>
				<input
					required
					onChange={handleClient}
					type="text"
					className="formOrder_clientContainer--input"
					value={client}
				/>
			</div>

			<TableOrder />

			<div className="formOrder_btnContainer">
				<button className="formOrder_btn " type="submit">
					ENVIAR PEDIDO
				</button>
				<button
					className="formOrder_btn formOrder_btn--abort"
					type="button"
					onClick={abortOrder}
				>
					CANCELAR PEDIDO
				</button>
			</div>
		</form>
	);
};
