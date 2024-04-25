import NavBar from './components/NavBar'
import Proficiency from './components/Proficiency'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
export default function Page() {
  return (
    <div className='bg-black-950 h-screen w-screen relative'>
      <NavBar />
      <div className="h-12 w-full absolute top-0 z-10 bg-gradient-to-b from-slate-950 to-transparent"></div>
      <div className="overflow-auto max-h-screen">
        <About/>
        <Education />
        <Projects/>
        <Contact />
        <Proficiency />
      </div>
    </div>
  )
}