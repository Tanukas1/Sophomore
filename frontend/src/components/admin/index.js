import { Book } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Footer from "./footer";
import Header from "./header";

const Admin = () => {

  const options = [
    {
      name : 'Manage User',
      icon : <Book />,
      link : '/admin/manageUser'
    },
    
  ]


  return (
    <>
      <Sidebar sidebarOptions={options} title={'Admin Dashboard'} >
      <Outlet />
    </Sidebar>
      
    </>
  );
};

export default Admin;