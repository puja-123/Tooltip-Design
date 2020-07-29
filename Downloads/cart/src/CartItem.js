import React from 'react';
class CartItem extends React.Component {
    // testing() {
    //     const promise = new Promise((resolve , reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         } , 5000);
    //     })
    //     promise.then(() => {
    //         this.setState({ qty : this.state.qty + 10 });
    //         this.setState({ qty : this.state.qty + 10 });
    //         this.setState({ qty : this.state.qty + 10 });
    //         console.log('state' , this.state);
    //     });
    // }
    // increaseQuantity = () =>
    // {
    //     // console.log(this.state);
    //     //setState form 1
    //     // this.setState({
    //     //     qty : this.state.qty + 1
    //     // });

    //     //setState form 2
    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty + 1,
    //         }
    //     } , () => {
    //         console.log('this.state' , this.state);
    //     });
    // }
    // decreaseQuantity = () =>
    // {
    //     this.setState((prevState) => {
    //         if(prevState.qty === 0)
    //         {
    //             return;
    //         }
    //         else{
    //         return {
    //             qty : prevState.qty - 1,
    //         }
    //     }
    //     }, () => {
    //         console.log('this.state' , this.state);
    //     });
    // }
    render(){
        console.log('this.props' , this.props);
        const {price,title,qty} = this.props.product;
        const { product , onIncreaseQuantity , onDecreaseQuantity , onDeleteProduct } = this.props;
        return(
            <div className = "cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
        <div style={ { fontSize : 25 } }>{title}</div>
                    <div style={ { color : '#777' } }>{price}</div>
        <div style={ { color : '#777' } }>{qty}</div>
                    <div className="cart-item-actions">
                        {/* {Button} */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/26/10/59/240_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                            onClick = {() => onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/03/51/18/85/240_F_351188596_rBQwfSx3MgDI1RhmyrJcVGFfP4lVg1VN.jpg"
                            onClick = {() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                            onClick = {() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    } 
}
const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : 'red'
    }
}
export default CartItem;