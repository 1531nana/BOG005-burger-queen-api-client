import { useState } from "react"
import { useProductsContext } from "../../../context/ProductsContext"
import { uploadImgWeb, onChangeImg } from "../../../lib/helpers"
import "./style.scss"

export const FormProduct = ({ element, closeModal }) => {

    const {updateProduct, createProduct} = useProductsContext()

    const [nameProduct, setNameProduct] = useState(element.name || '')
    const [typeProduct, setTypeProduct] = useState(element.type || '')
    const [imgProduct, setImgProduct] = useState(element.image || '')
    const [priceProduct, setPriceProduct] = useState(element.price || '')
    const [filePreview, setFilePreview] = useState(element.image || null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: element.id || new Date().getTime(),
            name: nameProduct,
            type: typeProduct,
            image: imgProduct,
            price: priceProduct
        };

        //Create
        if (element.id === undefined) {

            await createProduct(data)
            
        } else {
            
            await updateProduct(element.id, data)
            closeModal()
        }
    }


    const handleInputsChange = async (setFunction, e) => {
        setFunction(e.target.value)
    }

    const handleChangeImage = async (e) => {
        const urlImgUpload = await onChangeImg(e, setFilePreview)
        const urlImageWeb = await uploadImgWeb(urlImgUpload)
        setImgProduct(urlImageWeb)
    }


    return (
        <div className="formProduct">
            <form onSubmit={
                handleSubmit} className="formProduct_form">
                <div className="formProduct_title">
                    <p className="formProduct_title--text">Nuevo producto</p>
                </div>

                <div className="formProduct_options">
                <label htmlFor="name_product">Nombre del producto</label>
                <input onChange={(event) => handleInputsChange(setNameProduct, event)} type="text" name="name_product"
                    className="formProduct_options--input" value={nameProduct} required />

                <label htmlFor="select_product">Tipo de menú:</label>
                <select onChange={(event) => handleInputsChange(setTypeProduct, event)} name="select_product"
                    className="formProduct_options--input" value={typeProduct} required>
                    <option selected='selected' >Seleccionar</option>
                    <option >Desayuno</option>
                    <option >Almuerzo</option>
                </select>

                <div className="formProduct_options--image">
                    <label htmlFor="image_product">Imagen del producto</label>
                   <div className="formProduct_options--image--previewImage">
                    <input
                        onChange={(e) => {
                            handleChangeImage(e)
                        }} type="file" name="image_product" className="formProduct_options--input" />
                    <img src={filePreview} alt="" className="formProduct_options--image--previewImage--img" />
                   </div>
                </div>

                <label htmlFor="name_product">Precio del producto</label>
                <input onChange={(e) => handleInputsChange(setPriceProduct, e)} type="number" name="price_product"
                    className="formProduct_options--input" value={priceProduct} required />
                </div>
                <button className="formProduct_btn" >Guardar</button>
            </form>
        </div>
    )
}