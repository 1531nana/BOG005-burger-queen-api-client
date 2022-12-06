import './style.scss'
import { BoxQuantity } from '../BoxQuantity/BoxQuantity';
import { useOrderContext } from '../../../../context/OrderContext';

export const CardProducts = ({element}) => {

        const {addItemToOrder, deleteItemToOrder, productsOrder} =  useOrderContext()

        return(
            <div className="cardProduct"  >
                <div className="cardProduct_info" onClick={() => addItemToOrder(element)}>
                    <img className="cardProduct_info--img" src={element.image} alt="" />
                    <h4 className='cardProduct_info--name'>{element.name}</h4>
                    <h4 className='cardProduct_info--name'>${element.price}</h4>
                </div>
                {
                        productsOrder.map(ele => { 
                            if(element.id === ele.product.id){
                                return(
                                    < BoxQuantity 
                                    element={ele.qty}
                                    substract={() => deleteItemToOrder(element)} 
                                    add={ () => addItemToOrder(element)}/>
                                )
                            } else {
                                return ''
                            }
                            })
                }
            </div>
        
            )
}