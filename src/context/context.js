import {createContext, useEffect, useState} from 'react'
import data from '../data/data'

export const GlobalContext = createContext();


export const GlobalProvider = ({children}) => {


    const initialstate = data;

     const [product,setProduct] = useState(initialstate);
     const [sepet,setSepet] = useState([]);
     const [tema,setTema] = useState(true);
     


     function changeTheme(){
        setTema(!tema)
      
     }

    
     function addToSepet(item) {

        const kart = sepet.find(e=> e.id === item.id);


        if(kart){
          const basket = sepet.filter(x => x.id !== kart.id);   
          setSepet([...basket,{...item, quantity:kart.quantity+1}]);  
        //  kart.quantity +=1;
        }
        else{
            setSepet([...sepet,{...item, quantity:1}]);  
        }
     }
 

     function sumPrice(){
        
       let toplam = 0;
       sepet.forEach(eleman => {
            toplam += eleman.price * eleman.quantity
       });
      
       return toplam
         
     }



     function addToFavori(item){

            const kart = product.find(i => i.id === item.id);

            if(kart){
                const kartlar = product.filter(x => x.id !== kart.id);
                setProduct([...kartlar,{...item,isFavorite : !item.isFavorite}])
            }
     }

     function removeToSepet(id){

      const card = sepet.filter(i => i.id !== id)
      setSepet(card)
      

     }
      

     const gonder = {
        product,setProduct,sepet,setSepet,addToSepet,sumPrice,
        addToFavori,changeTheme,tema,setTema,removeToSepet
     }

    return(
        <GlobalContext.Provider value={gonder}>
            {children}
        </GlobalContext.Provider>
    )
}