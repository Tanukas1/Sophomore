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
 import AddNovel from './components/user/addNovel';
 import BrowserNovel from "./components/main/browseNovel";
 import AddQuery from "./components/main/addQuery";
 import ListQuery from "./components/main/listQuery";
import ViewNovel from "./components/main/viewNovel";

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
           <Route element ={<BrowserNovel/>} path="browserNovel"/>
           <Route element={<Home/>} path="home"/>
           <Route element={<AddQuery/>} path="addQuery"/>
           <Route element={<ListQuery/>} path="listQuery"/>
           <Route element={<ViewNovel/>} path="viewNovel"/>
          </Route>


           <Route element={<User/>} path="user">
             <Route element={<UserDashboard/>} path="dashboard">
             <Route element={<AddNovel/>} path="addNovel" />
            
             </Route>
            
         </Route>
         </Routes>
      </BrowserRouter>
  
    </div>
     );
   }
  
   export default App;



// import { BrowserRouter,Routes ,Route} from 'react-router-dom';
// import React from 'react'
// import Header from "./sonal/user/header"
// import UserDashboard from "./sonal/user/dashboard"
// import Login from "./sonal/user/login"
// import Signup from "./sonal/user/signup"
// export default function App() {
//   return (
//     <div>
//     <BrowserRouter>
//     <Routes>
//     <Route element={<Header/>} path="header"/>
//     <Route element={<Login/>} path="login"/>
//     <Route element={<Signup/>} path="signup"/>
//     <Route element={<UserDashboard/>} path="dashboard"/>
//       </Routes>
//       </BrowserRouter>
//    </div>

//   )
// }
