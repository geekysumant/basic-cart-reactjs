import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
      super();
    this.state = {
      products: [
        {
          price: "49,999",
          title: "Apple iPhoneX",
          qty: 2,
          img: "",
          id:1
        },
        {
            price: "89,999",
            title: "Microsoft Surface",
            qty: 1,
            img: "",
            id:2
        },
        {
            price: "4,999",
            title: "G-Shock Calibre",
            qty: 5,
            img: "",
            id:3
        },
        {
            price: "29,999",
            title: "Apple Watch",
            qty: 5,
            img: "",
            id:4
        }
      ],
    };
  }
   handleIncreaseQuantity = (product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;

      this.setState({
          products:products
      });
  }
  handleDecreaseQuantity = (product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty>0)
        products[index].qty-=1;

    this.setState({
        products:products
    });
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id!==id);

    this.setState({
        products:items
    })
}
  render() {
      const {products}=this.state;
    return (
      <div className="cart">
        {
            products.map((product)=>{
                return <
                    CartItem 
                        product={product}
                        key= {product.id}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDeleteProduct = {this.handleDeleteProduct}
                    />
            })
        }
      </div>
    );
  }
}

export default Cart;
