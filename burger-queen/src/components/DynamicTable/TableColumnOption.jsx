import edit from '../../assets/images/edit.png'
import delet from '../../assets/images/delete.png'
import { Modals } from '../../Modals/Modals'
import { BtnAbort } from '../Products/DeleteModalProduct/DeleteModalProduct'
import { useModal } from '../../Modals/useModal'
import { ModalsForm } from '../../Modals/ModalForm/Modals'

export const TableColumnOption = ({ element, Add, Delete }) => {

    const [isOpen, open, close] = useModal(false)
    const [isOpenDelete, openDelete, closeDelete] = useModal(false)

    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody'>
                <ModalsForm
                    isOpen={isOpen}
                    open={open}
                    close={close}
                    element={<img className={`table_columnBody--option  `}
                        src={edit} alt="Edit" value={'edit'} />}
                    content={<Add closeModal={close} element={element} />}
                />
            </td>
            <td className='table_columnBody'>
                <Modals
                    isOpen={isOpenDelete}
                    open={openDelete}
                    close={closeDelete}
                    element={<img className='table_columnBody--option' src={delet} alt="Delete"
                    />}
                    content={<Delete element={element} closeModal={closeDelete} />}
                    elementClose={< BtnAbort close={closeDelete} />}
                />
            </td>
        </tr>
    )
}

//makeRequestDelete('products', element.id)