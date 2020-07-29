import React from 'react';
import CartItem from './CartItem' ;
class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products : [
            {
                price : 99,
                title : 'Watch',
                qty : 1,
                img : '',
                id : 1
            },
            {
                price : 999,
                title : 'Mobile Phone',
                qty : 10,
                img : '',
                id : 2
            },
            {
                price : 999,
                title : 'Laptop',
                qty : 4,
                img : '',
                id : 3
            }
        ]
    }
}
        // this.testing();

    render()
    {
        const arr = [1,2,3,4,5];
        // {arr.map()}
        const {products} = this.state;
        // console.log(products);
        return (
            
            <div className = "cart">
                {/* <CartItem qty={1} price = {99} title={"Watch"} img={''}/> */}
                {products.map((product) => {
                    return (
                    <CartItem 
                    product = {product} 
                    key={product.id}
                    jsx ={<h1>Test</h1>}
                    />
                    )
                })}
                {/* { arr.map((item) => {
                    return item+5
                })} */}
                </div>
        );
    }
}

export default Cart;