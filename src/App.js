

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RouteApp } from './router/Rotas';
import CarrinhoContextProvider, { CarrinhoContext } from "./hooks/CarrinhoContext";

function App() {
  return (
    < >
    <CarrinhoContextProvider>
      <RouteApp/>
      <ToastContainer />
      </CarrinhoContextProvider>
    </>
  );
}

export default App;
