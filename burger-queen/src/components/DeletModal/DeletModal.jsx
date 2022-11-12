<<<<<<< HEAD
import { useContext } from "react"
// import TableContext from "../../context/TableContext"
import { makeRequestDelete } from "../../lib/requests"
=======
import { useContext } from "react";
import TableContext from "../../context/TableContext";
import { makeRequestDelete } from "../../lib/requests";
>>>>>>> 07b5f794457d8a520f1bd6880f62ae8e0a3ee80c

export const BtnAbort = () => {
  return <button>CANCELAR</button>;
};

export const DeletModal = ({ element }) => {
  const { onClose } = useContext(TableContext);

<<<<<<< HEAD
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
=======
  return (
    <div>
      <h1>Eliminación</h1>
      <p>La información del producto no podrá ser recuperada</p>
      <p>¿Está seguro de eliminar el producto?</p>
      <button
        onClick={() => {
          console.log("delet ", element);
          makeRequestDelete("products", element.id);
          onClose();
          window.location.pathname = '/products'
        }}
      >
        ELIMINAR
      </button>
    </div>
  );
};
>>>>>>> 07b5f794457d8a520f1bd6880f62ae8e0a3ee80c
