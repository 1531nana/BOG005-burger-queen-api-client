import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import { DeleteModalProduct } from "../components/Products/DeleteModalProduct/DeleteModalProduct";
import { TableColumnOption } from "../components/DynamicTable/TableColumnOption";
import { FormProduct } from "../components/Products/FormProduct/FormProduct";
import { getProducts, makeRequestDelete, makeRequestPatch, makeRequestPost } from "../lib/requests";
import { useModal } from "../Modals/useModal";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext();

function BloqueProductPrice(element) {

    return (
        <div className="table_columnBody--section">
            <td className='table_columnBody'>{element.name}</td>
            <td className='table_columnBody table_columnBody--price'>
                {element.price}</td>
        </div>
    )

}

//ProductsProvider (mostrar)
const ProductsProvider = ({ children }) => {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    //no hacer nunca mas
    const columnKeys = ['Imagen', 'Nombre', 'Precio', 'Opciones']
    //MODAL PARA CREAR
    const [isOpenModal, openModal, closeModal] = useModal(false);

    const avaliablesKeys = [
        {
            key: "image",
            componente: (element) => { return <td className='table_columnBody table_columnBody--img'><img src={element.image} alt="" className="table_img"/></td> }
        },
        {
            key: null, componente: BloqueProductPrice
        },
        { key: null, componente: (element) =>
            <TableColumnOption type="products" element={element}
             Add={FormProduct} Delete={DeleteModalProduct} /> }
    ]

    async function getListProducts() {
        const dataProducts = await getProducts('products')
        setProducts(dataProducts);
    }

    async function createProduct(data) {
        await makeRequestPost("products", data, true)
        await getListProducts()
        closeModal()
    }
    
    async function updateProduct(id, data) {
        await makeRequestPatch("products", id, data)
        await getListProducts()
        navigate('/products')
    }

    async function deleteProduct(id){
        await makeRequestDelete("products", id)
        await getListProducts()
    }

    useEffect(() => {
        getListProducts();
    }, [])

    const data = { 
        deleteProduct, 
        products, 
        avaliablesKeys, 
        updateProduct, 
        createProduct, 
        isOpenModal, 
        openModal,
        closeModal,
        columnKeys,
    }

    console.log("produtContext >>>> ", data)

    return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>

}

const useProductsContext = () => useContext(ProductContext)

export { ProductsProvider, useProductsContext }