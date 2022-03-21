import React from 'react'

import './Item.css'

const Item = ({ item }) => {
    return ( 
        <>  
            <div className='item-container'>
                <div className='item-image'></div>
                <div className='item-content-container'>
                    <div className='item-title'>
                        {item[0][0]}
                    </div>
                    <div className='item-description'>
                        {item[0]}
                    </div>
                    <div className='item-price'>
                        <span>R${item[0]}</span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Item;