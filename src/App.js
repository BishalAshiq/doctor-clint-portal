import {
  BrowserRouter as Router,
  Routes,
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
       <Routes>
       <Route path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute>}>
         </Route>
       <Route path="/dashBoard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
         </Route>
         <Route exact path="/" element={<Home/>}>
         </Route> 
         <Route path="/home" element={<Home/>}>
         </Route>  
         <Route path="/login" element={<Login/>}>
         </Route>
         <Route path="/register" element={<Register/>}>
         </Route>
       </Routes>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
