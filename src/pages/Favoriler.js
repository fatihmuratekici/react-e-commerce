import React, { useContext } from 'react'
import FavoriList from '../component/FavoriList'
import { GlobalContext } from '../context/context';

function Favoriler() {
    const {product} = useContext(GlobalContext);
    const favoriler = product.filter(item => item.isFavorite === true);
 
   
  return (
    <div className='container'>

       {
         favoriler.length > 0 ? ( 
         favoriler.map(item => (
            <FavoriList item={item} key={item.id}/>
         ))
        ) : "Favorilerinizde henüz ürün bulunmamaktadır"
       }
       
    </div>
  )
}

export default Favoriler