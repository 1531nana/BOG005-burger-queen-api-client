import { useEffect } from "react";
import { createContext, useState } from "react";
import { getProducts } from "../lib/requests";

const TableContext = createContext();

const TableProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const avaliablesKeys = ['image', 'name', 'price', 'id', 'type']
    
    async function getListProducts() {
        const dataProducts = await getProducts('products')
        setProducts(dataProducts);
    }

    useEffect(() => {
        getListProducts();
    }, [])

    const onClose = getListProducts

        const data = {products, avaliablesKeys, onClose}
    
        return <TableContext.Provider value={data}>{children}</TableContext.Provider>
    
}

export {TableProvider}
export default TableContext;