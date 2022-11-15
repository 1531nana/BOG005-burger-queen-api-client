import { useProductsContext } from "../../../context/ProductsContext";
import './style.scss'


export const BtnAbort = ({close}) => {
  return <button className="deleteModal_btnAbort" onClick={close}>CANCELAR</button>;
};

export const DeleteModalProduct = ({ element, closeModal }) => {
  const { deleteProduct } = useProductsContext()

  const handleDelete = async () => {
    await deleteProduct(element.id)
    closeModal()
  }

  return (
    <main className="deleteModal">
        <section className="deleteModal_container">
          <h1 className="deleteModal_title">Eliminación</h1>
            <p className="deleteModal_warning">La información del producto no podrá ser recuperada</p>
            <p className="deleteModal_question">¿Está seguro de eliminar el producto?</p>
          <button className="deleteModal_btnDelete"
            onClick={handleDelete}
          >
            ELIMINAR
          </button>
        </section>
    </main>
  );
};
