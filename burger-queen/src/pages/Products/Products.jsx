import "./style.scss"
import plus from '../../assets/images/plus.png'
import { Header } from "../../components/Header/Header";
import { Modals } from '../../Modals/Modals'
import { FormProduct } from "../../components/Products/FormProduct/FormProduct";
import { useProductsContext } from "../../context/ProductsContext";
import { ProductsTable } from "../../components/Products/ProductTable";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Products = () => {

    const { isOpenModal, openModal, closeModal } = useProductsContext()

    const [width, setWidth] = useState(window.innerWidth)
    const [productId, setProductId] = useState("")

    const params = useParams()

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        const paramProductId = params["*"]
        if(paramProductId !== "") {
            setProductId(paramProductId)
        } else {
           setProductId('')
        }
    },[params])


    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const title = productId !== '' ?  "Editar producto" : "Nuevo producto" 

    return (
        <div className="products">

            <Header />

            <div className="products_page">
                <div>

                    <h1 className="products_role">ADMINISTRADOR</h1>

                </div>

                <div className="products_container">

                    {
                        width < 1024 ?
                        //AGREGAR PROODUCTOS
                            <Modals
                                isOpen={isOpenModal}
                                close={closeModal}
                                open={openModal}
                                element=
                                {<div className="products_button">
                                    <img src={plus} alt="" className="products_button--plus" />
                                    <span className="products_button--text"> {title} </span>
                                </div>}
                                content={<FormProduct closeModal={closeModal} element={{}} />}
                            />
                            : <FormProduct element={{}} />
                    }

                    <ProductsTable />
                </div>
            </div>
        </div>
    )
}
