import React, { useState, useSyncExternalStore } from 'react';
import './App.css';

const App = () =>{


  const [click, setClick] = useState(false) 
  const [del, setDel] = useState(false)   
  

  const handleClick = () =>{
    setClick(true)  
  }

  const handleClick2 = () =>{
    setClick(false)
  }

  const handleBasket = () => {    
    setDel(true)     
  }

 const handleDelete = () =>{
  setDel(false)  
 }

  return(    
  <div className='card'>
    <div className='cross'>
      <img src='https://img5.goodfon.ru/wallpaper/nbig/8/21/krossovok-iarko-krasnyi-fon-naik-svoboda-sportivnaia-obuv-sn.jpg'/>
      <div className='info'>
        <div className='card-price'>
      <div className='name'>Nike sneaker</div>
      <div className='price'>$120</div> 
        </div>
        {click && <div className='modal'>
          <div className='modal_close' onClick={handleClick2}>x</div>
          <div className='modal_text'>Lorem ipsum dolor sit amet, consectetur adipicing elit. Animi dignissimos</div>
        </div> }
      <button className='btn' onClick={handleClick} disabled={false}>Детали</button>  
      </div>
      <hr></hr>   
      <div className='text'>Lorem ipsum dolor sit amet, consectetur adipicing elit. Animi dignissimos</div> 
      <button className='delete' onClick={handleBasket}>{del ? 'Уже в корзине' : 'Добавить в Корзину'}</button>
      {del && <div className='delte' onClick={handleDelete}> <button className='Deletebasket'> Удалить из корзины</button></div>}
    </div>
  </div>             
  )   
}


export default App;  
                         




