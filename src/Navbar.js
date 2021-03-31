import React from "react";

//since navbar does not have a state we can instead use a functional component here
const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1617206985~hmac=99cb31f56583d7ac60fbe5244645e88e"
          alt="cart-icon"
        />
        <span style={styles.cartCount}> {props.countOfProducts} </span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 45,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    fontSize: "0.7rem",
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};
export default Navbar;
