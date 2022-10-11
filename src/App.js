import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Login from './Login';
import Home from './Home';
import Settings from './Settings';


function App() {
  
  const [token, setToken] =useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (

    <div className="App">
      <h1>B2B Dashboard</h1>
        
      <Router>
          
        <Routes>
          <Route 
            exact path="/"  
            element= { <Home /> }
          >
          </Route>

          <Route 
            exact path='/Settings'
            element={<Settings />}
          >
          </Route>

        </Routes>

      </Router>
    </div>
      
  );
}

export default App;
