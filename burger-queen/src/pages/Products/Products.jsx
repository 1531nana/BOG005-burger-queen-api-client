import "./style.scss"
import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
import { FormProduct} from "../../components/Products/FormProduct/FormProduct";
import { useProductsContext } from "../../context/ProductsContext";
import { ProductsTable } from "../../components/Products/ProductTable";
import { ModalsForm } from "../../Modals/ModalForm/Modals";

export const Products = () => {

    const { isOpenModal, openModal, closeModal} = useProductsContext()

    return (
        <div className="products">

            <Header />

            <div className="products_page">

                <h1 className="products_role">ADMINISTRADOR</h1>
                <div className="products_container">
                    <ModalsForm
                        isOpen={isOpenModal}
                        close={closeModal}
                        open={openModal}
                        element =
                        {<div className="products_button">
                            <img src={plus} alt="" className="products_button--plus" />
                            <span className="products_button--text"> Agregar Producto </span>
                        </div>}
                        content={<FormProduct element={{}}/>}
                    />
                    <ProductsTable/>
                </div>
            </div>
        </div>
    )
}
