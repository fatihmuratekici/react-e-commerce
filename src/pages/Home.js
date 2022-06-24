import React from 'react'
import CardList from '../component/CardList'
import Slider from '../component/Slider'

function Home() {
  return (

    <>
      <section>
        <Slider/>
      </section>
  

    <div className='container'> 

      <CardList/>
    </div>
    </>
  )
}

export default Home