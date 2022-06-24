import React, { useContext } from 'react'
import { GlobalContext } from '../context/context';
import {Link} from 'react-router-dom'

function Card({item}) {

  const {addToSepet,addToFavori,tema} =  useContext(GlobalContext);
  

  return (
    <div className={tema === false ? "card bg-dark" : "card"} style={{width: "18rem"}}>
        <img src={item.img} className="card-img-top "/>
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price} TL</p>
            <div className='d-flex gap-2 mb-2'>
                <button  onClick={() => addToSepet(item)} className="btn btn-success">Sepete Ekle</button>
                <button onClick={() => addToFavori(item)} className="btn btn-primary">{item.isFavorite === false ? "Favorilere Ekle" : "Favoriden Çıkar"}</button> 
            </div>
            <Link to={`/detay/${item.id}`} className='btn btn-secondary mx-auto'  >Ürün Detayı</Link>
        </div>
    </div>
  )
}

export default Card