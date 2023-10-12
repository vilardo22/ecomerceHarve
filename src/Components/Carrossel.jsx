import React from 'react'
import Styles from "./carrossel.module.css"
import f1 from "./logos/l1.png";
import f2 from "./logos/l2.png";
import f3 from "./logos/l3.png";
import f4 from "./logos/l4.png";
import f5 from "./logos/l5.png";
import f6 from "./logos/l6.png";
import f7 from "./logos/l7.png";
import f8 from "./logos/l8.png"
const Carrossel = () => {
  return (
    <div class={Styles.logos}>
    <div class={Styles.logosslide}>
        <img src={f1} />
        <img src={f2} />
        <img src={f3} />
        <img src={f4} />
        <img src={f5} />
        <img src={f6} />
        <img src={f7} />
        <img src={f8} />
        
    </div>
    <div class={Styles.logosslide}>
        <img src={f1} />
        <img src={f2} />
        <img src={f3} />
        <img src={f4} />
        <img src={f5} />
        <img src={f6} />
        <img src={f7} />
        <img src={f8} />
        
    </div>
    <div class={Styles.logosslide}>
        <img src={f1} />
        <img src={f2} />
        <img src={f3} />
        <img src={f4} />
        <img src={f5} />
        <img src={f6} />
        <img src={f7} />
        <img src={f8} />
        
    </div>
    <div class={Styles.logosslide}>
        <img src={f1} />
        <img src={f2} />
        <img src={f3} />
        <img src={f4} />
        <img src={f5} />
        <img src={f6} />
        <img src={f7} />
        <img src={f8} />
        
    </div>
  </div>
  )
}

export default Carrossel
