import React from 'react'
import Header from '../Components/Header'
import { ListaProdutos } from '../Components/ListaProdutos'
import img3 from "./../assets/images/banner2.jpg";
import { Carousel } from "react-bootstrap";

const Produtos = () => {
  return (
    <div>
      <Header/>
      <br></br>
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="First slide" />
      </Carousel.Item>
      </Carousel>
      <ListaProdutos></ListaProdutos>

    </div>
  )
}

export default Produtos
