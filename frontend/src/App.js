import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Admin from "./components/admin";
import Header from "./components/admin/header";
import AdminDashboard from "./components/admin/admindashboard";
import Main from "./components/main";
import Signup from './components/main/signup';
import Login from './components/main/login';
import Home from "./components/main/home";
import Footer from './components/main/footer';
import User from "./components/user";
import UserDashboard from "./components/user/userdashboard";
import AddNovel from './components/user/addNovel';
import Exchangenovel from './components/user/exchangenovel';
import Checkoutpage from './components/user/checkoutpage';
import Profile from './components/user/profile';
import BrowserNovel from "./components/main/browseNovel";
import NovelDetail from "./components/main/novelDetail";
import AddQuery from "./components/main/addQuery";
import ListQuery from "./components/main/listQuery";
import ViewNovel from "./components/main/viewNovel";
import Notfound from './components/notfound';
import ManageUser from './components/admin/manageUser';

function App() {
  return (
    <div >


      <BrowserRouter>
        <Routes>
          <Route element={<Notfound />} path="notfound" />
          <Route element={<Admin />} path="admin" >
            <Route element={<AdminDashboard />} path="admindashboard" />
            <Route element={<ManageUser />} path="manageuser" />
          </Route>

          <Route element={<Main />} path="main">
          <Route element={<Home />} path="home" />
            <Route element={<Signup />} path="signup" />
            <Route element={<Login />} path="login" />
            <Route element={<BrowserNovel />} path="browserNovel"/>
            <Route element={<NovelDetail/>} path="novelDetail"/>
            <Route element={<AddQuery />} path="addQuery" />
            <Route element={<ListQuery />} path="listQuery" />
            <Route element={<ViewNovel />} path="viewNovel" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<UserDashboard />} path="dashboard" />
            <Route element={<AddNovel />} path="addNovel" />
            <Route element={<Exchangenovel />} path="exchangenovel" />
            <Route element={<Checkoutpage/>} path="checkoutpage"/>
            <Route element={<Profile/>} path="profile"/>
          </Route>

          <Route element={<Navigate to="/main/home" />} path="/" />
          <Route element={<Navigate to="/notfound" />} path="*" />

        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
