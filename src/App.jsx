import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Products from "./components/Products";
// import ProductDetail from "./components/ProductDetail";
// import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {
          <Route path="/products" element={<Products />} />
          /*<Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} /> */
        }
      </Routes>
    </>
  );
}

export default App;
