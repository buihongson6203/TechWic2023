import React from 'react';
import { BrowserRouter as Router, Link, Route,Routes} from 'react-router-dom'; 
import Contact from './Contact/Contact';
import FeedBack from './FeedBack/FeedBack';


function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/Contact">
          <button>Contact</button>
        </Link>
        <Routes> 
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Link to="/FeedBack">
          <button>FeedBack</button>
        </Link>

        <Routes> 
          <Route path="/FeedBack"  element={<FeedBack />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
