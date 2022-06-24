import React, { useContext } from 'react'
import {GlobalContext} from '../context/context'
import Card from './Card';

function CardList() {

   const {product} =  useContext(GlobalContext);
    
  return (
    <div className='d-flex flex-wrap gap-4 mt-4'>
        {product.sort((a,b) => a.id - b.id ).map(item =>  (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default CardList