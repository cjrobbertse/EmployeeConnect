import React, { ReactElement } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductsDetails from "./pages/ProductDetails/ProductDetails";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products/:productId" element={<ProductsDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
