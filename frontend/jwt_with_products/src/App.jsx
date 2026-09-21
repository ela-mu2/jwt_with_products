import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/Login";
import Products from "./pages/Products";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
