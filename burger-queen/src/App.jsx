import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import "./AppStyles.scss";
// import { TableProvider } from "./context/TableContext";
import { Login } from "./pages/login/Login";
import { Products } from "./pages/Products/Products";

function App() {
  return (
<<<<<<< HEAD
    // <TableProvider>
      <div className="App">
=======
    <div className="App">
        <TableProvider>
>>>>>>> 07b5f794457d8a520f1bd6880f62ae8e0a3ee80c
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route exact path="/products" element={<Products />}  />
          </Routes>
        </BrowserRouter>
        </TableProvider>
      </div>
<<<<<<< HEAD
    // </TableProvider>
=======
>>>>>>> 07b5f794457d8a520f1bd6880f62ae8e0a3ee80c
  );
}

export default App;
