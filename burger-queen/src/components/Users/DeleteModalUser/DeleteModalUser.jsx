import { useUsersContext } from "../../../context/UsersContext";
import "./style.scss";

export const BtnAbort = ({ close }) => {
	return (
		<button className="deleteModal_btnAbort" onClick={close}>
			CANCELAR
		</button>
	);
};

export const DeleteModalUser = ({ element, closeModal }) => {
	const { deleteUser } = useUsersContext();

	const handleDelete = async () => {
		await deleteUser(element.id);
		closeModal();
	};

	return (
		<main className="deleteModal">
			<section className="deleteModal_container">
				<h1 className="deleteModal_title">Eliminación</h1>
				<p className="deleteModal_warning">
					La información del usuario no podrá ser recuperada
				</p>
				<p className="deleteModal_question">
					¿Está seguro de eliminar el usuario?
				</p>
				<button className="deleteModal_btnDelete" onClick={handleDelete}>
					ELIMINAR
				</button>
			</section>
		</main>
	);
};
