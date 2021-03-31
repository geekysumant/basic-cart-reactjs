import React from 'react';

//changing this to a functional component since there's no state
const CartItem = (props)=> {
    // constructor(){
    //     super();
    //     this.state={
    //         price: '49,999',
    //         title: "Apple iPhoneX",
    //         qty: 1,
    //         img: ""
    //     }
    //     // this.increaseQuantity=this.increaseQuantity.bind(this);
    //     // this.testing();
    // }
    // testing(){
    //     const promise=new Promise((resolve,reject)=>{
    //         setTimeout(()=>{resolve()},5000);
    //     });
    //     promise.then(()=>{
    //         this.setState({
    //             qty: this.state.qty+1
    //         });
    //         this.setState({
    //             qty: this.state.qty+1
    //         });
    //         this.setState({
    //             qty: this.state.qty+1
    //         })
    //         console.log(this.state);
    //     });
    // }
    const increaseQuantity=()=>{
        this.setState({
            qty: this.state.qty+1
        })
        // console.log(this.state);
        // this.setState((prevState)=>{
        //     return {
        //         qty:prevState.qty+1
        //     }
        // });
    }
    const decreaseQuantity= ()=>{
        this.setState((prevState)=>{
            if(prevState.qty>0){
                return {
                    qty:prevState.qty-1
                };
            }else return {};
        });
    }
    
        const {price,title,qty}= props.product;
        const {product, onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.images} 
                        src={product.img}
                    />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: "#777"}}>Rs. {price}</div>
                    <div style={{color: "#777"}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1617125162~hmac=9053a26e4bf0da08ee699f3dc0f2ffd1" 
                            onClick={()=>props.onIncreaseQuantity(props.product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617125140~hmac=7db005607e0ed3f779ac0d620549bd97" 
                            onClick={()=>props.onDecreaseQuantity(props.product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1617125228~hmac=a0d8534345711d69ebb78a732b38f3b8" 
                            onClick={()=>onDeleteProduct(product.id)}
                        />

                    </div>
                </div>
            </div>
        )
    
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