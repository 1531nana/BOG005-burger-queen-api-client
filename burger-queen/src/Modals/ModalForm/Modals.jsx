import { ModalForm } from "./ModalForm"

export const ModalsForm = ({isOpen, open, close, element, content, elementClose}) =>{

    return(
        <div>
            <div onClick={open}>
                {element}
            </div>
            <ModalForm isOpen={isOpen} closeModal={close}>
                {content}
                {elementClose}
            </ModalForm>
        </div>
    )
}