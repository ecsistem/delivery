import React from 'react'

import './Item.css'

const Item = ({ item }) => {
    return ( 
        <>  
            <div className='item-container'>
                <div className='item-image'></div>
                <div className='item-content-container'>
                    <div className='item-title'>
                        {item.promocoes.item1.title}
                    </div>
                    <div className='item-description'>
                        {item.promocoes.item1.description}
                    </div>
                    <div className='item-price'>
                        <span>R${item.promocoes.item1.price.toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Item;