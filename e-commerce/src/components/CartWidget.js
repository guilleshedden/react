import React from "react";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export const CartWidget = () => {
  return (
    <div style={{display:'flex'}}>
      <ShoppingCartCheckoutIcon color="primary" fontSize="large" />
      <p>1</p>
    </div>
  );
};

export default CartWidget;
