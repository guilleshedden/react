import React, { useState, useContext } from "react";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";
import { CustomContext } from "../context/CustomContext";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addProduct } = useContext(CustomContext);

  const onAdd = (count) => {
    setIsPressedButton(true);
    addProduct(product, count);
  };

  return (
    <div style={styles.infoContainer}>
      <img style={styles.img} src={product.image} alt={product.title} />
      <div style={styles.infoTextContainer}>
        <div style={styles.infoText}>
          <h1>{product.title}</h1>
          <span>${product.price}</span>
          <p>{product.description}</p>
        </div>
        {isPressedButton ? (
          <>
          <div style={styles.container}>
          <Link to="/">
            <button style={styles.buttonAdd}>Seguir en la tienda</button>
          </Link>
          <Link to="/cart">
          <button style={styles.buttonAdd} >Ir al carrito</button>
          </Link>
          </div>
          
        </>
          
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
        
      </div>
    </div>
  );
};

const styles = {
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px",
  },
  img: {
    width: "40%",
    aspectRatio: "1/1",
  },
  infoTextContainer: {
    display: "flex",
    flexDirection: "column",
  },
  infoText: {
    padding: "10px",
    marging: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  buttonAdd: {
  height: "50px",
  borderRadius: "25px",
  backgroundColor: "#722F37",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s easeInOut",
  },
};

export default ItemDetail;
