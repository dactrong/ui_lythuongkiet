import React from "react";
// import { Container } from "react-bootstrap";
import styles from "./cauhinhnamhoc.module.scss"
const Cauhinhnamhoc = () => {
    console.log(styles);
  return (
    <div >
        <h1 className={`${styles.app}`} >Helo word</h1>
    </div>
  );
};

export default Cauhinhnamhoc;
