import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import Service from "./pages/Service";
import Register from "./pages/Register.js";

import Products2 from "./pages/Products2";

import ProductDatailPage from "./pages/ProductDatailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./pages/footer";
import {Cartdata} from './pages/cartdata'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pets" element={<Products />} />

            <Route path="/Service" element={<Service />} />
            <Route path="/Products2" element={<Products2 />} />
            <Route path="/card" element={<Cartdata />} />

            <Route
              path="/ProductDatailPage/:id"
              element={<ProductDatailPage />}
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>Error 404 - page not found</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
