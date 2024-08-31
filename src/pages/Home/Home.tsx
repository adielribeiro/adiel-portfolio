import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills"
import "../Home/Home.css"


const Home = () => {

  return (
    <>
      
      
    <main>
      <NavBar /> 
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
    </main>
      
    
    </>
  )
}

export default Home
