import { Header } from "../../components/Header/Header"
import { ViewOrderTable } from "../../components/ViewOrderTable/ViewOrderTable"
import './style.scss'

export const ViewOrder = () => {

    const dataUser = JSON.parse(localStorage.getItem("dataUser"))

    return(
        <div className="viewOrder">

            <Header />
        <div  className="viewOrder_page">

            <div>
                <h1 className="viewOrder_role">
                    {dataUser.role === 'Meser@' ? 'MESERO' : dataUser.role === 'admin' ? 'ADMINISTRADOR' : 'JEFE DE COCINA' }
                </h1>
            </div>

            <div className="viewOrder_container">

                <section className="viewOrder_title">Órdenes</section>
                <ViewOrderTable />

            </div>

        </div>



        </div>

    )
}