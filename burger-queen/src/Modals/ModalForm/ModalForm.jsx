import './style.scss'
import ReactDOM from 'react-dom'
import abort from '../../assets/images/abort.png'

export const ModalForm = ({children, isOpen, closeModal}) => {

    const handleModalContainerClick = (e) => e.stopPropagation();

    return ReactDOM.createPortal(
        <article className={`modalForm ${isOpen && 'is-open'} `} onClick={closeModal}>
            <div className="modalForm-container" onClick={handleModalContainerClick}>
                {/* <button className="modal-close" onClick={closeModal}>X</button> */}
                <img className="modalForm-close" onClick={closeModal} src={abort} alt="btnAbort" />
                {children} {/* contenido que renderiza el componente */}
            </div>
        </article>,
        document.getElementById('modal')
    )
}