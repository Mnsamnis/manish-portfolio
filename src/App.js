import './App.css';

import About from './Components/About';
import Banner from './Components/Banner';

import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Footer from './Components/Footer';

function App() {
  return (
<div className="App">

        <Navbar />
        <Banner />
        <About />
        <Skills />
        <Project />
        <Footer/>
  
    </div>
  );
}

export default App;
