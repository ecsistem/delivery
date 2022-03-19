import React, { useState } from 'react'

import Category from '../components/Category';

const Categorys = () => {
    const [itens, setItens] = useState([
        {
          promocoes: {
              item1: {
              id: '1',
              title: 'Cheese Burguer',
              description: "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
              price: 10.50
            }, 
              item2: {
              id: '2',
              title: 'X-Burguer',
              description: "Pão, Blend 150g, 2 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
              price: 10.50
            }
          }
        }
      ])
    
    return ( 
        <>
            <Category itens={itens}></Category>
        </>
     );
}
 
export default Categorys;