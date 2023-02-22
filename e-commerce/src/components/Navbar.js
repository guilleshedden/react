import React from "react";
import logo from "../assets/wineshop.jpeg";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header style={styles.container}>
      <Link style={styles.imagenes} href="/">
        <img style={styles.imagenes} src={logo} alt="tienda online" />
        </Link>

      <h1>Bienvenidos a la tienda de vinos  </h1>

      <NavCategories />
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    
    </header>
  );
};

export default Navbar;
