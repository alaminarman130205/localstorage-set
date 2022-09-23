import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { useEffect } from 'react';
import { useState } from 'react';


const Cosmetics = () => {
    const [cosmetics , setCosmetics] = useState([]);
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data));
    }, [])
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Cosmetic
                     key={cosmetic.id}
                     cosmetic = {cosmetic}
                     ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;













// import { addition, multiply } from '../../utilities/Calculate';


    // <div>
        //     <h1>Welcome to my cosmetics store</h1>
        //     {/* <p>Total : {total}</p>
        //     <p>Total  multiplay result : {M_total}</p> */}
        // </div>

          // const first  = 55 
    // const second = 66;
    // const total = addition(first , second );
    // const M_total = multiply(first, second);