import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className='hero'>
        <div className="left">
            <h4>welcome to my gallery</h4>
            <h1><span>HEY!</span> I am Hanan Alkahwaji ,  Front-End developer</h1>
            <p>Designing different, interactive and responsive websites using React</p>
            <a href="https://github.com/">  <button className="btn"> GO to GitHub</button></a>
          
        </div>
        <div className="right">
          <img src="/my-gallery/public/assets/hcj.png" alt="" />
        </div>
      
    </section>
  )
}
