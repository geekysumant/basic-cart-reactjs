import React from 'react';

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price: '49,999',
            title: "Apple iPhoneX",
            qty: 1,
            img: ""
        }
    }
    render(){
        const {price,title,qty}= this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: "#777"}}>Rs. {price}</div>
                    <div style={{color: "#777"}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1617125162~hmac=9053a26e4bf0da08ee699f3dc0f2ffd1" />
                        <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617125140~hmac=7db005607e0ed3f779ac0d620549bd97" />
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1617125228~hmac=a0d8534345711d69ebb78a732b38f3b8" />

                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    images: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc"
    }
}
export default CartItem;