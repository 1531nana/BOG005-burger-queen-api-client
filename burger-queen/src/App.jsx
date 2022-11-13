import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./AppStyles.scss";
import { TableProvider } from "./context/TableContext";
import { Login } from "./pages/login/Login";
import { Products } from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
        <TableProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/products" element={<Products />}  />
          </Routes>
        </BrowserRouter>
        </TableProvider>
      </div>
  );
}

export default App;
