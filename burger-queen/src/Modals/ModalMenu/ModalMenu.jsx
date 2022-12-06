import ReactDOM from 'react-dom'
import './style.scss'

export const ModalMenu = ({children, isOpen, closeModal}) => {

    const handleModalContainerClick = (e) => e.stopPropagation();

    return ReactDOM.createPortal(
        <article className={`modalMenu ${isOpen && 'is-open'} `} onClick={closeModal}>
            <div className="modalMenu-container" onClick={handleModalContainerClick}>
                {children} {/* contenido que renderiza el componente */}
            </div>
        </article>,
        document.getElementById('modal')
    )
}