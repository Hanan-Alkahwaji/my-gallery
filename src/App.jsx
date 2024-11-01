
import './App.css'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav'
import Projects from './Components/Projects/Projects'

function App() {
  let projects=[{h2:"personal_portfolio",url:"https://hanan-alkahwaji.github.io/personal-portfolio-website/",img:"/my-gallery/assets/project1.png",
    repo:"https://github.com/Hanan-Alkahwaji/personal-portfolio-website.git"
  },
    {h2:"phone-store",url:"https://hanan-alkahwaji.github.io/project-store/",img:"/my-gallery/assets/project2.png",
      repo:"https://github.com/Hanan-Alkahwaji/project-store.git"
    }

  ]


  return (
    <>
    <Nav/>
    <Hero/>
    <Projects projects={projects}/>
    <Footer/>
    
    
    </>
  )
}

export default App
