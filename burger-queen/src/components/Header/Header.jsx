import "./style.scss";
import logo from "../../assets/images/logoHeader.png";
import menu from "../../assets/images/menu.png";
import user from "../../assets/images/user.png";
import { ExitIcon, SideMenu } from "../SideMenu/SideMenu";
import { ModalsMenu } from "../../Modals/ModalMenu/ModalsMenu";
import { useModal } from "../../Modals/useModal";
import { QuantityProducts } from "../Waiter/TakesOrder/QuantityProducts/QuantityProducts";
import { useLocation } from "react-router-dom";

export const Header = () => {
	const [isOpen, open, close] = useModal(false);
	const dataUser = JSON.parse(localStorage.getItem("dataUser"));
	const location = useLocation();

	return (
		<header className="header">
			<ModalsMenu
				isOpen={isOpen}
				open={open}
				close={close}
				element={<img src={menu} alt="" className="header_menu" />}
				content={<SideMenu />}
				elementClose={<ExitIcon close={close} />}
			/>
			<img src={logo} alt="" className="header_logo" />
			{dataUser.role !== "Meser@" ? (
				""
			) : location.pathname == "/takes-orders" ? (
				<QuantityProducts />
			) : (
				""
			)}
			<div className="header_user">
				<img src={user} alt="" className="header_user--img" />
				<span className="header_user--name">{dataUser.name}</span>
			</div>
		</header>
	);
};
