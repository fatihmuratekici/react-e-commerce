import { useContext } from "react"
import { GlobalContext } from "../context/context";


function SepetList({item}) {

  const {removeToSepet} =  useContext(GlobalContext);

  return (
    <div className='row' >
            <div className='col-md-2'>
                <img src={item.img} className="mw-100" style={{height:"120px"}}/>
            </div>
            <div className='col-md-4'>Ürün İsmi: {item.name}</div>
            <div className='col-md-2'>Ürün Fiyatı: {item.price} TL</div>
            <div className='col-md-2'>Ürün Adedi: {item.quantity}</div>
            <div className='col-md-2' ><button className="btn btn-danger" onClick={() => removeToSepet(item.id)}>Sepetten Sil</button></div>
            <hr className='mt-2'/>
    </div>
  )
}

export default SepetList