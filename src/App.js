import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
       <Route path="/appointment">
           <Appointment/>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <Route exact path="/">
           <Home></Home>
         </Route> 
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
