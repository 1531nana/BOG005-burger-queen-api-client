import { useEffect } from "react"
import { useState } from "react"
import editOrder from '../../../../assets/images/EditOrder.png'
import { useOrderContext } from "../../../../context/OrderContext"
import { Modals } from "../../../../Modals/Modals"
import { useModal } from "../../../../Modals/useModal"
import { FormOrder } from "../../../Orders/FormOrder/FormOrder"
import './style.scss'


export const QuantityProducts = () => {

    const { productsOrder } = useOrderContext();
    const [productsLength, setProductsLength] = useState(0);
    const [isOpen, open, close] = useModal(false)
    const [width, setWidth] = useState(window.innerWidth)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        !productsOrder ? '' :
        setProductsLength(
            productsOrder.reduce((previous, product) => previous + parseInt(product.qty), 0)
        )
    }, [productsOrder])
    

   return productsLength === 0 ? '' : 
    ( 
        
        // width < 1024 ?

            <Modals
                isOpen={isOpen}
                open={open}
                close={close}
                element={<div className="editOrder"> <img className="editOrder_img" src={editOrder} alt="" /> 
               <div className="editOrder_length"><h4 className="editOrder_length--quantity">{productsLength}</h4></div> </div>}
               content={< FormOrder  />}
            /> 
            // : <div className="editOrder"> <img className="editOrder_img" src={editOrder} alt="" /> 
            //  <div className="editOrder_length"><h4 className="editOrder_length--quantity">{productsLength}</h4></div> </div>
    )
}