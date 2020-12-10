import React from 'react'
import './css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './context_api/StateProvider';

function App() {

const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user?(<Login/>):(
          <div>
                <Header/>
     
     <div className="app__body">
     <Sidebar/>
     <Switch>
       <Route path="/room/:roomId">
        <Chat/>
       </Route>
       <Route path="/">
         <h2>Welcome</h2>
         {/* <Chat/> */}
       </Route>
     </Switch>
     </div>
     
          </div>
        )}



      </Router>

</div>

   
  );
}

export default App;
