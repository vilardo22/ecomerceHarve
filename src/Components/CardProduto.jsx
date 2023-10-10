import React from "react";
import { toast } from "react-toastify";
import api from "../_Service/api";
import Styles from "./cardproduto.module.css"; // Importe seu arquivo CSS

function CardProduto({ produto }) {
  async function adicionarProdutoAoCarrinho(id) {
    try {
      // Lógica para adicionar o produto ao carrinho aqui
      // Você pode fazer uma chamada API para adicionar o produto ao carrinho, por exemplo
      // Certifique-se de implementar essa lógica conforme necessário
      // Em caso de erro, você pode mostrar uma mensagem de erro com toast.error
      toast.success("Produto adicionado ao carrinho com sucesso!");
    } catch (error) {
      toast.error("Erro ao adicionar o produto ao carrinho.");
    }
  }

  return (
    <div className={Styles.card}>
      <img src={produto.image} alt={produto.title} />
      <h3>{produto.title}</h3>
      <p>Preço: R$ {produto.price}</p>
      <button onClick={() => adicionarProdutoAoCarrinho(produto.id)}>Adicionar ao Carrinho</button>
    </div>
  );
}

export default CardProduto;