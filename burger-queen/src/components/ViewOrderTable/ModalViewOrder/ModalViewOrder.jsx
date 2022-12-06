import { useViewOrderContext } from "../../../context/ViewOrderContext";
import "./style.scss";

export const ModalViewOrder = ({element}) => {
  
  const {viewOrder} = useViewOrderContext()

  return (
    <table className="modalViewOrder">
      <thead className="modalViewOrder_header">
        <tr className="modalViewOrder_headerRow">
          <th className="modalViewOrder_headerColumn">Cantidad</th>
          <th className="modalViewOrder_headerColumn">Productos</th>
        </tr>
      </thead>
      <tbody className='modalViewOrder_body'>
        {
          viewOrder.map(order => {
            if(order.id === element.id){
              return(
                order.products.map((product, i) => {
                   return(
                    <tr className='modalViewOrder_rowBody' key={i}>
                      <td className='modalViewOrder_columnBody'>{product.qty}</td>
                      <td className='modalViewOrder_columnBody'>{product.product.name}</td>
                    </tr>
                   )
                })
                 )
            }
          })
        }
      </tbody>

      <tfoot className='modalViewOrder_foot'>
        {
          viewOrder.map(order => {
            if(order.id === element.id){
              return(
                <tr className='modalViewOrder_footRow'>
                <th>Total</th>
                <th>{order.products.reduce((previous, product) => previous + parseInt(product.qty) * product.product.price, 0)}</th>
            </tr>
              )
            }
          })
        }
      </tfoot>
    </table>
  );
};
