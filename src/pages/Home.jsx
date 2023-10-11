import React from 'react'
import Welcome from '../Components/Welcome'
import Carrossel from '../Components/Carrossel'
import Header from '../Components/Header'
import { ListaProdutos } from '../Components/ListaProdutos'

const Home = () => {
  return (
    <>
        <Header/>
      <Carrossel/>
      <Welcome />
     <ListaProdutos/>
    </>
  )
}

export default Home
