import { BodyTableOrder } from "./BodyTableOrder"
import { HeaderTableOrder } from "./HeaderTableOrder"
import './style.scss'


export const TableOrder = () => {
    

    return(
        <table className="tabletOrder">
            <HeaderTableOrder/>
            <BodyTableOrder />
        </table>
    )
}
