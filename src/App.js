import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="compare-products/:product" element={<Product />} />
    </Routes>
  );
}

export default App;
