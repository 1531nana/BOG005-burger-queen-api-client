import { useContext, useState } from "react"
import {TableContext} from "../../context/TableContext"
import { uploadImgWeb, onChangeImg } from "../../lib/helpers"
import { makeRequestPatch, makeRequestPost } from "../../lib/requests"
import "./style.scss"


export const ModalAddProduct = (props = false) => {
    console.log('agregar un producto ', props);
    const {element = {}} = props

    // const {products, onclose} = useContext(TableContext)

    const [nameProduct, setNameProduct] = useState(element.name || '')
    const [typeProduct, setTypeProduct] = useState(element.type ||'')
    const [imgProduct, setImgProduct] = useState(element.image ||'')
    const [priceProduct, setPriceProduct] = useState(element.price ||'')
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
              
              
            window.location.pathname = '/products'

            await  makeRequestPost('products', data, true)
            // props !== {} ? console.log('editar') : console.log('agregar')
            // await makeRequestPatch('products', element.id, data)
            // if(element !== {} ) console.log('Se está agregando un producto ')
            // else console.log('Se está editando un producto ')
            
            // nameProduct !== '' ?  console.log('Se está editando un producto ') :  console.log('Se está agregando un producto ')
            // !props ?  await makeRequestPatch('products', element.id, data) :  await  makeRequestPost('products', data, true)
           
            // console.log('data para enviar', data)
        }

    // }

    const handleInputsChange =  async (setFunction, e) =>{
        setFunction( e.target.value)
    }

    const handleChangeImage = async (e) => {
        const urlImgUpload = await onChangeImg(e, setFilePreview)
        const urlImageWeb = await uploadImgWeb(urlImgUpload)
        setImgProduct(urlImageWeb)
    } 


    return (
        <div className="modalAddProduct">
            <form onSubmit={handleSubmit} className="modalAddProduct_form">
                <div>
                    <p>Nuevo producto</p>
                </div>

                <label htmlFor="name_product">Nombre del producto</label>
                <input onChange={(event) => handleInputsChange( setNameProduct, event)} type="text" name="name_product" 
                className="modalAddProduct_input" value={nameProduct} required/>

                <label htmlFor="select_product">Tipo de menú:</label>
                <select onChange={(event) => handleInputsChange( setTypeProduct, event)} name="select_product"
                 className="modalAddProduct_input" value={typeProduct} required>
                    <option selected='selected'>Seleccionar</option>
                    <option >Desayuno</option>
                    <option >Almuerzo</option>
                </select>

                <div className="modalProduct_previewImage">
                    <label htmlFor="name_product">Imagen del producto</label>
                    <input 
                     onChange={(e)=> { handleChangeImage(e)
                    }} type="file" name="image_product" className="modalAddProduct_input" />
                    <img src={filePreview} alt="" className="modalProduct_previewImage--img" />
                </div>

                <label htmlFor="name_product">Precio del producto</label>
                <input onChange={(e) => handleInputsChange( setPriceProduct, e)} type="number" name="price_product" 
                className="modalAddProduct_input" value={priceProduct} required/>

                <button className="loginPage_btn" >Guardar</button>
            </form>
        </div>
    )
}