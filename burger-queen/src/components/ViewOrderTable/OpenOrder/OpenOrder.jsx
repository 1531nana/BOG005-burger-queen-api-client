import unfold from '../../../assets/images/menuPoints.png'
import delet from '../../../assets/images/delete.png'
import { useEffect, useState } from 'react'
import { Modals } from '../../../Modals/Modals'
import { useModal } from '../../../Modals/useModal'
import { BtnAbortOrder } from '../DeletModalOrder/DeleteModalOrder'
import './style.scss';

export const OpenOrder = ({ element, Add, Delete }) => {

    const [isOpen, open, close] = useModal(false)
    const [isOpenDelete, openDelete, closeDelete] = useModal(false)
    const dataUser = JSON.parse(localStorage.getItem("dataUser"))

    const [width, setWidth] = useState(window.innerWidth)

    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }
    
    
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <tr className='table_rowBodyOpt'>
            <td className='table_columnBody'>
                {
                    // width < 1024 ?

                        <Modals
                            isOpen={isOpen}
                            open={open}
                            close={close}
                            element={<img className={`table_columnBody--option  `}
                                src={unfold} alt="Edit" value={'unfold'} />}
                            content={<Add closeModal={close} element={element} />}
                        /> 
                        // : <img className={`table_columnBody--option  `}
                        // src={unfold} alt="Edit" value={'edit'} onClick={open} />
                }

            </td>
            {
            dataUser.role !== 'Meser@' ? '' : 
            <td className='table_columnBody'>
                <Modals
                    isOpen={isOpenDelete}
                    open={openDelete}
                    close={closeDelete}
                    element={<img className='table_columnBody--option' src={delet} alt="Delete"
                    />}
                    content={<Delete element={element} closeModal={closeDelete} />}
                    elementClose={< BtnAbortOrder close={closeDelete} />}
                />
            </td>
            }
        </tr>
    )


}

