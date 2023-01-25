import { useViewOrderContext } from "../../../context/ViewOrderContext";

export const BtnAbortOrder = ({ close }) => {
	return (
		<button className="deleteModal_btnAbort" onClick={close}>
			CANCELAR
		</button>
	);
};

export const DeleteModalOrder = ({ element, closeModal }) => {
	const { deleteOrder } = useViewOrderContext();

	const handleDelete = async () => {
		return await deleteOrder(element.id), closeModal();
	};

	return (
		<main className="deleteModal">
			<section className="deleteModal_container">
				<h1 className="deleteModal_title">Eliminación</h1>
				<p className="deleteModal_warning">
					La información de la orden no podrá ser recuperada
				</p>
				<p className="deleteModal_question">
					¿Está seguro de eliminar la orden?
				</p>
				<button className="deleteModal_btnDelete" onClick={handleDelete}>
					ELIMINAR
				</button>
			</section>
		</main>
	);
};
