import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./AppStyles.scss";
import { TableProvider } from "./context/TableContext";
import { Login } from "./pages/login/Login";
import { Products } from "./pages/Products/Products";

function App() {
  return (
    <TableProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/products" element={<Products />}  />
          </Routes>
        </BrowserRouter>
      </div>
    </TableProvider>
  );
}

export default App;
