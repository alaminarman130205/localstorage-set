import React from 'react';
import { addToDb } from '../../utilities/fakedb';


const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addTocart = (id) =>{
        // console.log('item added ', id);
       addToDb(id);
    }

    return (

        <div>
            <h2>Buy this: {name}</h2>
            <p>Only for ${price}</p>
            <p>It has id :{id}</p>
            <button onClick={() => addTocart(id)}>add to cart</button>
        </div>
    );
};  

export default Cosmetic;