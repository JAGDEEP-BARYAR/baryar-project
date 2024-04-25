import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="bg-brown-950 p-3 fixed top-0 w-full z-30 font font-mono font-extrabold text-lg text-shadow-outline border-b border-slate-800">
      <div className="flex container mx-auto flex-row justify-between items-center">
        <div className="flex-none">
          <h1>Jagdeep Baryar</h1>
        </div>
        <ul className="flex flex-row justify-center items-center flex-grow">
        <li className="px-4"><a href="#about">About</a></li>
          <li className="px-4">|</li>
          <li className="px-4"> <a href="#education">Education</a></li>
          <li className="px-4">|</li>
          <li className="px-4"><a href="#projects">Projects</a></li>
          <li className="px-4">|</li>
          <li className="px-4"> <a href="#contact">Contact</a></li>
          <li className="px-4">|</li>
          <li className="px-4"> <a href="#proficiency">Proficiency</a></li>
      </ul>
      <div>
        <ul className="flex flex-row justify-center items-center flex-grow">
          <li className="px-4">
            <a href="https://github.com/JAGDEEP-BARYAR">
              <FaGithub size={30}/>
            </a>
          </li>
          <li className="px-4">
            <a href="https://www.linkedin.com/in/jagdeep-kaur-baryar-0b5b64269/">
              <FaLinkedinIn size={30}/>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}