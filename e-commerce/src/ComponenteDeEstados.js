import React, { useState, useEffect } from "react";

const ComponenteDeEstados = () => {
  const [count, setCount] = useState(1);
  const [numero, setNumero] = useState(0);

  useEffect(() => {
    setNumero(numero + 1);

    const interval = setInterval(() => {
      console.log('ping');
    }, 1000);

    return (()=>{
      clearInterval(interval);
    })

  },[]);
  
  const handlerAdd = () => {
    setCount(count + 1);
  };

  const handlerSubtract = () => {
    setCount(count - 1);
  };
  const handlerReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handlerAdd}>Sumar</button>
      <button onClick={handlerSubtract}>Restar</button>
      <button onClick={handlerReset}>Reset</button>
      <h1>{numero}</h1>
    </>
  );
};

export default ComponenteDeEstados;
