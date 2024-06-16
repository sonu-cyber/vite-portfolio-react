import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import Layouts from './components/Layouts';
import Home from './components/Home';
import About from './components/About';
import ContactMe from './components/ContactMe';


function App() {

 /* Return values */
   
  return (

  <div className="App">
        <header className="app-header">
        {/* <Layouts/>  */}
        <h1>Portfolio React App</h1>
        </header>
      
      <BrowserRouter>
      <Routes>
             
          <Route path='/'element={<Layouts/>}/>
          <Route path='home'element={<Home/>}/>
            <Route path='about'element={<About/>}/>
            <Route path='contactme'element={<ContactMe/>}/>
          
        </Routes>
      </BrowserRouter>
     <footer className='app-footer'>
      <p>Contact Me </p>
      <p> Email: gayathriraghuram1@gmail.com</p>
      
     </footer>

    </div>
  );

      }
export default App;
