import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Solution from './Pages/Solution';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about-us" element={<About />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/solutions" element={<Solution />}/>
                <Route path="/work" element={<Work />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/contact-us" element={<Contact />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
