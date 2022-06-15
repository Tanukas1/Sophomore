import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import Header from "./components/admin/header";
import AdminDashboard from "./components/admin/admindashboard";
import Main from "./components/main";
import Signup from "./components/main/signup";
import Login from "./components/main/login";
import Home from "./components/main/home";
import Footer from "./components/main/footer";
import User from "./components/user";
import UserDashboard from "./components/user/userdashboard";
import AddNovel from "./components/user/addNovel";
import Exchangenovel from "./components/user/exchangenovel";
import Checkoutpage from "./components/user/checkoutpage";
import Profile from "./components/user/profile";
import BrowserNovel from "./components/main/browseNovel";
import NovelDetail from "./components/main/novelDetail";
import ListQuery from "./components/main/listQuery";
import ViewNovel from "./components/main/viewNovel";
import Notfound from "./components/notfound";
import ManageUser from "./components/admin/manageUser";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import BrowseNovel from "./components/main/browseNovel";
import ViewQuery from "./components/main/viewQuery";
import Authorisor from "./components/authenticator";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AdminAuthorisor from "./components/adminAuth";
import AdminProfile from "./components/admin/profile";
import BrowseQuery from "./components/main/browseQuery";
import BuyNovel from "./components/user/buyNovel";
import Chat2 from "./components/user/chat2";
import ManageQuery from "./components/user/manageQuery";
import ManageNovel from "./components/user/manageNovel";
import AddQuery from "./components/user/addQuery";

function App() {
  TimeAgo.addDefaultLocale(en);
  const stripe = loadStripe(
    "pk_test_51L1Wf4SG8drK0Wt5fTi5mmAwG39rkyndP4LsZdqBkKgOdoVfDPzkVt8OHKpq94LBqFxWmtLDQZqll91aHQRkk17500YOymPufa"
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Notfound />} path="notfound" />
          <Route
            element={
              <AdminAuthorisor>
                <Admin />
              </AdminAuthorisor>
            }
            path="admin"
          >
            <Route element={<AdminProfile></AdminProfile>} path="profile" />
            <Route element={<ManageUser />} path="manageuser" />
          </Route>

          <Route element={<Main></Main>} path="main">
            <Route
              element={<BrowseQuery></BrowseQuery>}
              path="browsequery"
            ></Route>
            <Route element={<BrowseNovel />} path="browsenovel"></Route>
            <Route element={<NovelDetail />} path="noveldetail/:id"></Route>
            <Route element={<ViewQuery />} path="viewquery/:id"></Route>
            <Route
              element={
                <Authorisor>
                  <Elements stripe={stripe}>
                    <BuyNovel />
                  </Elements>
                </Authorisor>
              }
              path="buy"
            />
            <Route element={<Login />} path="login"></Route>
            <Route element={<Signup />} path="signup"></Route>
          </Route>

          <Route
            element={
              <Authorisor>
                <User />
              </Authorisor>
            }
            path="user"
          >
            <Route element={<AddQuery></AddQuery>} path="addQuery"></Route>
            <Route element={<Chat2></Chat2>} path="chat"></Route>
            <Route element={<AddNovel></AddNovel>} path="addnovel"></Route>
            <Route
              element={<ManageQuery></ManageQuery>}
              path="managequery"
            ></Route>
            <Route
              element={<ManageNovel></ManageNovel>}
              path="managenovel"
            ></Route>
          </Route>

          <Route element={<Navigate to="/main/home" />} path="/" />
          <Route element={<Navigate to="/notfound" />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
