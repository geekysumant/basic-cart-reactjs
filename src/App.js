import React from "react";
import Cart from "./Cart";
import "./index.css";
import Navbar from "./Navbar";
import firebase from "firebase";
import "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    // const firebase =new Firebase();
    this.db.collection("products").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log(doc.data());
      });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({
        products: products,
        loading: false,
      });
    });
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    console.log(products);
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products: products,
    // });
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => console.log("Updated!"))
      .catch((err) => console.log(err));
  };
  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      const docRef = this.db.collection("products").doc(products[index].id);
      docRef
        .update({
          qty: products[index].qty - 1,
        })
        .then(() => console.log("Updated!"))
        .catch((err) => console.log(err));
    }
  };
  handleDeleteProduct = (id) => {
    const docRef = this.db.collection("products").doc(id);

    docRef.delete()
    .then(() => console.log("Deleted!"))
    .catch((err) => console.log(err));
  };
  countOfProducts = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let total = 0;

    products.map((prod) => {
      total += prod.qty * prod.price;
      console.log(prod);

      return "";
    });

    return total;
  };
  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        qty: 3,
        title: "Washing Machine",
        price: 25999,
      })
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar countOfProducts={this.countOfProducts()} />
        {/* <button onClick={this.addProduct}> Add product</button> */}
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
