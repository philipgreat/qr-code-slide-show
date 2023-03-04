import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slideshow from './Slideshow';
import './App.css';

const images = [
  'https://via.placeholder.com/500x300?text=Image+1',
  'https://via.placeholder.com/500x300?text=Image+2',
  'https://via.placeholder.com/500x300?text=Image+3',
];

const App = () => {
  return (
    <Router>
      <div className="app">
        
      <Slideshow/>
      </div>
    </Router>
  );
};

export default App;

/*

return (
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/slideshow" element={ <Slideshow images={images} />}>
           
          </Route>
          <Route path="/" element={<Slideshow images={images} />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );


<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/slideshow">Slideshow</Link>
            </li>
          </ul>
        </nav>
return (
    <SplitPane split="vertical" minSize={200} defaultSize={400}>
  <div >

  <textarea
      value={text}
      onChange={(event)=>setText(event.target.value)}

      padding={10}
      
      
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 10, 
        height:"98vh",
        width:"98%"
      }}
    />

  </div>
  <div >    
     <img  style={{height:"70vh",margin:"10px 10px 10px 10px ", padding:"10px 10px 10px 10px"}}
      alt="generated image"
      src={getURL(text)}/></div>
</SplitPane>

*/