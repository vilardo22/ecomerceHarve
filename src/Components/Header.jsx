import React from 'react'
import Styles from "./header.module.css"

const Header = () => {
  return (
    <nav className={Styles.navbar}>
    <div className={Styles.logo}>
      <img src="logo.png" alt="Logo" />
    </div>
    <div className={Styles.navbuttons}>
      <a href="#">Botão 1</a>
      <a href="#">Botão 2</a>
      <a href="#">Botão 3</a>
      <a href="#">Botão 4</a>
      <a href="#">Botão 5</a>
    </div>
  
  </nav>
  
  )
}

export default Header
