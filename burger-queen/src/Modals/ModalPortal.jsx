import './style.scss'
import ReactDOM from 'react-dom'
import abort from '../assets/images/closeModal.png'


export const ModalPortal = ({children, isOpen, closeModal}) => {

    const handleModalContainerClick = (e) => e.stopPropagation();

    return ReactDOM.createPortal(
        <article className={`modal ${isOpen && 'is-open'} `} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                {/* <button className="modal-close" onClick={closeModal}>X</button> */}
                <img className="modal-close" onClick={closeModal} src={abort} alt="btnAbort" />
                {children} {/* contenido que renderiza el componente */}
            </div>
        </article>,
        document.getElementById('modal')
    )
}