import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { makeRequestPost } from "../lib/requests";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [productsOrder, setProductsOrder] = useState([]);

  const [total, setTotal] = useState(0)

  useEffect(() => {
    !productsOrder ? '' :
    setTotal(() =>
        productsOrder.reduce((previous, product) => previous + parseInt(product.qty) * product.product.price, 0)
    )
}, [productsOrder])


  //Aumenta la cantidad del producto seleccionado
  const addItemToOrder = (product) => {
    const inOrder = productsOrder.find(
      (item) => item.product.id === product.id
    );

    if (inOrder) {
      setProductsOrder(
        productsOrder.map((productInOrder) => {
          if (productInOrder.product.id === product.id) {
            return { ...productInOrder, qty: (productInOrder.qty += 1) };
          } else {
            return productInOrder;
          }
        })
      );
    } else {
      setProductsOrder([...productsOrder, { product: product, qty: 1 }]);
    }
  };

  // Disminuye la cantidad del producto seleccionado
  const deleteItemToOrder = (product) => {
    console.log("product delet ", product);
    //Busca si el producto está en la orden
    const inOrder = productsOrder.find(
      (item) => item.product.id === product.id
    );

    console.log("inOrder ", inOrder);
    // si la cantidad del producto es uno o más, se le resta
    if (inOrder) {
      if (inOrder.qty === 1) {
        setProductsOrder(
          productsOrder.filter((item) => item.product.id !== product.id)
        );
      } else {
        setProductsOrder(
          productsOrder.map((productInOrder) => {
            if (productInOrder.product.id === product.id) {
              return { ...productInOrder, qty: (productInOrder.qty -= 1) };
            } else {
              return productInOrder;
            }
          })
        );
      }
    } else {
      setProductsOrder([...productsOrder]);
    }
  };

  async function createOrder(data) {
    await makeRequestPost("orders", data, true);
  }

  const data = {
    productsOrder,
    setProductsOrder,
    total,
    addItemToOrder,
    deleteItemToOrder,
    createOrder
  };

  console.log("OrderCOntext >>>>>>>", data);

  return <OrderContext.Provider value={data}>{children}</OrderContext.Provider>;
};

const useOrderContext = () => useContext(OrderContext);

export { useOrderContext, OrderProvider };
