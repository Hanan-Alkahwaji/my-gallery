import './Projects.css'

export default function Projects({projects}) {
  return (
    <section className='projects'>
        <h1>My projects</h1>
        <div className="container">
        {
            projects.map((element,index)=>{
                return<>
                             <div className="card">
                    <div className="top">
                    <div className="circles"> 
            <div className="c"></div>
            <div className="c"></div>
            <div className="c"></div>
          </div>
        
          <div className="browser">
            <div className="chevrons">
              <svg viewBox="0 0 20 20" height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                <path transform="translate(6.25 3.75)" d="M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z" id="Fill"></path>
              </svg>
              <svg viewBox="0 0 20 20" height="16" width="16" xmlns="http://www.w3.org/2000/svg" data-name="20" id="_20">
                <path transform="translate(6.625 3.75)" d="M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z" id="Fill"></path>
              </svg>
            </div>
            <div className="search-bar">
              <svg xmlns="http://www.w3.org/2000/svg" width="7.89" height="7.887" viewBox="0 0 16.89 16.887">
          <path id="Fill" d="M16.006,16.887h0l-4.743-4.718a6.875,6.875,0,1,1,.906-.906l4.719,4.744-.88.88ZM6.887,1.262a5.625,5.625,0,1,0,5.625,5.625A5.631,5.631,0,0,0,6.887,1.262Z" transform="translate(0.003 0)"></path>
        </svg>
        
              My project
            <div>
          </div>
         
        </div>
        
        </div>
                    </div>
                    <div className="down">
                        <img src={element.img} alt="" />
                        <div className="info">
                        <h2>{element.h2}</h2>
                        <a href={element.url}>
                        <div className="container-button">
                        <div className="hover bt-1"></div>
                        <div className="hover bt-2"></div>
                        <div className="hover bt-3"></div>
                        <div className="hover bt-4"></div>
                        <div className="hover bt-5"></div>
                        <div className="hover bt-6"></div>
  <button></button>

</div>
</a>

                        </div>
                       

                        
                    </div>
                    <a href={element.repo}>
                    <button className="btn">
  <svg width="40" height="40" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
  </svg>
</button>

                    </a>
               
          
        </div>
                
                </> 
            

                
            })
        }

        </div>
      

      </section>
  )
}
