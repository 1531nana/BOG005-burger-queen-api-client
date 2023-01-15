import {
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { FormProduct } from "../src/components/Products/FormProduct/FormProduct";
import {
  ProductsProvider,
  useProductsContext,
} from "../src/context/ProductsContext";
import { BrowserRouter as Router } from "react-router-dom";
import { makeRequestGet } from "../src/lib/requests";
import { useState } from "react";

jest.mock("../src/lib/requests");

describe("Component FormProduct ", () => {
  /*
  test("render component FormProduct", () => {
    const ProductContext = createContext();

    // const { updateProduct, createProduct } = useProductsContext();
    
    const updateProduct = jest.fn();

   const {container, getByText} = render(
    <ProductContext.Provider>
        <FormProduct element={element} closeModal={closeModal} />
    </ProductContext.Provider>

   );

    const productId = 2145;
    const data = {
      id: 2145,
      name: "pizza",
      type: "Desayuno",
      image: "https://i.ibb.co/pvyHCxj/robot.png",
      price: 18000,
    };

    updateProduct.mockImplementationOnce({
      body: {},
      bodyUsed: false,
      headers: {},
      ok: true,
      redirected: false,
      status: 200,
      statusText: "OK",
      type: "cors",
      url: "http://localhost:8080/products/2022-11-27T14:49:33.079Z",
    });

    const element = {};
    const closeModal = () => {};

    const inputNameProduct = screen.getByRole("textbox", {
      name: "name_product",
    });
    fireEvent.change(inputNameProduct, { target: { value: data.name } });

    const inputTypeProduct = screen.getByRole("textbox", {
      name: "select_product",
    });
    fireEvent.change(inputTypeProduct, { target: { value: data.type } });

    const inputImgProduct = screen.getByRole("textbox", {
      name: "imageProduct",
    });
    fireEvent.change(inputImgProduct, { target: { value: data.image } });

    const inputPriceProduct = screen.getByRole("textbox", {
      name: "name_product",
    });
    fireEvent.change(inputPriceProduct, { target: { value: data.price } });

    const btnSave = screen.getByRole("button", { name: "Guardar" });
    fireEvent.click(btnSave);
  });
  */

  test("component handles button click", async () => {

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    const data = jest.fn();

    

    const data1 = {
      id: 2145,
      name: "pizza",
      type: "Desayuno",
      image: "https://i.ibb.co/pvyHCxj/robot.png",
      price: 18000,
    };

    const {container} =  render(
      <Router>
        <ProductsProvider value={{ data }}>
          <FormProduct element={''} />
        </ProductsProvider>
      </Router>
    );


    const setNameProduct = (data) => data.name
        const setTypeProduct = (data) => data.type
        const setImgProduct = (data) => data.image
        const setPriceProduct = (data) => data.price 
        const setFilePreview = (data) => data.image 

     waitFor(() => {
        makeRequestGet.mockResolvedValueOnce(() =>
        Promise.resolve(
            setNameProduct(data1),
            setTypeProduct(data1),
            setImgProduct(data1),
            setPriceProduct(data1),
            setFilePreview(data1)
            // id: 2145,
            // name: "pizza",
            // type: "Desayuno",
            // image: "https://i.ibb.co/pvyHCxj/robot.png",
            // price: 18000,
        )
      );
    });

    const inputNameProduct = screen.getByRole("textbox", {
      name: "name_product",
    });
    fireEvent.change(inputNameProduct, { target: { value: data1.name } });

    const inputTypeProduct = screen.getByRole("combobox", {
      name: "select_product",
    });
    fireEvent.change(inputTypeProduct, { target: { value: data1.type } });

    const inputImgProduct = screen.getByTestId("imageProduct");
    fireEvent.change(inputImgProduct, { target: { value: data1.image } });

    const inputPriceProduct = screen.getByRole("textbox", {
      name: "name_product",
    });
    fireEvent.change(inputPriceProduct, { target: { value: data1.price } });

    const btnSave = screen.getByRole("button", { name: "Guardar" });
    // btnSave.debug();
    fireEvent.click(btnSave);

    // waitFor(()=> {
    //     expect(data).toHaveBeenCalledTimes(1);
    // })
  });
});
