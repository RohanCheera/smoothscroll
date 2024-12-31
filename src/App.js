import { Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Work from './pages/Work/Work.js';
import Error from './pages/Errors/Error.js';
import Layout from './pages/Layout/Layout.js';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route path='/about' element={<About/>}/>
          <Route index element={<Home/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;


















// import './App.css';

// function App() {

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       {/* Navigation Links */}
//       <nav>
//         <ul>
//           <li>
//             <button onClick={() => scrollToSection('section1')}>Section 1</button>
//           </li>
//           <li>
//             <button onClick={() => scrollToSection('section2')}>Section 2</button>
//           </li>
//           <li>
//             <button onClick={() => scrollToSection('section3')}>Section 3</button>
//           </li>
//         </ul>
//       </nav>

//       {/* Sections */}
//       <div id="section1" style={{ height: '100vh', background: '#f4f4f4' }}>
//         <h1>Section 1</h1>
//       </div>
//       <div id="section2" style={{ height: '100vh', background: '#e4e4e4' }}>
//         <h1>Section 2</h1>
//       </div>
//       <div id="section3" style={{ height: '100vh', background: '#d4d4d4' }}>
//         <h1>Section 3</h1>
//       </div>
//     </div>
//   );
// };


  
// export default App;
