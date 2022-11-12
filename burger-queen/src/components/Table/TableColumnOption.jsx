import edit from '../../assets/images/edit.png'
import delet from '../../assets/images/delete.png'
import { Modals } from '../../Modals/Modals'
import { BtnAbort, DeletModal } from '../DeletModal/DeletModal'
import { ModalAddProduct } from '../FormModals/FormModalProduct'
import { useState } from 'react'


    export const TableComlumnOption = ({element}) => {

    
    // console.log('producto que entra en la coluna de opciones >>>', element)
    const [editElement, setEditElement] = useState(false)

    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody'>
                 <Modals element={ <img className={`table_columnBody--option `} 
                 src={edit} alt="Edit" /> }
                 content={<ModalAddProduct element={element} />}
                //  content={<ModalAddProduct element={element} />}
                 />
            </td>
            <td className='table_columnBody'>
                <Modals 
                element={ <img className='table_columnBody--option' src={delet} alt="Delete"  
                onClick={() => console.log('quiere eliminar este elemnto') }/> }
                content={<DeletModal element={element}  />}
                elementClose={<BtnAbort />}
                />
            </td>
        </tr>
    )
}

//makeRequestDelete('products', element.id)