import React, { useRef, useState } from 'react';
import { Carousel } from "react-bootstrap";

import Styles from './welcome.module.css';
import img1 from "./../assets/images/banner1.jpg";
import img2 from "./../assets/images/banner2.jpg";



export default function Welcome () {
  ;
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
     

      <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />
      
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );

}