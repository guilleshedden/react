import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from "react-router-dom";
import { db } from "./../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const { name } = useParams();

  useEffect(() => {


    const productsCollection = collection(db, "products");
    const q = name
      ? query(productsCollection, where("category", "==", name))
      : productsCollection;

    getDocs(q)
      .then((data) => {
        const list = data.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(list);
      })
      .catch(() => {
        setError(true);
      });

  }, [name]);

  return (
    <>
      <h1>{greeting}</h1>
      {!error ? (
        <>
          {products.length ? (
            <ItemList products={products} />
          ) : (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          )}
        </>
      ) : (
        <h1>Hubo un error</h1>
      )}
    </>
  );
};

export default ItemListContainer;
