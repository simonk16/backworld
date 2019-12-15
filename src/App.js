import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import Home from './pages/Home';






function App() {
  return (
    <Router>
    <div>
    
    <Switch>
   

    <Route exact path="/home" component={Home} />


    </Switch>
      
    </div>
    </Router>
  );
}

export default App;