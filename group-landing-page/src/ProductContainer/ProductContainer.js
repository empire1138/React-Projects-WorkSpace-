import React from 'react';
import './ProductContainer.css';

// const ProductContainer = (props) => {

//     return (

//         <div className="container">
//             <img src={props.img} alt="" />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//         </div>
//     )

// }

class ProductContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {itemsInCart: 0};
        this.addItem =this.addItem.bind(this)
        }
    

    addItem() {
        alert("Add to cart"); 
        this.setState({itemsInCart: this.state.itemsInCart + 1})
    }

    render() {
        return (
            <div className="container">
                <img src={this.props.img} alt="" />
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <button onClick={this.addItem}>Add to Cart</button>
                <h3>Items in Cart: {this.state.itemsInCart}</h3>
            </div>
        )
    }
    
}


export default ProductContainer;