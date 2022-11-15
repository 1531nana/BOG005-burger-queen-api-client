import { ModalPortal } from "./ModalPortal"

export const Modals = ({isOpen, open, close, element, content, elementClose}) =>{

    return(
        <div>
            <div onClick={open}>
                {element}
            </div>
            <ModalPortal isOpen={isOpen} closeModal={close}>
                {content}
                {elementClose}
            </ModalPortal>
        </div>
    )
}