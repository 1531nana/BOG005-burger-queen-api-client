import './style.scss';
import { Header } from "../../../components/Header/Header"
import { TableWaiter } from '../../../components/Waiter/TakesOrder/TakesOrder';


export const TakesOrder = () => {
    
    return ( 
    <div className="takesOrder">

        <Header />

            <div >
                <h1 className="takesOrder_role" >MESERO</h1>
            </div>

       <TableWaiter />
       
    </div> 
    )
}