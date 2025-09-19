import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import About from "../components/About"
import Contact from "../components/Contact"
import Credits from "../components/Credits"

const Content = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Features />
        <HowItWorks />
        <About />
        <Contact />
        <Credits />
    </div>
  )
}

export default Content
