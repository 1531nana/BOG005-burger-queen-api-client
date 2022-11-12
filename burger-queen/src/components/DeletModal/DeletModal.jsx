import { useContext } from "react"
// import TableContext from "../../context/TableContext"
import { makeRequestDelete } from "../../lib/requests"

export const BtnAbort = () => {
    return (
        <button>CANCELAR</button>
    )
}

    export const DeletModal = ({ element}) => {

        // const {onClose} = useContext(TableContext)
        // console.log('context delete ', products)


    return (
        <div>
            <h1>Eliminación</h1>
            <p>La información del producto no podrá ser recuperada</p>
            <p>¿Está seguro de eliminar el producto?</p>
            <button onClick={() => {
                console.log('delet ',element);
                makeRequestDelete('products', element.id)
                onClose()
                }}>ELIMINAR</button>
        </div>
    )
}
