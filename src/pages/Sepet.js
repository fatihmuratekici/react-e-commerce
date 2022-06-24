import React, { useContext } from 'react'
import SepetList from '../component/SepetList'
import { GlobalContext } from '../context/context';

function Sepet() {

    const {sepet,sumPrice} = useContext(GlobalContext);
  return (
    <div className='container mt-4'>

        {
            sepet.map(item => (
                <SepetList key={item.id} item={item}/>
            ))
        }
        
        <div>Toplam Fiyat : {sumPrice()} TL</div>
    </div>
  )
}

export default Sepet