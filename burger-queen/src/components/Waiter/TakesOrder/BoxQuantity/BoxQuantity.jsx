import './style.scss';

  export const BoxQuantity = ({substract, add, element}) => {

      return (
        element > 0 ?
        <div className="cardProduct_boxQuantity">
          <p className="cardProduct_boxQuantity--substract" onClick={()=> substract(element)}>-</p>
          <div className="cardProduct_boxQuantity--quantity">
          {element}
          </div>
          <p className="cardProduct_boxQuantity--add" onClick={() => add(element)}>+</p>
        </div> : ''
      );
  };
