import { ModalMenu } from "./ModalMenu";

export const ModalsMenu = ({isOpen, open, close, element, content, elementClose}) =>{

    return(
        <div>
            <div onClick={open}>
                {element}
            </div>
            <ModalMenu isOpen={isOpen} closeModal={close}>
                {content}
                {elementClose}
            </ModalMenu>
        </div>
    )
}