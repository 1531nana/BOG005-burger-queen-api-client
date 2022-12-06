import { useState } from "react";
import { useWaiterContext } from "../../../context/WaiterContext";
import { CardProducts } from "./ContainerProducts/CardProducts";
import './style.scss';

export const TableWaiter = () => {

  const [typeMenu, setTypeMenu] = useState("");
  const { products } = useWaiterContext();


  const handleTypeMenu = (e) => {
    setTypeMenu(e.target.value);
  };

  const myStyleOption = {
    background: "#DFDFDF", 
    color: '#6E259B',
  }
  
  const myStyleOptionTwo = {
    background: "white", 
    color: '#6E259B',
  }

  return (
    <div className="containerOrder">
      <select className="containerOrder_select" name="select_type" value={typeMenu} onChange={handleTypeMenu}>
        <option style={myStyleOption}>Seleccionar</option>
        <option style={myStyleOptionTwo}>Desayuno</option>
        <option style={myStyleOption} >Almuerzo</option>
      </select>
      {typeMenu === "" ? (
        ""
      ) : (
        <div className="containerOrder_products" >
          {products.map((element) => {
            if (element.type === typeMenu) {
              return <CardProducts key={element.id} element={element} />;
            }
          })}
        </div>
      )}
    </div>
  );
};
