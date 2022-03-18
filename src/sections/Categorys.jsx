import React, { useState } from 'react'

import Category from '../components/Category';

const Categorys = () => {
    const [itens, setItens] = useState([
        {
          id: '1',
          title: 'Cheese Burguer',
          description: "Pão, Blend 100g, 1 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
          price: 10.50,
          category: 'promoções'
        }, 
        {
          id: '2',
          title: 'X-Burguer',
          description: "Pão, Blend 150g, 2 fatia de queijo cheedar, cebola, picles com ketchup e mostarda.",
          price: 10.50,
          category: 'promoções'
        }, 
        {
          id: '3',
          title: 'X-Salada',
          description: "Pão, Blend 150g, 2 fatia de queijo cheedar, cebola, tomate, alface, ovo e mostarda.",
          price: 10.50,
          category: 'promoções'
        }, 
        {
          id: '4',
          title: 'Bacon Burguer',
          description: "Pão, Blend 150g, bacon, 2 fatia de queijo cheedar, cebola e mostarda.",
          price: 10.50,
          category: 'burguer'
        }, 
        {
          id: '5',
          title: 'Triple Steak Burguer',
          description: "Pão, 3 Blend 150g, bacon, 2 fatia de queijo cheedar, cebola e mostarda",
          price: 10.50,
          category: 'burguer'
        }
      ])
    console.log(itens)
    const [categorys, setCategorys] = useState([
        
    ])
    return ( 
        <>
            <Category itens={itens}></Category>
        </>
     );
}
 
export default Categorys;