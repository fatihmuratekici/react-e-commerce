import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Favoriler from './pages/Favoriler';
import Home from './pages/Home';
import Sepet from './pages/Sepet';
import Detay from './pages/Detay';




function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sepet' element={<Sepet/>}/>
        <Route path='/favoriler' element={<Favoriler/>}/>
        <Route path='/detay/:id' element={<Detay/>}/>
      </Routes>

    </>
      
  );
}

export default App;
