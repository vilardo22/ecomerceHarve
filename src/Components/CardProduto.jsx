import React, { useContext } from "react";
import { toast } from "react-toastify";
//import api from "../_Service/api";
import Styles from "./cardproduto.module.css"; // Importe seu arquivo CSS
import { CarrinhoContext } from "../hooks/CarrinhoContext";

function CardProduto({ produto }) {
  const {adicionarCarrinho} = useContext(CarrinhoContext)
  async function adicionarProdutoAoCarrinho(idProduto, nomeProduto, precoProduto, descricaoProduto) {
    try {
      
      adicionarCarrinho(
        {idProduto, nomeProduto, precoProduto, descricaoProduto}
      )
    } catch (error) {
      toast.error("Erro ao adicionar o produto ao carrinho.");
    }
  }

  return (
    <div className={Styles.card}>
      <img src={produto.image} alt={produto.title} />
      <h3>{produto.title}</h3>
      <p>Preço: R$ {produto.price}</p>
      <button onClick={() => adicionarProdutoAoCarrinho(produto.id, produto.title, produto.price, produto.category)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default CardProduto;