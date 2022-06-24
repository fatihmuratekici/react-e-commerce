import React, { useContext  } from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/context';
import SepetBox from './SepetBox'

function Header() {

    const {sepet,changeTheme,tema} =  useContext(GlobalContext);
    const body = document.querySelector("body");
    body.classList = `${tema === false ? "bg-dark bg-opacity-75 text-white" : "bg-light"}`

  return (
   
        <nav className={tema === false ? "navbar bg-dark" : "navbar bg-secondary"}>
            <div className="container">
                <div className='text-white'>LOGO</div>
                
                <div className='d-flex'>
                <div className="btn-group m-2">
                        <button   className={sepet.length < 1  ? "btn btn-secondary btn-m dropdown-toggle disabled" : "btn btn-secondary btn-m dropdown-toggle"} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sepetim
                        </button>
                        <ul className="dropdown-menu">
                            {
                                sepet.map(item => (
                                    <SepetBox key={item.id} item={item}/>
                                ))
                            }
                          
                            <hr/>
                            <Link className="dropdown-item" to="/sepet">Sepetim </Link>
                        </ul>
                    </div>
                <Link to="/" className='text-white nav-item nav-link m-2'>Home Page</Link>
                <Link to="/favoriler" className='text-white nav-item nav-link m-2'>Favoriler</Link>
                  <button onClick={changeTheme} className={tema === false ? "navbar bg-secondary text-white" : "navbar bg-dark text-white"}>{tema === false ? "Açık Tema" : "Koyu Tema"}</button>
                   
                   
                </div>

               
            </div>
        </nav>
   
  )
}

export default Header