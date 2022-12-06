import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { getProducts } from "../lib/requests";

const WaiterContext = createContext();

const WaiterProvider = ({children}) => {

    const [products, setProducts] = useState([])

    async function getListProducts() {
        const dataProducts = await getProducts('products')
        setProducts(dataProducts);
    }

    useEffect(() => {
        getListProducts();
    }, [])

    const data = {
        products,
    }
    
    console.log('waiterContext >>>>> ',data);

    return <WaiterContext.Provider value={data}>{children}</WaiterContext.Provider>

}

const useWaiterContext = () => useContext(WaiterContext)

export { WaiterProvider, useWaiterContext }
