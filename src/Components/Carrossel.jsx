import React from 'react'
import Styles from "./carrossel.module.css"
import f1 from "./logos/3m.svg";
import f2 from "./logos/barstool-store.svg";
import f3 from "./logos/budweiser.svg";
import f4 from "./logos/buzzfeed.svg";
import f5 from "./logos/forbes.svg";
import f6 from "./logos/macys.svg";
import f7 from "./logos/menshealth.svg";
import f8 from "./logos/mrbeast.svg"
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
  </div>
  )
}

export default Carrossel
