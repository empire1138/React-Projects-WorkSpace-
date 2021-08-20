import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{


render(){
    return (
        <div className="App">

           <Router>
               <Navbar/>
               <Switch>
                   <Route path='/' exact />
               </Switch>
           </Router>
        </div>
    )
}

}

export default App; 