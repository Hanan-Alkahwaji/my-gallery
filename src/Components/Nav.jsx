import React from 'react'
import './Nav/Nav.css'


export default function Nav() {
    function darkmood() {
        if( document.getElementById('theme').checked == true){
            document.body.classList.add("dark")
            document.body.classList.remove('mood')
           
        }
        else{
            document.body.classList.add('mood')
            document.body.classList.remove("dark")
        }
      
       
        
    }
  return (
    <nav>
        <h1>MY Gallery</h1>
        <label htmlFor="theme" className='theme'>
            <span className='theme__toggle-wrap'>
                <input type="checkbox"  id='theme' className='theme__toggle' role='switch' name='theme' value={'dark'} onClick={darkmood}/>
                <span className='theme__fill'></span>
                <span className='theme__icon'>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                    <span className='theme__icon-part'></span>
                </span>

            </span>

        </label>
     
        
        

    </nav>
  )
}
