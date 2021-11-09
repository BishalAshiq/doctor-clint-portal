import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
       <Switch>
       <PrivateRoute path="/appointment">
           <Appointment/>
         </PrivateRoute>
       <PrivateRoute path="/dashBoard">
           <Dashboard/>
         </PrivateRoute>
         <Route exact path="/">
           <Home></Home>
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
       </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
