import React from 'react'

import './Category.css'

import Item from './Item';

const Category = ({ itens }) => {
    const dados = Object.keys(itens)

    return ( 
        <>
            <div className='category-container'>
                <h1>Promoções</h1>
                {
                    dados.map((item) => (
                        <Item
                            item={item}
                        />
                    ))
                }
            </div>
        </>
     );
}
 
export default Category;