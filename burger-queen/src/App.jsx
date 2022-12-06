import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./AppStyles.scss";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { OrderProvider } from "./context/OrderContext";
import { ProductsProvider } from "./context/ProductsContext";
import { UsersProvider } from "./context/UsersContext";
import { ViewOrderProvider } from "./context/ViewOrderContext";
import { WaiterProvider } from "./context/WaiterContext";
import { Login } from "./pages/login/Login";
import { Products } from "./pages/Products/Products";
import { Users } from "./pages/Users/Users";
import { ViewOrder } from "./pages/ViewOrder/ViewOrder";
import { TakesOrder } from "./pages/Waiter/TakesOrder/TakesOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/products/*"
            element={
              <ProtectedRoute
                avaliableRole={"admin"}
                redirect={"/takes-orders"}
              >
                <ProductsProvider>
                  <Products />
                </ProductsProvider>
              </ProtectedRoute>
            }
          />
          <Route
            path="/users/*"
            element={
              <ProtectedRoute
                avaliableRole={"admin"}
                redirect={"/login"}
              >
                <UsersProvider>
                  <Users />
                </UsersProvider>
              </ProtectedRoute>
            }
          />
            <Route
              path="/takes-orders"
              element={
                 < ProtectedRoute avaliableRole={'Meser@'} redirect={'/login'}>
                <WaiterProvider>
                  <OrderProvider>
                    <TakesOrder />
                  </OrderProvider>
                </WaiterProvider>
                </ProtectedRoute>
              }
            />
          <Route
            path="/view-orders"
            element={
              <ViewOrderProvider>
                <ViewOrder />
              </ViewOrderProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
