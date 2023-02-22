import React from "react";
import Item from "./Item";

const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
}

const ItemList = ({ products }) => {
  return (
      <div style={styles.container}>
          {products.map((product) =>
              <Item key={product.id} product={product} />
          )}
      </div>
  )
}
export default ItemList;

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}
