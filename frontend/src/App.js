import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import './App.css';
import Admin from "./components/admin"; 
import AdminDashboard from "./components/admin/admindashboard"; 
import Main from "./components/main"; 
import Signup from './components/main/signup';
import Login from './components/main/login';
import Home from "./components/main/home";
import User from "./components/user"; 
import UserDashboard from "./components/user/userdashboard";

function App() {
    return (
      <div >
        
      
        <BrowserRouter>
        <Routes>
        <Route element={<Admin/>} path="admin">
          <Route element={<AdminDashboard/>} path="admindashboard"/>
          </Route>
          <Route element ={<Main/>} path="main">
          <Route element ={<Signup/>} path="signup"/>
          <Route element ={<Login/>} path="login"/>
          <Route element={<Home/>} path="home"/>
          </Route>
          <Route element={<User/>} path="user">
            <Route element={<UserDashboard/>} path="userdashboard"/>
        </Route>
        </Routes>
     </BrowserRouter>
  
      </div>
    );
  }
  
  export default App;