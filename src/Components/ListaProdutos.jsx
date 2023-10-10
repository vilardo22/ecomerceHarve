import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../_Service/api"
import CardProduto from "./CardProduto";
import Styles from "./cardproduto.module.css";


function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (error) {
      mensagemDeErro("Erro para buscar os produtos.");
    }
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div>
      <div className={Styles.listaprodutos}>
        {produtos.map((produto, index) => (
          <CardProduto key={index} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export { ListaProdutos };