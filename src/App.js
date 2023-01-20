import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Section1 from "./Components/Section1"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Qualifications from "./Components/Qualifications"
import WorkWith from "./Components/WorkWith"
import Servicess from "./Components/Servicess"
import Contact from "./Components/Contact"
function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <About />
      <Skills />
      <Qualifications />
      <WorkWith />
      <Servicess />
      <Contact />
      <h1 style={{ margin: 50, textAlign: "center" }}>FEEL FREE TO CONTACT</h1>
    </div>
  );
}

export default App;
