import React from "react";
import Cart from "./Cart";
import "./index.css";
import Navbar from "./Navbar";
import firebase from "firebase";
import "firebase/firestore"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount(){
    // const firebase =new Firebase();
    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        console.log(doc.data());
      })
      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      });
      this.setState({
        products: products,
        loading:false
      })
    })
   
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

      return "";
    })
    
    return total;
  }
  render() {
    const {products,loading}=this.state;
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
        {loading && <h1>Loading products...</h1>}
        <div>Total: {this.getCartTotal()}</div>

      </div>
    );
  }
}

export default App;
