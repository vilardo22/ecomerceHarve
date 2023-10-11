import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import Home from "../pages/Home";
import { Carrinho } from "../pages/Carrinho";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/carrinho" element={<Carrinho/>} />
      </Routes>
    </BrowserRouter>
  );
}
 