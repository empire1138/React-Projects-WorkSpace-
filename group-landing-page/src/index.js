import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import ProductContainer from './ProductContainer/ProductContainer';


const App = () => {
   
   
   
    return(
        <ProductContainer
            img="/ice-1786311_960_720.jpg"
            title='Ice Cream Berries thing'
            description='Its ok, Too pricey for what it is.'       
        />
    )
}

ReactDOM.render(<App />, document.querySelector("#root")); 

