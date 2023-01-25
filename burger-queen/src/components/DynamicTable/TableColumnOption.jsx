import edit from "../../assets/images/edit.png";
import delet from "../../assets/images/delete.png";
import { Modals } from "../../Modals/Modals";
import { BtnAbort } from "../Products/DeleteModalProduct/DeleteModalProduct";
import { useModal } from "../../Modals/useModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TableColumnOption = ({ element, Add, Delete, type }) => {
	const [isOpen, open, close] = useModal(false);
	const [isOpenDelete, openDelete, closeDelete] = useModal(false);
	const navigate = useNavigate();

	const [width, setWidth] = useState(window.innerWidth);

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	const handleNavigateEdit = () => navigate(`/${type}/${element.id}`);

	const handleOpenModal = () => {
		handleNavigateEdit();
		open();
	};

	return (
		<tr className="table_rowBodyOpt">
			<td className="table_columnBody">
				{width < 1024 ? (
					<Modals
						isOpen={isOpen}
						open={handleOpenModal}
						close={close}
						element={
							<img
								className={`table_columnBody--option  `}
								src={edit}
								alt="Edit"
								value={"edit"}
							/>
						}
						content={<Add closeModal={close} element={element} />}
					/>
				) : (
					<img
						className={`table_columnBody--option  `}
						src={edit}
						alt="Edit"
						value={"edit"}
						onClick={handleNavigateEdit}
					/>
				)}
			</td>
			<td className="table_columnBody">
				<Modals
					isOpen={isOpenDelete}
					open={openDelete}
					close={closeDelete}
					element={
						<img
							className="table_columnBody--option"
							data-id={element.id}
							src={delet}
							alt="Delete"
						/>
					}
					content={<Delete element={element} closeModal={closeDelete} />}
					elementClose={<BtnAbort close={closeDelete} />}
				/>
			</td>
		</tr>
	);
};
