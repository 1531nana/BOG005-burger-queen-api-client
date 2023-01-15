import { useState } from "react";
import { useViewOrderContext } from "../../../context/ViewOrderContext";

export const StatusOrder = ({ element }) => {
	const dataUser = JSON.parse(localStorage.getItem("dataUser"));
	const [checked, setChecked] = useState(true);
	const { changeStatusDelivered } = useViewOrderContext();

	const timeProcessed = () => {
		let string = [];
		const hour = element.dateEntry
			.slice(-8, element.dateEntry.length)
			.split(":");
		const hourProcessed = new Date().toLocaleTimeString("es-ES").split(":");
		for (let i = 0; i < hour.length; i++) {
			string.push(Math.abs(parseInt(hourProcessed[i]) - parseInt(hour[i])));
		}
		const timeAll = string.toString().replaceAll(",", ":");
		return timeAll;
	};

	const handleChange = async () => {
		setChecked(!checked);

		if (dataUser.role === "Jefe Cocina" && checked === true) {
			if (element.status === "pending") {
				await changeStatusDelivered(element.id, {
					status: "ready",
					totalTime: timeProcessed(),
					dateProcessed: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString(
						"es-ES"
					)}`,
				});
			} else if (element.status === "ready") {
				await changeStatusDelivered(element.id, { status: "pending" });
			}
		} else if (dataUser.role === "Meser@" && checked === true) {
			if (element.status === "ready") {
				await changeStatusDelivered(element.id, { status: "delivered" });
			} else if (element.status === "delivered") {
				await changeStatusDelivered(element.id, { status: "ready" });
			}
		}
	};

	return (
		<>
			{dataUser.role !== "admin" && (
				<input type="checkbox" value={checked} onChange={handleChange} />
			)}
		</>
	);
};
