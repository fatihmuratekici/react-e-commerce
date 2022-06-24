import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { GlobalContext } from '../context/context';

function Detay() {

  let {id} = useParams();
   const {product} =  useContext(GlobalContext);

   const item = product.find(e => e.id === Number(id))

  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'><img src={item.img} className="mw-100 h-50"/></div>
            <div className='col-md-6'>
                <p>Ürün İsmi : {item.name}</p>    
                <p>Ürün Fiyatı : {item.price}</p>    
                <p>Ürün Açıklaması : {item.description}</p>    
            </div>
        </div>
    </div>
  )
}

export default Detay