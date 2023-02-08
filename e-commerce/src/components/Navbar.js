import React from "react";
import logo from "../assets/wineshop.jpeg";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <header style={styles.container}>
      <a style={styles.imagenes} href="">
        <img style={styles.imagenes} src={logo} alt="tienda online" />
      </a>
      <h1>Bienvenidos a la tienda de vinos  </h1>

      <NavCategories />

      <CartWidget />
    </header>
  );
};

export default Navbar;
