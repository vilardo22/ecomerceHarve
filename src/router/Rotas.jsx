import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import Home from "../pages/Home";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/produtos" element={<Produto />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
 