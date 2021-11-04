import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
       <Route path="/appointment">
           <Appointment/>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/">
           <Home></Home>
         </Route>
         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
