import React, { useContext } from 'react'
import { GlobalContext } from '../context/context';

function FavoriList({item}) {

   const {addToFavori} = useContext(GlobalContext);

  return (
    <div className='row mt-2' >
    
        <div className='col-md-2'>
            <img src={item.img} className="mw-100" style={{height:"120px"}}/>
        </div>
        <div className='col-md-6'>Ürün İsmi: {item.name}</div>
        <div className='col-md-2'>Ürün Fiyatı: {item.price} TL</div>
        <div className='col-md-2'><button  onClick={() => addToFavori(item)}>Favoriden Çıkar</button></div>
        <hr className='mt-2'/>
    </div>
  )
}

export default FavoriList