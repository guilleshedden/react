import React, { useState } from "react";

const ItemCount = ({ onAdd, stock = 5 }) => {
  const [count, setCount] = useState(1);

  const handlerClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handlerClickSubtrack = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.containerButtons}>
        <button style={styles.button} onClick={() => handlerClickSubtrack()}>
          -
        </button>
        <h2>{count}</h2>
        <button style={styles.button} onClick={() => handlerClickAdd()}>
          +
        </button>
      </div>
      <button style={styles.buttonAdd} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  },
  button: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    margin: "10px",
  },
  containerButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonAdd: {
    height: "50px",
  borderRadius: "25px",
  backgroundColor: "#2ecc71",
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "all 0.2s easeInOut",
  },
};

export default ItemCount;