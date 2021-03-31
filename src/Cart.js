import React from "react";
import CartItem from "./CartItem";

//moving the state to App.Js since its a common parent to Navbar and Cart
const Cart = (props)=> {

    const { products } = props;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              onDeleteProduct={props.onDeleteProduct}
            />
          );
        })}
      </div>
    );
  
}

export default Cart;
