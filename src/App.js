import React from "react";
import Cart from "./Cart";
import "./index.css";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 49999,
          title: "Apple iPhoneX",
          qty: 2,
          img: "https://images.unsplash.com/photo-1525459715390-11a3e77bc887?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
          id: 1,
        },
        {
          price: 89999,
          title: "Microsoft Surface",
          qty: 1,
          img: "https://images.unsplash.com/photo-1595245150809-ef9436aaded6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          id: 2,
        },
        {
          price: 4999,
          title: "G-Shock Calibre",
          qty: 5,
          img: "https://images.unsplash.com/photo-1605548230903-a22352b062b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          id: 3,
        },
        {
          price: 29999,
          title: "Apple Watch",
          qty: 5,
          img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
          id: 4,
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) products[index].qty -= 1;

    this.setState({
      products: products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };
  countOfProducts= ()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
  }
  getCartTotal = ()=>{
    const {products}=this.state;
    let total=0;
    products.map((prod)=>{
      total += (prod.qty*(prod.price))
      console.log(prod);
    })
    
    return total;
  }
  render() {
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar 
          countOfProducts={this.countOfProducts()}
        />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div>Total: {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
