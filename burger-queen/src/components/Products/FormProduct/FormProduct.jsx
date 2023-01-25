import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { useProductsContext } from "../../../context/ProductsContext"
import { uploadImgWeb, onChangeImg } from "../../../lib/helpers"
import { makeRequestGet } from "../../../lib/requests"
import "./style.scss"


export const FormProduct = ({ element, closeModal }) => {

    const params = useParams()

    const { updateProduct, createProduct } = useProductsContext()
    const [productId, setProductId ] = useState(element.id || '')
    const [nameProduct, setNameProduct] = useState(element.name || '')
    const [typeProduct, setTypeProduct] = useState(element.type || '')
    const [imgProduct, setImgProduct] = useState(element.image || '')
    const [priceProduct, setPriceProduct] = useState(element.price || '')
    const [filePreview, setFilePreview] = useState(element.image || null)

    const isCreating = productId === "" ? true: false

    const navigate = useNavigate()

    const setInputs = () => {
        setProductId('');
        setNameProduct('');
        setTypeProduct('');
        setImgProduct('');
        setPriceProduct('');
        setFilePreview(null)
    }

    useEffect(()=>{
        const paramProductId = params["*"]
        if(paramProductId !== ""){ 
            getProductById(paramProductId)
        } else {
            setInputs()
        }
    },[params])



    const getProductById = async (id) => {
        const data = await makeRequestGet(`products/${id}`)
        console.log('form products ',data);
        setProductId(id)
        setNameProduct(data.name)
        setTypeProduct(data.type)
        setImgProduct(data.image)
        setPriceProduct(data.price)
        setFilePreview(data.image)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: productId || new Date(),
            name: nameProduct,
            type: typeProduct,
            image: imgProduct,
            price: priceProduct
        };

        //Create
        if (isCreating) {
            await createProduct(data)
            setInputs()

        } else {
            await updateProduct(productId, data)
            if(typeof closeModal === "function") closeModal()
            setInputs()
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

    const title = isCreating ? "Nuevo producto" :  "Editar producto"

    const navigateAbort = () => {
        navigate('/products')
        setInputs()
        if (typeof closeModal === "function") closeModal() 
    }

    return (
        <div className="formProduct">
            <form onSubmit={handleSubmit} className="formProduct_form">

                <div className="formProduct_title">

                    <p className="formProduct_title--text">{title}</p>

                </div>

                <div className="formProduct_options">

                    <label htmlFor="name_product">Nombre del producto</label>
                    <input onChange={(event) => handleInputsChange(setNameProduct, event)} type="text" name="name_product"
                        className="formProduct_options--input" value={nameProduct} aria-label='name_product' required />

                    <label htmlFor="select_product">Tipo de menú:</label>
                    <select onChange={(event) => handleInputsChange(setTypeProduct,event)} name="select_product"
                        className="formProduct_options--input" value={typeProduct} aria-label='select_product' required>
                        <option selected='selected' >Seleccionar</option>
                        <option >Desayuno</option>
                        <option >Almuerzo</option>
                    </select>

                    <div className="formProduct_options--image">

                        <label htmlFor="">Imagen del producto</label>

                        <div className="formProduct_options--input formProduct_containerFile">

                            <label htmlFor="imageProduct">
                                <input
                                    onChange={(e) => {
                                        handleChangeImage(e)
                                    }} type="file" name="imageProduct" className="formProduct_containerFile--input"
                                     aria-label='imageProduct' data-testid='imageProduct' />
                            </label>

                            <img src={filePreview} alt="" className="formProduct_options--image--previewImage--img" />

                        </div>

                    </div>
                    
                    <label htmlFor="name_product">Precio del producto</label>
                    <input onChange={(e) => handleInputsChange(setPriceProduct,e)} type="number" name="price_product"
                        className="formProduct_options--input" value={priceProduct} 
                        aria-label='name_product' required />

                </div>
            <div className="formProduct_containerBtns">
                <button className="formProduct_btn" >Guardar</button>
                <button className="formProduct_btn formProduct_btn--abort"  type="button" onClick={() => navigateAbort()}>Cancelar</button>
            </div>

            </form>
        </div>
    )
}