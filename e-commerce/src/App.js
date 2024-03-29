import React from "react";
import Navbar from "./components/Navbar";
import { styles } from "./components/Navbar.style";
import ItemListContainer from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./context/CustomContext";


const App = () => {
  const greeting = <h3 style={styles.container}>Ofertas exclusivas</h3>
  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={greeting} />}
            />

            <Route
              path="/categories/:name"
              element={<ItemListContainer greeting={greeting} />}
            />

            <Route
              path="/product/:id"
              element={<ItemDetailContainer greeting={greeting} />}
            />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;