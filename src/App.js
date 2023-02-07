import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
 import Contact from './Components/Contact';
import CRUD from './Components/CRUD';




function App() {
  return (
    <div>
       <BrowserRouter> 
        <Routes>
          <Route path='/' element = {<Home />} ></Route> 
           <Route path='/CRUD' element = {<CRUD/>} ></Route> 
          <Route path='/Contact' element = {<Contact />} ></Route> 
          
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;