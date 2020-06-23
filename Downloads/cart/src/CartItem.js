import React from 'react';
class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 2,
            img : ''
        }
    }
    increaseQuantity = () =>
    {
        console.log(this.state);
    }
    render(){
        const {price,title,qty} = this.state;
        return(
            <div className = "cart-item">
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
                            onClick = {this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/03/51/18/85/240_F_351188596_rBQwfSx3MgDI1RhmyrJcVGFfP4lVg1VN.jpg"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
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