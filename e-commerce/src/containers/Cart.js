import React, { useContext, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { CustomContext } from "../context/CustomContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";
import { db } from "../firebase/firebase";

const Cart = ({ isRed, estilo }) => {

const { cart, totals } = useContext(CustomContext);

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
  .then(result=>result.id)
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
                
                <div style={styles.containerProductos} key={product.id}>
                  <img style={styles.img} src={product.image} alt={product.title} />
                  <h1>{product.title}</h1>
                  <h3>Cantidad: <br></br> {product.quantity}</h3>
                  <h3><strong>Precio:</strong> <br></br> $ {product.price}</h3>
                </div>
                
              );
            })}
          </div >
          <h1 style={styles.total}><b>Total: $ {totals.total}</b></h1>
          
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
          <div style={styles.container}>
          <Link to="/">
            <button style={styles.buttonAdd}>Seguir en la tienda</button>
          </Link>
          <button style={styles.buttonAdd} onClick={handlerClickSell}>Finalizar compra</button>
          </div>
        </>
      )}
    </>
  );
};
const styles = {
  img:{
    width: "80px",
    height: "100px",
  },
  containerProductos:{
    display: "flex",
    margin: "20px",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  total:{
    textAlign: "right",
    color:"red",
    paddingRight: "50px",
    
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
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
  export default Cart;