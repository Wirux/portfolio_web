import React from 'react';
// import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">

      <Navbar /> {/* Corrected component usage */}
      <Home />  {/* Corrected component usage */}
      {/* <About /> {/* Corrected component usage */}
      <Skills /> {/* Corrected component usage */}
      <Projects /> {/* Corrected component usage */}
      <Social /> {/* Corrected component usage */}
      <Contact /> {/* Corrected component usage */}
    </div>
  )
}
//
export default App;
//
// create navbars and footers and stuf300 
