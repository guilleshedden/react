import React, { useContext, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Cart = ({ isRed, estilo }) => {

const { cart, totals } = useContext(CustomContext);

const buyer = {
  name: "Juan",
  apellido: "Perez",
  email: "juanperez@gmail.com",
};
const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

const handlerClickSell = () => {
  
  const sellCollection = collection(db, "sells");
  addDoc(
    sellCollection,
    {
      buyer: inputs,
      items: cart,
      total: totals.total,
      time: serverTimestamp(),
    }
  )
  .then(result=>console.log(result.id))
};

  const handlerStock = () => {
    const docReference = doc(db, 'products', 'result');
    updateDoc(docReference, {stock:50})
  };


  return (
    <>
      {!cart.length ? (
        <>
        <Stack sx={{ width: '100%' }} spacing={2} className={isRed ? "rojo" : "azul"}>
    
      <Alert severity="info">No tienes productos agregados al carrito. Buscalos <Link to={"/"}>aqui</Link></Alert>
      
        </Stack>
          
        </>
      ) : (
        <>
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id}>
                  <h1>{product.title}</h1>
                  <h2>Precio: {product.price}</h2>
                  <h2>Cantidad: {product.quantity}</h2>
                </div>
                
              );
            })}
          </div>
          <h1>Total : {totals.total}</h1>
          <div>
          <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
      <TextField required
          id="outlined-required"
          label="Nombre"
          defaultValue="Hello World" type="text" 
        name="username" value={inputs.username || ""} 
        onChange={handleChange} />
        <TextField required
          id="outlined-required"
          label="Apellido"
          defaultValue="Hello World" type="text" 
        name="surname" value={inputs.surname || ""} 
        onChange={handleChange} />
        <TextField required
          id="outlined-required"
          label="Telefono"
          defaultValue="Hello World" type="number" 
        name="number" value={inputs.number || ""} 
        onChange={handleChange} />
        <TextField required
          id="outlined-required"
          label="Direccion"
          defaultValue="Hello World" type="text" 
        name="address" value={inputs.address || ""} 
        onChange={handleChange} />
        <TextField required
          id="outlined-required"
          label="Email"
          defaultValue="Hello World" type="text" 
        name="email" value={inputs.email || ""} 
        onChange={handleChange} />
        
    
      </Box>
          </div>
          <Link to="/">
            <button>Continuar comprando</button>
          </Link>
          <button onClick={handlerClickSell}>Comprar</button>
        </>
      )}
    </>
  );
};
  export default Cart;